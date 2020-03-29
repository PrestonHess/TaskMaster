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
    if (listData.listName !== '') {
      let newList = new List(listData)
      _Store.State.lists.push(newList)
      _Store.saveState();
    }
  }
  addTask(taskData, listId) {
    if (taskData.task !== '') {
      let newTask = new Task(taskData)
      let currentList = _Store.State.lists.find(l => l.id == listId)
      currentList.tasks.push(newTask);
      console.log('Current list and tasks', currentList)
      _Store.saveState();
      console.log('Currently in store',_Store)
    }
  }
  deleteTask(taskId) {
    if (window.confirm('Do you want to delete this task?')) {
      let taskIndex = 0;
      _Store.State.lists.forEach((list, listIndex) => {
        list.tasks.forEach((t, i) => {
          if (t.id == taskId) {
            taskIndex = i;
            _Store.State.lists[listIndex].tasks.splice(taskIndex, 1);
          }
        })
      })
      _Store.saveState();
    }
  }
  delete(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      let listIndex = _Store.State.lists.findIndex(list => list.id == id);
      _Store.State.lists.splice(listIndex, 1);
      _Store.saveState();
    }
  }
}

const SERVICE = new ListService();
export default SERVICE;
