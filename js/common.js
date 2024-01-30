function ellipseRhombusPentagonTotal(elementItemName,fristInputId, secoundInputId, mathmathicalNum) {

    const elmentItem = document.getElementById(elementItemName)
    const getElementItem = elmentItem.innerText;
   

    const elment = document.getElementById(fristInputId);
    const elmentString = elment.value;
    const elmentFirstNumber = parseFloat(elmentString)


    const secoundElment = document.getElementById(secoundInputId);
    const secoundElmentString = secoundElment.value;
    const elmentSecoundNumber = parseFloat(secoundElmentString)


    const total = elmentFirstNumber * elmentSecoundNumber * mathmathicalNum;

    return getElementItem + ' = ' + total;


}