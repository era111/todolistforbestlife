"use strict"




function CreateSomeTask(text,lvl,){
    this.text = text;
    this.lvl = lvl;
    this.status = false;    
}

function deleteDiv(newDiv){
    newDiv.remove();
}

function changeDiv(fieldOfTask){
    if (fieldOfTask.disabled==true){
    fieldOfTask.disabled = false;}
    else fieldOfTask.disabled = true;
}

function doneDiv(newDiv){
    newDiv.status="true";
}

/*
filteredDiv(){

}
*/


function CreateTask(){
    
    let lvl = document.querySelector('.selectLvl').value;
    let text = document.body.querySelector('.text').value;
    let lvlHight = document.getElementById("high");
    let lvlMedium = document.getElementById("medium");
    let lvlLow = document.getElementById("low");
    let allTasks = [];

        
    //create div
    let newDiv = document.createElement('div');
    newDiv.className="myTask";
    newDiv.lvl="";
    newDiv.status="false";
    newDiv.setAttribute('lvl', `${lvl}`);
    newDiv.innerHTML = `     LVL:  ${lvl}`;
    document.body.append(newDiv);
    
    //create buttons    
    let buttonDELETE = document.createElement('button');
    buttonDELETE.className='buttonOfTask';
    buttonDELETE.id = 'delete';
    buttonDELETE.addEventListener('click',()=>deleteDiv(newDiv));
    newDiv.append(buttonDELETE);

    let buttonDONE = document.createElement('button');
    buttonDONE.className='buttonOfTask';
    buttonDONE.addEventListener('click',()=>doneDiv(newDiv));
    buttonDONE.id = 'done';
    newDiv.append(buttonDONE);  

    //create input
    let fieldOfTask = document.createElement('input');
    fieldOfTask.className='textOfType';
    fieldOfTask.type = 'text';
    fieldOfTask.value = ` ${text}`;    
    fieldOfTask.disabled = true;
    newDiv.append(fieldOfTask); 

    //create button
    let buttonCHANGE = document.createElement('button');
    buttonCHANGE.className='buttonOfTask';
    buttonCHANGE.id = 'change';
    buttonCHANGE.addEventListener('click',()=>changeDiv(fieldOfTask));
    newDiv.append(buttonCHANGE);       
    
    document.body.querySelector('.text').value = "";

}

