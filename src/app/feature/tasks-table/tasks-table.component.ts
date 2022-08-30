import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ITask } from 'src/app/services/interfaces';
import { getMaxId } from 'src/app/services/getMaxId';

function isInViewport(elem:HTMLElement) {
  let distance = elem.getBoundingClientRect();
  return (
      distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
  );
}

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})

export class TasksTableComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];
  @Input() newTask:string = '';
  @Output() newTaskChange: EventEmitter<string> = new EventEmitter();
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();
  inputVisible = true;
  

  @HostListener('window:scroll')
  onWindowScroll() {
    let elem = document.getElementById('taskInput');
    this.inputVisible = elem ? isInViewport(elem):false;
  }

  constructor() { }

  ngOnInit(): void {
  }

  addTask(event: boolean) {
    if (event && this.newTask.length > 0) {
      this.tasks.push({
        id: getMaxId(this.tasks),
        text: this.newTask,
        checked: false
      })
    }
    this.newTask = '';
  }
}
