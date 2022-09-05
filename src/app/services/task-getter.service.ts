import { Injectable } from '@angular/core';
import { ITask} from './interfaces';
import { getMaxId } from './getMaxId';

@Injectable({
  providedIn: 'root'
})
export class TaskGetterService {

  constructor() { }

  tasks: Array<ITask> = [];

  getTasks(){
    return this.tasks;
  }
  
  addTask(taskText:string) {
    if (taskText.length > 0) {
      this.tasks.push({
        id: getMaxId(this.tasks),
        text: taskText,
        checked: false
      })
    }
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter(t => t.id !== id);
    return this.tasks;
  }
}
