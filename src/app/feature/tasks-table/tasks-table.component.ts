import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { ITask } from 'src/app/services/interfaces';
import { TaskGetterService } from 'src/app/services/task-getter.service';

@Component({
  selector: 'app-tasks-table',
  templateUrl: './tasks-table.component.html',
  styleUrls: ['./tasks-table.component.scss']
})

export class TasksTableComponent implements OnInit {

  @Input() tasks: Array<ITask> = [];
  @Input() newTask: string = '';
  @Output() newTaskChange: EventEmitter<string> = new EventEmitter();
  @Output() tasksChange: EventEmitter<Array<ITask>> = new EventEmitter();

  constructor(public taskList: TaskGetterService) { }

  ngOnInit(): void {
    this.tasks = this.taskList.getTasks();
  }

  @ViewChild('sticky') sticky!: ElementRef;

  placeholder = '';

  @HostListener('window:scroll')
  onWindowScroll() {
    let position = this.sticky.nativeElement.firstChild.getBoundingClientRect().top;
    this.placeholder = position === 20 ? 'Escribe una tarea' : '';
  }

  addTask(event: boolean) {
    if (event && this.newTask.length > 0) {
      this.taskList.addTask(this.newTask);
      this.tasksChange.emit(this.tasks);
    }
    this.newTask = '';
  }

  deleteTask(id: number) {
    this.tasks = this.taskList.deleteTask(id);
  }
}
