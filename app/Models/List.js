import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.listName = data.listName
    this.tasks = [];
    this.id = data.id || generateId();
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get template() {
    return /*html*/ `
      <div class="col-4">
      <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h3>${this.listName}</h3>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">
              <form class="input-group mb-3" onsubmit="app.listController.addTask(event, '${this.id}')">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary" type="submit">+</button>
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
