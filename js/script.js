// Get Input Value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

// Get Element Value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementString = elementField.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

// Set Element Value
function setElementValue(elementtId, newValue) {
    document.getElementById(elementtId).innerText = newValue;
}

// Select Player
document.getElementById('players').addEventListener('click', function (event) {
    const nameElement = event.target;
    const name = nameElement.previousSibling.previousSibling.previousSibling.previousSibling.innerText;
    const li = document.createElement('li');
    li.innerText = name;
    const ul = document.getElementById('player-list');
    const lists = ul.childNodes.length;
    if (lists > 4) {
        alert('You can select five players at most');
        return;
    }
    ul.appendChild(li);
    nameElement.style.background = '#626262';
    nameElement.setAttribute('disabled', true);
})

// Calculate And Set Player Fees
document.getElementById('calculate').addEventListener('click', function () {
    const number = document.getElementById('player-list').childNodes.length;
    const PerPlayer = getInputValue('per-player');
    const newPlayerFees = number * PerPlayer;
    if (PerPlayer < 0) {
        alert("Negetive number isn't allowed");
        return;
    }
    else if (isNaN(PerPlayer)) {
        alert("Enter a valid number");
        return;
    }
    setElementValue('player-fees', newPlayerFees);
})

// Calculate And Set Total Expenses
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerFee = getInputValue('manager');
    const coachFee = getInputValue('coach');
    const playerFee = getElementValue('player-fees');
    const total = managerFee + coachFee + playerFee;
    if (managerFee < 0 || coachFee < 0) {
        alert("Negetive number isn't allowed");
        return;
    }
    else if (isNaN(managerFee) || isNaN(coachFee)) {
        alert("Enter a valid number");
        return;
    }
    setElementValue('total', total);
})