const numberInput = document.getElementById("numberInput");
const numberForm = document.getElementById("numberForm");
const numerosIngresados = document.getElementById("numerosIngresados");
const numberFormError = document.getElementById("numberFormError");
const numerosOrdenados = document.getElementById("numerosOrdenados");

function arrangeNumbers(numbers) {
  const numbersList = Array.from(numbers.children);
  let newList = [];
  console.log(numbersList.length);

  if (numbersList.length > 1 && numbersList.length < 4) {
    // limpiar la lista ordenada anterior
    numerosOrdenados.innerHTML = "";

    numbersList.forEach((element, i, array) => {
      const actualNum = parseFloat(element.innerText.replace(/[^0-9]/g, ""));
      if (array[i - 1]) {
        const prevNum = parseFloat(array[i - 1].innerText.replace(/[^0-9]/g, ""));
        if (actualNum >= prevNum) newList.push(actualNum);
        else newList.unshift(actualNum);
      } else {
        newList.push(actualNum);
      }
    });
  } else if (numbersList.length === 1) {
    newList.push(parseFloat(numbersList[0].innerText.replace(/[^0-9]/g, "")));
  }
  

  // mostrar la nueva lista
  newList.forEach(num => {
    const li = document.createElement("li");
    li.textContent = num;
    numerosOrdenados.appendChild(li);
  });

  console.log("Lista ordenada:", newList);
}

function newNumber(numberParam) {
  const newLi = document.createElement("li");
  newLi.innerHTML = numberParam || numberInput.value;

  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.className = "newNumberDelete";
  button.onclick = () => {
    newLi.remove();
    arrangeNumbers(numerosIngresados);
  };

  newLi.appendChild(button);
  numerosIngresados.appendChild(newLi);
  return numerosIngresados;
}

numberForm.addEventListener("submit", (e) => {
  e.preventDefault();
  numberFormError.textContent = "";

  const valor = numberInput.value.trim();

  if (!valor) {
    numberFormError.textContent = "Ingrese un valor";
    return;
  }
  console.log(valor);

  // Agregar número
  console.log(numerosIngresados);
  
  console.log(numerosIngresados.length);
  //Limitar el ingreso de numeros a 3
  if(numerosIngresados.childElementCount < 3) {
    let lista = newNumber(valor);
    arrangeNumbers(lista);
  } else {
    // Ordenar lista
    arrangeNumbers(numerosIngresados);
    numberFormError.textContent = "Elimine un numero para ingresar mas numeros";
  }
  
  // Limpiar input
  numberInput.value = "";
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") console.log("Enter presionado");
});