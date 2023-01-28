import { uniqueDates } from '../services/date.js';
import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTask.js';

export const addTask = (evento)=>{
    evento.preventDefault();
    const list = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const calendar = document.querySelector('[data-form-date]');

    //parse regresa el tipo de dato
    const value = input.value;
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); //cambia formato de fecha usando la libreria moments js

    if (value == '' || date ==''){
        return; //si algun valor es invalido, no se añade y aqui se para el programa
    }
    input.value = '';
    calendar.value = '';
    //spread operator: copia de seguridad

    const complete = false;
    const taskObj = {
        value,
        dateFormat,
        complete,
        id: uuid.v4()//libreria que genera identificadores unicos
    };
    list.innerHTML = '';//inicializamos el elemento list
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];//si tiene datos se comporta de una manera, si no, empieza como arreglo vacio
    taskList.push(taskObj);
    //sessionStorage.setItem("tasks",JSON.stringify(taskObj));//requiere que el objeto este en formato string
    //con esta instruccion la informacion se mantiene mientras la pestaña esta abierta
    localStorage.setItem("tasks",JSON.stringify(taskList));//almacena el ulmito dato registrado, es decir, sobreescribe los datos
    displayTasks();
};

export const createTask = ({value, dateFormat, complete, id}) => {    
    const task = document.createElement('li');
        task.classList.add('card');
    const taskContent = document.createElement('div');
    const check = checkComplete(id);
    if(complete){
        check.classList.toggle('fas');
        check.classList.toggle('completeIcon');
        check.classList.toggle('far');
    }
    const titleTask = document.createElement('span');
        titleTask.classList.add('task');
        titleTask.innerText = value;
        taskContent.appendChild(check);
        taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    const dateElement = document.createElement('span');
        dateElement.innerHTML = dateFormat;
        task.appendChild(taskContent);
        task.appendChild(dateElement);
        task.appendChild(deleteIcon(id));
    return task;
};