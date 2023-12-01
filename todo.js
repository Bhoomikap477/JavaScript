let todoList =[
    {item :'DBMS',
    dueDate :'3/10/2023',
    ST:'12.00',
    ET:'2.00'}
];
displayItems();
let dateItem;
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#date-input');
    let st=document.querySelector('#start-time');
    let et=document.querySelector('#end-time');
    let todoItem=inputElement.value;
    dateItem=dateElement.value;
    let startTime=st.value;
    let endTime=et.value;

    todoList.push({item: todoItem, dueDate: dateItem, ST:startTime,ET:endTime});
    inputElement.value='';
    dateElement.value='';
    st.value='';
    et.value='';

    displayItems();
}

    function displayItems(){
        let containerElement =document.querySelector('.todo-container');
        
        let newHtml='';
        for(let i=0;i<todoList.length;i++){
            let {item,dueDate,ST,ET}=todoList[i];
          newHtml+=`
          <span class="others">${item}</span>
          <span class="others"> ${dueDate}</span>
          <span class="others">${ST}</span>
          <span class="others">${ET}</span>
          <button class="delete-button" onclick="todoList.splice(${i},1);
          displayItems()">Delete</button>
          `;
        }
        containerElement.innerHTML=newHtml;
    }

    let currentTime=new Date();
    console.log(`End time is ${dateItem}`);
    if(dateItem > currentTime){
        alert('Good Job !,You have complted your task');
    }



// let todoList = [
//     { item: 'DBMS', dueDate: '3/10/2023', ST: '12:00', ET: '14:00' }
//   ];

//   displayItems();

//   function addTodo() {
//     let inputElement = document.querySelector('#todo-input');
//     let dateElement = document.querySelector('#date-input');
//     let st = document.querySelector('#start-time');
//     let et = document.querySelector('#end-time');
//     let todoItem = inputElement.value;
//     let dateItem = dateElement.value;
//     let startTime = st.value;
//     let endTime = et.value;

//     todoList.push({ item: todoItem, dueDate: dateItem, ST: startTime, ET: endTime });
//     inputElement.value = '';
//     dateElement.value = '';
//     st.value = '';
//     et.value = '';
//     displayItems();
//     checkDueDates(); // Check due dates after adding a new item
//   }

//   function displayItems() {
//     let containerElement = document.querySelector('.todo-container');

//     let newHtml = '';
//     for (let i = 0; i < todoList.length; i++) {
//       let { item, dueDate, ST, ET } = todoList[i];
//       newHtml += `
//         <span class="others">${item}</span>
//         <span class="others">${dueDate}</span>
//         <span class="others">${ST}</span>
//         <span class="others">${ET}</span>
//         <button class="delete-button" onclick="deleteItem(${i})">Delete</button>
//         `;
//     }
//     containerElement.innerHTML = newHtml;
//   }

//   function deleteItem(index) {
//     todoList.splice(index, 1);
//     displayItems();
//     checkDueDates(); // Check due dates after deleting an item
//   }

//   function checkDueDates() {
//     let currentTime = new Date();

//     for (let i = 0; i < todoList.length; i++) {
//       let { dueDate, ET } = todoList[i];
//       let dueDateTime = new Date(`${dueDate} ${ET}`);
      
//       if (dueDateTime < currentTime) {
//         alert(`Task "${todoList[i].item}" is overdue!`);
//       }
//     }
//   }