import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ITask } from 'src/app/services/interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();
  @Output() deleteTask: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  };
}
