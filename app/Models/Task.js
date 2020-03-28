import  { generateId } from '../utils.js'

export default class Task {
  constructor(data){
    this.taskName = data.task
    this.id = data.id || generateId()
  }

  getTemplate () {
    return /*html*/  `
      <li class="list-group-item">${this.taskName}</li>
    `
  }
}