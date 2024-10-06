//Dado el array: 
const array = ["Joaquin", 1, ["Hola","Adios"], true];

//1) Recorrer el array e insertar dichos valores en el localstorage. El key de cada valor corresponderá a variable + i siendo i el indice en el que se encuentra el array.
for (let i = 0; i<array.length; i++){
    localStorage.setItem(array(i));
}

//2) Recorrer de 0 a la longitud del array y hacer la peticion de variable + i del localstorage

//3) Crear un div por cada variable e insertar el valor de dicha variable en el div
for (let i = 0; i<array.length; i++){
    const divs = document.createElement("div")
    divs.id = `div-${i+1}`
    divs.classList.add(i);
}

//4) insertar estos divs en el body del html
for (let i = 0; i<array.length; i++){
    cardContainer.appendChild(divs.id = i);
}

