

function clickToSelect(nameTag, btnTag){
    const selection = document.getElementById('selection');
    let childCount = selection.childElementCount;
    console.log(childCount);

    if(childCount < 5){
        let name = nameTag.innerText;
        let createEle = document.createElement('p');
        createEle.innerText = name;
        selection.append(createEle);
        btnTag.disabled = true
    }
    else{
        alert('You can not select more than 5 players')
    }

}


document.getElementById('calculateBtn').addEventListener('click', function(){
    const selection = document.getElementById('selection');
    let childCount = selection.childElementCount;

    const perPlayerField = document.getElementById('perPlayerField');
    let valueString = perPlayerField.value;
    let perPlayerValue = parseInt(valueString);

    let playerCost = document.getElementById('playerCost');
    playerCost.innerText = childCount * perPlayerValue ;
    console.log(playerCost.innerText);     
})
