//( ()=>{
    import checkComplete from "./components/checkComplete.js";
    import deleteIcon from "./components/deleteIcon.js";

    const btn = document.querySelector('[data-form-btn]');//buscamos el elemento dentro del DOM

    //Arrow functions o funciones anonimas  ()=>
    const createTask = (evento)=> {
        evento.preventDefault();//evitar que la pagina se actualice al agregar evento
        const input = document.querySelector('[data-form-input]')
        const value = input.value;
        const list = document.querySelector("[data-list]");
        const task = document.createElement("li");
        task.classList.add("card");//se añade la clase al elemento
        input.value='';
        const taskContent= document.createElement("div");

        taskContent.appendChild(checkComplete());
        const titleTask= document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText= value;
        taskContent.appendChild(titleTask);

        //const content = `
          //<i class="fas fa-trash-alt trashIcon icon"></i>`;//backticks para template strings
        //task.innerHTML = content;//permite añadir el contenido al HTML 
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);//al elemento padre (list) le añadimos el elemento hijo (task), es decir, crea un nuevo nodo en el HTML
    }
    //listener de tipo click 
    btn.addEventListener("click", createTask);

//})();
