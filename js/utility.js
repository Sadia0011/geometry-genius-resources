function getDataFromInputField(id){
    const getData=document.getElementById(id);
    const getDataText=getData.value;
    const getDataNumber=parseFloat(getDataText);
    getData.value='';
    return getDataNumber;
}
function setData(place,value){
    document.getElementById(place).innerText=value;
}

function areaEntryInTheSite(elementId,area){
    const calculatorArea=document.getElementById('calculator');
    const count=calculatorArea.childElementCount;
    const newEntry=document.createElement('p');
    newEntry.innerHTML=`
           ${count+ 1}.${elementId} ${area} cm<sup>2</sup> 
        <button  id="btn-convert"
         class="btn btn-success text-white btn-sm my-2">convert m<sup>2</sup></button>  `
calculatorArea.appendChild(newEntry);
/* document.getElementById('btn-convert').addEventListener('click',function(){
    console.log('jggjh')
// const areaTotal=document.getElementById('rhombus-area');
// console.log(areaTotal)
}) */

}


    
