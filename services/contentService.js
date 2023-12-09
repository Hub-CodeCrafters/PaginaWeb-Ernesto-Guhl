

 export const getAllPublications = (data) => {
    return data;
 }


export const getPublicationByCategory = (data, category) => {
    if (Number.isInteger(category)) {
        // Si el category es un número (año), filtrar por año
        const filteredData = data.filter(element => element.year === category);
        return filteredData;
    } else {
        // Si el category es un nombre de categoría, filtrar por categoría
        const filteredData = data.filter(element => element[category] === true);
        return filteredData;
    }
};


export const getUniqueYears = (data,) => {

    const yearsTipo1 = new Set();
    const yearsTipo2 = new Set();
    const yearsTipo3 = new Set();
    const yearsTipo4 = new Set();

    data.forEach(element => {
        if (element.tipo === "informes") {
            yearsTipo1.add(element.year);
        }
        if (element.tipo === "articulos") {
            yearsTipo2.add(element.year);
        }
        if (element.tipo === "libros") {
            yearsTipo3.add(element.year);
        }
        if (element.tipo === "capitulos") {
            yearsTipo4.add(element.year);
        }
    });

    const sortedYearsTipo1 = [...yearsTipo1].sort((a, b) => a - b);
    const sortedYearsTipo2 = [...yearsTipo2].sort((a, b) => a - b);
    const sortedYearsTipo3 = [...yearsTipo3].sort((a, b) => a - b);
    const sortedYearsTipo4 = [...yearsTipo4].sort((a, b) => a - b);
    return { sortedYearsTipo1, sortedYearsTipo2,sortedYearsTipo3,sortedYearsTipo4 };
};


// funcion que sacas los años de la data suministrada y  la ordena de mayor a menor
export const everyYear = (data) => {
    const years = new Set();
    data.forEach(element => {
            years.add(element.year);     
       
    });
   // Convertir los Sets en arrays y ordenar las years de cada tipo de publicacion 
   const sortedYears = [...years].sort((a, b) => b - a);
   return sortedYears;  
};


//  esta funcion se encarga de boorrar las cartas ya renderizadas al principio  o cuando se aplica un filtro 
export const removeElementsByClass = (className) => {
    const elements = document.getElementsByClassName(className);
    
    // Convertir la colección HTML en un array para poder usar forEach
    Array.from(elements).forEach(element => {
        element.parentNode.removeChild(element);
    });
};
