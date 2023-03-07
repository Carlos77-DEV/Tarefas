//fazer tarefa
function add_tarefas() {

    const tarefa_title = document.querySelector("#tarefa-title").value;

    if (tarefa_title) {

        const template = document.querySelector(".template");

        const new_tarefa = template.cloneNode(true);

        new_tarefa.querySelector(".tarefa-title-ds").textContent = tarefa_title;


        new_tarefa.classList.remove("template");
        new_tarefa.classList.remove("hide");


        const list = document.querySelector("#list-tarefas");
        list.appendChild(new_tarefa);

        const removeBtn = new_tarefa.querySelector(".close-tarefa").addEventListener("click", function(){
            removeTarefa(this);
        });

        const completeTarefa = new_tarefa.querySelector(".done-tarefa").addEventListener("click", function(){
            Tarefaomplet(this)
        })

         document.querySelector("#tarefa-title").value="";

        // const finalizar_tarefa = new_tarefa.querySelector(".done-tarefa").addEventListener("click", function(){
        //     completar_tarefa(this);
        // })
    }

};


//enviar tarefas
const enviar_tarefas = document.querySelector("#add-tarefa");

enviar_tarefas.addEventListener("click", function (e) {

    e.preventDefault();

    add_tarefas()


});


function removeTarefa(tarefa){
    tarefa.parentNode.remove(true)
}

function Tarefaomplet(tarefa){
    const completar = tarefa.parentNode;
    completar.classList.toggle("done");
}