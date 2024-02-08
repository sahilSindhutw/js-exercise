const statusOptions = {
    on : 'ON',
    off: 'OFF'
}

const messagingIndexes = {
    [statusOptions.on]: [6],
    [statusOptions.off]: [3],
}

const BoxClass = 'box';

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    createChildBoxes(container, 100);
    addContainerClickListener(container);
});

function createChildBoxes(container, count ,element = 'div', className = BoxClass) {
    for (let i = 0; i < count; i++) {
        const childDiv = document.createElement(element);
        childDiv.classList.add(className);
        childDiv.dataset.index = i;
        childDiv.dataset.status = statusOptions.off;
        container.appendChild(childDiv);
    }
}

function addContainerClickListener(container) {
    container.addEventListener('click', function(event) {
        if (event.target.classList.contains(BoxClass)) {
            handleBoxClick(event.target);
        }
    });
}

function handleBoxClick(box) {
    const index = parseInt(box.dataset.index);
    box = toggleStatus(box);
    box = toggleBackgroundColor(box);
    const boxStatus = box.dataset.status;
    handleMessages(index,boxStatus)
}

function toggleStatus(box){
    if(box.dataset.status === statusOptions.off){
        box.dataset.status = statusOptions.on;
    }else{
        box.dataset.status = statusOptions.off;
    }
    return box;
}

function toggleBackgroundColor(box){
    if (box.dataset.status === statusOptions.off) {
        box.style.backgroundColor = 'black';
    } else {
        box.style.backgroundColor = 'blue';
    }
    return box;
}

function handleMessages(index,status){
    if((messagingIndexes[statusOptions.on].includes(index) && status === statusOptions.on) || messagingIndexes[statusOptions.off].includes(index) && status === statusOptions.off){
        console.log(`Turning ${status} ${index+1}`)
    }
}
