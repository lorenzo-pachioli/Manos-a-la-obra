import { 
  Component, 
  OnInit, 
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ITask } from 'src/app/services/interfaces';
import { TaskGetterService } from 'src/app/services/task-getter.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();

  constructor(public taskList:TaskGetterService) {}

  ngOnInit(): void {}

  deleteTask(id:number){
    this.tasksChange.emit(this.taskList.deleteTask(id));
  };
}
