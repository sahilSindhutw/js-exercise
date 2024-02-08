export function createElements({count ,element, className,startingIndex = 0}) {
    const createElementsList = []
    for (let i = startingIndex; i < count+startingIndex; i++) {
        const createdElement = createElement({element,className})
        createdElement.dataset.index = i;
        createElementsList.push(createdElement)
    }
    return createElementsList;
}

export function createElement({element,className}) {
    const createdElement = document.createElement(element);
    createdElement.classList.add(className);
    return createdElement;
}
