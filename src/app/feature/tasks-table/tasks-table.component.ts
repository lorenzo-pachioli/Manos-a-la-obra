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
import { getMaxId } from 'src/app/services/getMaxId';

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

  constructor() {}

  ngOnInit(): void {
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
      this.tasks.push({
        id: getMaxId(this.tasks),
        text: this.newTask,
        checked: false
      })
    }
    this.newTask = '';
  }
}
