// step-1 -- get the two input value and multiplication getElementByIdInputValueAndSideElementId() func

//step-2 ---get the click able item name with getClickAbleItemName() func
//step-3 --- claculation with triangleRhombusPentagonTotal() func
//step-4 --- set the value side menu setTotalResualt() func

function getElementByIdInputValueAndSideElementId(fristInputId, secoundInputId) {
    const element = document.getElementById(fristInputId);
    const elmentString = element.value;
    const elmentFirstNumber = parseFloat(elmentString)

    const secoundElment = document.getElementById(secoundInputId);
    const secoundElmentString = secoundElment.value;
    const elmentSecoundNumber = parseFloat(secoundElmentString)

    const inputValueTotal = elmentFirstNumber * elmentSecoundNumber
    return inputValueTotal;
}


function getClickAbleItemName(clickAbleIdName) {
    const itemName = document.getElementById(clickAbleIdName)
    const getElementItem = itemName.innerText;

    return getElementItem;
}

function triangleRhombusPentagonTotal(getElementItem, twoInputValueSubtraction) {

    const mathmathicalNum = 0.5;
    const total = twoInputValueSubtraction * mathmathicalNum;
    return getElementItem + '=' + total;
}


let clickedStrungs = [];
function setTotalResualt(sideDisplayId, total) {
    const display = document.getElementById(sideDisplayId)
    clickedStrungs.push(total);
    
    if (clickedStrungs.length >= 2) {
        const allStrings = clickedStrungs.join(', ');
        display.innerText = `  ${allStrings}`;
    } else {
        display.innerText = ` ${total}`;
    }
    

}