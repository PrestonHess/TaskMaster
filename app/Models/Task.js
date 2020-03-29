import  { generateId } from '../utils.js'

export default class Task {
  constructor(data){
    this.taskName = data.task
    this.id = data.id || generateId()
  }

  getTemplate () {
    return /*html*/ `
      <li class="list-group-item">
      <div class="custom-control custom-checkbox mr-sm-2">
        <input type="checkbox" class="custom-control-input" id="customControlAutosizing">
        <label class="custom-control-label" for="customControlAutosizing">${this.taskName}</label>
        <button type="button" class="close text-danger" onclick="app.listController.deleteTask('${this.id}')">
          <span>&times;</span>
        </button>
      </div>
      </li>
    `
  }
}