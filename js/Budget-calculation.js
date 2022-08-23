//Player Expences and Total Cost calculation by using Common Function outside of Event Handler. budget.js

//For taking value type

function getInputFieldValueById(InpuFieldtId){
    const inputField=document.getElementById(InpuFieldtId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseInt(inputFieldValueString);
    return inputFieldValue;
  }
  //For taking TextField value
  
  function getTextElementValueById(elementId){
      const element=document.getElementById(elementId);
      const elementValueString=element.innerText;
      const elementValue=parseInt(elementValueString);
      return elementValue;
  }
  //For setiing innerText Value in text field
  
  function setTextElementValueById(elementId,newValue){
      const element=document.getElementById(elementId);
      element.innerText=newValue; 
  }
  
  //Event handler for calculate perPlayer expecess
  
  document.getElementById('calculate-player').addEventListener('click',function(){
    const perPlayerRate=getInputFieldValueById('player-rate');
    const SelectedPlayerExpencess=getTextElementValueById('player-expecess');
    const playerExpencesTotal=cart.length*perPlayerRate;
    setTextElementValueById('player-expecess',playerExpencesTotal);
   
  })
  
  //Event handler for calculate overall Total cost
  
  document.getElementById('calculate-total').addEventListener('click',function(){
      const ManagerRate=getInputFieldValueById('manager-rate');
      const CourseRate=getInputFieldValueById('coach-rate');
      const perPlayerRate=getInputFieldValueById('player-rate');
      const playerExpencesTotal=cart.length*perPlayerRate;
      const totalCost=playerExpencesTotal+ManagerRate+CourseRate;
      const TotalCost =getTextElementValueById('total');
      setTextElementValueById('total',totalCost);
  })