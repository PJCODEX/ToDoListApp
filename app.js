document.addEventListener('DOMContentLoaded', ()=>{
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    
    const addTask = (event) =>{
        event.preventDefault();
        const taskText =taskInput.value.trim();
        if(!taskText){
            return;
        }
        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox">
        <span>${taskText}</span>
        <div class="task-buttons">
        <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
        <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
            const checkbox = li.querySelector('.checkbox')
            const editBtn = li.querySelector('.edit-btn')
            editBtn.addEventListener('click',()=>{
                if(!checkbox.checked){
                    taskInput.value = li.querySelector('span').textContent;
                    li.remove();
                }
            });


        li.querySelector('.delete-btn').addEventListener('click' ,() => {
            li.remove();
        });
        taskList.appendChild(li);
        taskInput.value = '';

    };
    addTaskBtn.addEventListener('click',addTask)
    taskInput.addEventListener('keypress',(e)=> {
        if(e.key === 'Enter'){
            addTask(e);
        }
    });
});