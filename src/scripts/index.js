import { TotalBoxCount,BoxClasses,StatusOptions } from "./constants/Box.js";
import appendElements from "./utils/appendElements.js";
import createElements from "./utils/createElements.js";

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    createChildBoxes(container, TotalBoxCount);
    addContainerClickListener(container);
});

function createChildBoxes(container,count,element = 'div', className = BoxClasses.default) {
    const boxElements = createElements({count,element,className});
    appendElements({container,childList:boxElements})
}

function addContainerClickListener(container) {
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains(BoxClasses.default)) {
            handleBoxClick(event.target);
        }
    });
}

function handleBoxClick(box) {
    const index = parseInt(box.dataset.index);
    box = updateClass(box);
    const boxStatus = box.classList.contains(BoxClasses.active) ? StatusOptions.on : StatusOptions.off
    handleMessages(index,boxStatus)
}


function updateClass(box){
    if (box.classList.contains(BoxClasses.active)) {
        box.classList.remove('active')
    } else {
        box.classList.add('active')
    }
    return box;
}

function handleMessages(index,status){
    console.log(`Turning ${status} ${index+1}`)
}
