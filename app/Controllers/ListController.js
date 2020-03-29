import _ListService from "../Services/ListService.js";
import _Store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = '';
  _Store.State.lists.forEach(l => template += l.template);
  document.getElementById("drawLists").innerHTML = template;
  _drawTasks();
}

function _drawTasks() {
  // TODO Need to render tasks on the correct list
  _Store.State.lists.forEach(l => {
    let taskTemplate = '';
    l.tasks.forEach(t => taskTemplate += t.getTemplate());
    document.getElementById(`drawTasks-${l.id}`).innerHTML = taskTemplate;
  });
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  create(event){
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.listName.value
    }
    _ListService.create(newList);

    _drawLists();
    formData.reset();
  }


  addTask(event, listId) {
    debugger
    event.preventDefault();
    let formData = event.target;
    let taskData = {
      task : formData.task.value
    }
    _ListService.addTask(taskData, listId);
    
    _drawLists();
    formData.reset();
  }

  delete(listId) {
    _ListService.delete(listId);
    _drawLists();
  }

  deleteTask(taskId) {
    _ListService.deleteTask(taskId);
    _drawLists();
  }



  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
