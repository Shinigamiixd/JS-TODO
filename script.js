let todo_name_input = document.querySelector(".todo_name")
let todo_priority_input = document.querySelector(".todo_priority")
let todo_duedate_input = document.querySelector(".todo_duedate")
let todo_status_input = document.querySelector(".todo_status")
let todo_submit_button = document.querySelector(".todo_submit")
let actual_tasks = document.querySelector(".actual_tasks")


todo_submit_button.addEventListener("click", addTask)

function addTask(evt){
    evt.preventDefault();

    let task_ul = document.createElement("ul")
    task_ul.classList.add("task_ul")

    let task_li_name = document.createElement("li")
    task_li_name.classList.add("task_li")
    task_li_name.textContent = todo_name_input.value
    task_ul.appendChild(task_li_name)

    let task_li_prio = document.createElement("li")
    task_li_prio.classList.add("task_li")
    task_li_prio.textContent = todo_priority_input.value
    task_ul.appendChild(task_li_prio)

    let task_li_stat = document.createElement("li")
    task_li_stat.classList.add("task_li")
    task_li_stat.textContent = todo_status_input.value
    task_ul.appendChild(task_li_stat)

    let task_li_date = document.createElement("li")
    task_li_date.classList.add("task_li")
    task_li_date.textContent = todo_duedate_input.value
    task_ul.appendChild(task_li_date)

    actual_tasks.appendChild(task_ul)
}