import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface task{
  id: Number,
  text: string,
  checked: Boolean
}

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})

export class TasksTableComponent implements OnInit {

  tasks:Array<task> = [];
  listLength = this.tasks.length;
  @Output() newTaskChange: EventEmitter<Array<task>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  task(){
    console.log('emited');
    
  }
  
  newTask(event:string){
    if (event.length > 0) {
      this.tasks.push({
        id: 1,
        text: event,
        checked: false
      })
      this.listLength = this.tasks.length;
      this.newTaskChange.emit(this.tasks);
    }
  }
}
