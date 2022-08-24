import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/services/interfaces';
import { getMaxId } from 'src/app/services/getMaxId';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})

export class TasksTableComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  newTask(event: string) {
    if (event.length > 0) {
      this.tasks.push({
        id: getMaxId(this.tasks),
        text: event,
        checked: false
      })
    }
  }
}
