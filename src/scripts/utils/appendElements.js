function appendElements({container,childList}){
    if(childList.length>0){
        childList.forEach((childElement)=>{
            container.append(childElement)
        })
    }
}

export default appendElements;