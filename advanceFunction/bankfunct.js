// step-2
function getElementById(inputId){
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputFieldNumber = parseFloat(inputString);
    inputField.value = '';
    return inputFieldNumber;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementStringNumber = parseFloat(elementString);
    // element.value = '';
    return elementStringNumber;
}

function setTextElementValue(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}