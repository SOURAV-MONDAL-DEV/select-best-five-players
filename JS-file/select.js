

function clickToSelect(nameTag){
    let name = nameTag.innerText;
    let createEle = document.createElement('p');
    createEle.innerText = name;

    const selection = document.getElementById('selection');
    selection.append(createEle);
    

}
 