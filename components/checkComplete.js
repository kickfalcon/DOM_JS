const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
}
//immediately invoked function evoke (IIFE): funciones que en cuanto se declaran, se ejecutan (metodo de seguridad)
const completeTask = (event)=>{
    const element=event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');
    /*toggle permite revisar si existe una clase y retirarla, al mismo tiempo, si no existe la añade*/
}

export default checkComplete