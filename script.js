const numberInput = document.getElementById("numberInput");
const numberForm = document.getElementById("numberForm");
const numerosIngresados = document.getElementById("numerosIngresados");
const numberFormError = document.getElementById("numberFormError")

function arangeNumbers(numbers) {
    // Convertimos la lista de hijos en un array real
    const numbersList = Array.from(numbers.children);
    console.log(numbersList);
    
    const newList = [];


    numbersList.forEach((element, i, array) => {
        const actualNum = parseFloat(element.innerText.replace(/[^0-9]/g, ""));
        
        // Verificamos si hay un siguiente elemento
        if (array[i + 1]) {
            const siguienteNum = parseFloat(array[i + 1].innerText.replace(/[^0-9]/g, ""));
            console.log(actualNum);
            
            // Comparación numérica
            if (actualNum > siguienteNum) {
                newList.push(actualNum);
                console.log(newList);
                
            }
        }
        console.log("Nueva Lista");
        console.log(newList);
        
    });

    console.log("Lista original:", numbersList.map(e => e.innerText));
    console.log("Nuevos valores (mayores que el siguiente):", newList);
}

function newNumber(numberParam) {
    let newNumber = document.createElement("li")
        newNumber.innerHTML = numberParam || numberInput.value;
        let button = document.createElement("button");
        button.innerHTML = "❌";
        button.className = "newNumberDelete";
        newNumber.appendChild(button);
        numerosIngresados.appendChild(newNumber);
    return numerosIngresados; 
}

numberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(numerosIngresados.childElementCount == 3) {
        let numberError = document.getElementById("numberError")
    } else if(numberInput.value !=="") {
        arangeNumbers(newNumber());
    } else {
        numberFormError.innerHTML = "Ingrese un valor";
    }
    numberInput.value = "";

})

numberInput.addEventListener("keydown", ( e ) => {
    if(e.key == "enter") console.log("enter");
})