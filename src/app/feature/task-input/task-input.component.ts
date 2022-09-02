import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';


@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  constructor() { }
  @Input() placeholder: string = '';
  @Input() newTask:string = '';
  @Output() newTaskChange: EventEmitter<string> = new EventEmitter();
  @Output() addTaskChange: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }

  

  setText(event: any){
    this.newTask = event.target.value;
    this.newTaskChange.emit(this.newTask);
  }

  createTask(){
    this.addTaskChange.emit(true);
  }
  
}
