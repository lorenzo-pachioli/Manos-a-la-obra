import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';


@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent implements OnInit {

  constructor() { }
  @Output() textChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  newTask:string = '';

  setText(event: any){
    this.newTask = event.target.value;
  }

  createTask(){
    this.textChange.emit(this.newTask);
    this.newTask = '';
  }
  
}
