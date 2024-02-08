function createElements({count ,element, className}) {
    const createElementsList = []
    for (let i = 0; i < count; i++) {
        const createdElement = document.createElement(element);
        createdElement.classList.add(className);
        createdElement.dataset.index = i;
        createElementsList.push(createdElement)
    }
    return createElementsList;
}

export default createElements;