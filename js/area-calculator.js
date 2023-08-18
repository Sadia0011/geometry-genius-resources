

function triangleArea(){

    const baseData=getDataFromInputField('triangle-base');
    const heightData=getDataFromInputField('triangle-height');
    if(isNaN(baseData) || isNaN(heightData)){
        alert ("please enter a number");
        return;
    }
    const area=0.5*baseData*heightData;

    setData('triangle-area',area)
    areaEntryInTheSite('triangle',area)
}
function rectangle(){

    const widthData=getDataFromInputField('rectangle-width');
    const lengthData=getDataFromInputField('rectangle-length');
    if(isNaN(widthData) || isNaN(lengthData)){
        alert ("please enter a number");
        return;
    }
    const area=widthData*lengthData;

    setData('rectangle-area',area)
    areaEntryInTheSite('rectangle',area)
}
function parallelogram(){
    const baseData=getDataFromInputField('parallelogram-base');
    const heightData=getDataFromInputField('parallelogram-height');
    if(isNaN(baseData) || isNaN(heightData)){
        alert ("please enter a number");
        return;
    }
    const area=baseData*heightData;

    setData('parallelogram-area',area)
    
    areaEntryInTheSite('parallelogram',area)
}
function rhombus(){
    const d1Data=getDataFromInputField('rhombus-d1');
    const d2Data=getDataFromInputField('rhombus-d2');
    if(isNaN(d1Data) || isNaN(d2Data)){
        alert ("please enter a number");
        return;
    }
    const area=0.5 * d1Data * d2Data;

    setData('rhombus-area',area)
    
    areaEntryInTheSite('rhombus',area)
}
function pentagon(){
    const pData=getDataFromInputField('pentagon-p');
    const bData=getDataFromInputField('pentagon-b');
    if(isNaN(pData) || isNaN(bData)){
        alert ("please enter a number");
        return;
    }
    const area=0.5 * pData * bData;

    setData('pentagon-area',area)
    areaEntryInTheSite('pentagon',area)
    
}
function ellipse(){
    const aData=getDataFromInputField('ellipse-a');
    const bData=getDataFromInputField('ellipse-b');
    if(isNaN(aData) || isNaN(bData)){
        alert ("please enter a number");
        return;
    }
    const area=3.1416 * aData * bData;
   const areaTwoDecimal=area.toFixed(2);
    setData('ellipse-area',areaTwoDecimal)
    areaEntryInTheSite('ellipse',areaTwoDecimal)
}


