

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

export const getUniqueYears = (data, tipo) => {
    const yearsSet = new Set();

    data.forEach(element => {
        if (element.tipo === tipo) {
            yearsSet.add(element.year);
        }
    });

    const sortedYears = [...yearsSet].sort((a, b) => a - b);
    return sortedYears;
};


export const everyYear = (data) => {
    const years = new Set();

    if (Array.isArray(data)) {
        data.forEach(item => {
            if (Array.isArray(item)) {
                item.forEach(element => {
                    if (element.year !==""){
                        years.add(element.year);
                    }
                });
            } else {
                years.add(item.year);
            }
        });
    } 

    const sortedYears = Array.from(years).sort((a, b) => b - a);
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
