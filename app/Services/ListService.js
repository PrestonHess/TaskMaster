import List from "../Models/List.js";
import Task from "../Models/Task.js";
import _Store from "../store.js";

//Public
class ListService {
  constructor() {
    
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  create(listData) {
    let newList = new List(listData)
    _Store.State.lists.push(newList)
    _Store.saveState();
  }
  addTask(taskData, listId) {
    let newTask = new Task(taskData)
    let currentList = _Store.State.lists.find(l => l.id == listId)
    currentList.tasks.push(newTask);
    _Store.saveState();
  }

}

const SERVICE = new ListService();
export default SERVICE;
