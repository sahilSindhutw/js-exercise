import { BoxClasses, StatusOptions, TotalBoxCount } from "./constants/Box.js";
import appendElements from "./utils/appendElements.js";
import { createElements,createElement } from "./utils/createElements.js";

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const inputField = createElement({element:'input',className:'text-input'});

    createChildBoxes({container,count:TotalBoxCount,className:BoxClasses.default});
    addContainerClickListener(container);

    inputField.value = TotalBoxCount; 
    container.before(inputField);

    inputField.addEventListener('change', (e)=>handleCountBoxChange(e.target.value));
});

export function createChildBoxes({container, count, className, startingIndex}) {
    const boxElements = createElements({count, element : 'div', className, startingIndex});
    appendElements({container, childList: boxElements});
}

export function addContainerClickListener(container) {
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains(BoxClasses.default)) {
            handleBoxClick(event.target);
        }
    });
}

export function handleCountBoxChange(value) {
    const desiredCount = parseInt(value) || 0;
    const currentCount = container.querySelectorAll('.' + BoxClasses.default).length;

    if(desiredCount > currentCount) {
        createChildBoxes({container, count:desiredCount - currentCount,className:BoxClasses.default,startingIndex:currentCount});
    } else if(desiredCount < currentCount) {
        for(let i = currentCount; i > desiredCount; i--) {
            container.removeChild(container.lastChild);
        }
    }
};

export function handleBoxClick(box) {
    const index = parseInt(box.dataset.index);
     updateBoxClass(box);
    const boxStatus = box.classList.contains(BoxClasses.active) ? StatusOptions.on : StatusOptions.off;
    handleMessages(index, boxStatus);
}

export function handleMessages(index, status){
    console.log(`Turning ${status} ${index+1}`);
}

export function updateBoxClass(box){
    if (box.classList.contains(BoxClasses.active)) {
        box.classList.remove(BoxClasses.active);
    } else {
        box.classList.add(BoxClasses.active);
    }
    return box;
}