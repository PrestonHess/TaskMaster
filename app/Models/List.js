import { generateId } from "../utils.js";
import Tasks from "../Models/Task.js"

export default class List {
  
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listName = data.listName
    /** @type {Tasks[]} */
    this.tasks = [];
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get template() {
    return /*html*/ `
      <div class="col-10 col-sm-6 col-md-4 my-2">
      <div class="card shadow">
      <div class="card-header">
        <div class="text-uppercase font-weight-bold text-center">
          ${this.listName}
          <span>
            <button type="button" class="close text-danger" onclick="app.listController.delete('${this.id}')">
              <span>&times;</span>
            </button>
          </span>
        </div>
        </div>
          <ul id="drawTasks-${this.id}" class="list-group list-group-flush"><!--Draw Tasks--></ul>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <form class="input-group my-1" onsubmit="app.listController.addTask(event, '${this.id}')">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-success" type="submit">+</button>
                </div>
                <input type="text" name="task" class="form-control" placeholder="Add Task" aria-describedby="basic-addon1">
              </form>
            </li>
          </ul>
         </div>
      </div>
    `
  }

}
