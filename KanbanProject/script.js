const todo = document.querySelector('.TODO')
const progress = document.querySelector('.PROGRESS')
const completed = document.querySelector('.COMPLETED')
const tasks = document.querySelectorAll('.tasks')
const toggleModalButton = document.querySelector('.add')
const modal = document.querySelector('.modal')
const bg = document.querySelector('.bg')
const addTaskButton = document.querySelector('.add-new-task')
let draggedItem = null


addTaskButton.addEventListener('click', (e) => {
       e.preventDefault();
    const taskTitleInput = document.querySelector('.in')
    const textAreaInput = document.querySelector('.de')
    
   const div = document.createElement('div')

   div.classList.add('task')
   div.setAttribute('draggable',true)
    div.innerHTML=`
    <h2>${taskTitleInput.value}</h2>
    <p>${textAreaInput.value}</p>`
    todo.appendChild(div)
    modal.classList.remove('hide')
    console.log(taskTitleInput, textAreaInput);

})

toggleModalButton.addEventListener('click',()=>{
        modal.classList.add('hide')
} );


tasks.forEach((task) => {
    task.addEventListener('drag', (e) => {
        // console.log(('dragging',e));
        draggedItem = task
    })
})

function addDragEventsOnColumn(column) {
    column.addEventListener('dragenter', (e) => {
        e.preventDefault()
        column.classList.add('hover-over')
    })
    column.addEventListener('dragleave', (e) => {
        e.preventDefault()
        column.classList.remove('hover-over')
    })

    column.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    column.addEventListener('drop', (e) => {
        column.appendChild(draggedItem)
        column.classList.remove('hover-over')
    })

}



addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(completed)