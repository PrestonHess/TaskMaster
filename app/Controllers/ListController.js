import _ListService from "../Services/ListService.js";
import _Store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = '';
  _Store.State.lists.forEach(l => template += l.template);
  document.getElementById("drawLists").innerHTML = template;
}

function _drawTasks() {
  let template = '';
  let tasks = _Store.State.lists;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    console.log('Controller Works');
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
    event.preventDefault();
    let taskData = event.target;
    _ListService.addTask(taskData.task.value, listId);
    
    taskData.reset();
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
