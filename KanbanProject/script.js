    const todo =document.querySelector('.TODO')
    const progress=document.querySelector('.PROGRESS')
    const completed =document.querySelector('.COMPLETED')
    const tasks = document.querySelectorAll('.tasks')

    tasks.forEach((task)=>{
        task.addEventListener('drag',(e)=>{
            console.log(('dragging',e));
            
        })
    })
    
    console.log(todo);

