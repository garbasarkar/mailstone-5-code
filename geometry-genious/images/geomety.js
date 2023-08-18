function calculated(){
    const inputFiald = document.getElementById('input-fiald');
    const inputString = inputFiald.value;
    const inputNumber = parseFloat(inputString);

    const inputHeight = document.getElementById('input-height');
    const inputHeightString = inputHeight.value;
    const inputHeightNumber = parseFloat(inputHeightString);

    if(isNaN(inputNumber) || isNaN(inputHeightNumber)){
        alert('Please isside valid number');
        return;
    }

    const outputResult =( 0.5 * inputHeightNumber * inputNumber);
    const output = document.getElementById('output');
    output.innerText = outputResult;
    calculateAddToSite('Triangle', outputResult)
}
function rectangleOutput(){
    const inputWidth = document.getElementById('input-width');
    const inputWidthString = inputWidth.value;
    const inputWidthNumber = parseFloat(inputWidthString);

    const inputLength = document.getElementById('input-length');
    const inputLengthString = inputLength.value;
    const inputLengthNumber = parseFloat(inputLengthString);

    if(isNaN(inputWidthNumber) || isNaN(inputLengthNumber)){
        alert('Please isside valid number');
        return;
    }
    
    const inputLengthOutput = inputLengthNumber * inputWidthNumber;
    const lengthOutput = document.getElementById('lengthOutput');
    lengthOutput.innerText = inputLengthOutput;
    calculateAddToSite('Rectangle', inputLengthOutput)
}

// functional 
function parallelogramOutput(){
    const base = multipulNoReous('parallelogramWidth');
    const height = multipulNoReous('parallelogramLength');
    if(isNaN(base) || isNaN(height)){
        alert('Number de output pete chaile!!! jodi number na dish tore ami dhukabo na!!!');
        return;
    }
    const result = base * height;
    setElementInerText('parallelogramOutputLocation', result);

    calculateAddToSite('calculateInnerText', result)
}

function ellipseOutput() {
    const ellipseWidth = multipulNoReous('ellipseWidth');
    const ellipseLength = multipulNoReous('ellipseLength');

    if(isNaN(ellipseWidth) || isNaN(ellipseLength)){
        alert('Number de output pete chaile!!! jodi number na dish tore ami dhukabo na!!!');
        return;
    }
    const pi = 3.14 * ellipseWidth * ellipseLength;
    setElementInerText('ellipseOutputLocation', pi)
    calculateAddToSite('Ellipse', pi)
}

function RhombusOutput(){
    const RhombusWidth = multipulNoReous('RhombusWidth');
    const RhombusLength = multipulNoReous('RhombusLength');
    if(isNaN(RhombusWidth) || isNaN(RhombusLength)){
        alert('Please provide me a valid input number!!!');
        return;
    }
    const rhombusTotal = 0.5 * RhombusWidth * RhombusLength;
    setElementInerText('RhombusOutputLocation', rhombusTotal);
    calculateAddToSite('Rhombus', rhombusTotal);
}

function PentagonOutput(){
    const PentagonWidth = multipulNoReous('PentagonWidth');
    const PentagonLength = multipulNoReous('PentagonLength');
    if(isNaN(PentagonWidth) || isNaN(PentagonLength)){
        alert('Please provide me a valid input number!!!');
        return;
    }
    const pentagonTotal = 0.5 * PentagonWidth * PentagonLength;
    setElementInerText('PentagonOutputLocation', pentagonTotal);
    calculateAddToSite('Pentagon', pentagonTotal);
}
function multipulNoReous(target) {
    const multipulNoInput = document.getElementById(target)
    const multipulNoInputString = multipulNoInput.value;
    const multipulNoInputNumber = parseFloat(multipulNoInputString);
    return multipulNoInputNumber;
}
function setElementInerText(elementId, showBrowser) {
    const element = document.getElementById(elementId);
    element.innerText = showBrowser;   
}

function calculateAddToSite(calculateId, upToCome){
    // console.log(calculateId + ' ' + upToCome)
    const calculateAddToSiteInnerText = document.getElementById('calculateInnerText');
    const count = calculateAddToSiteInnerText.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-5');
    p.innerHTML = `
    ${count + 1}. ${calculateId} ${upToCome} cm <sup>2</sup> <button class = "btn btn-sm btn-success">convert</button>
    `;
    calculateAddToSiteInnerText.appendChild(p);

}