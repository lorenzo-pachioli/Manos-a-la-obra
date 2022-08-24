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

  constructor() {}

  @Input() tasks!: Array<ITask>;
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();

  ngOnInit(): void {
  }

  deleteTask(id:number){
    this.tasks = this.tasks.filter(t => t.id !== id);
    this.tasksChange.emit(this.tasks)
  }

}
