function appendElements({container,childList}){
    if(childList.length>0){
        childList.forEach((childElement)=>{
            container.appendChild(childElement)
        })
    }
}

export default appendElements;