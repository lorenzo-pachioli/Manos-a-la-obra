import { 
  Component, 
  OnInit, 
  Input, 
  ViewChild, 
  ElementRef, 
  Renderer2 
} from '@angular/core';

interface task {
  id: Number,
  text: string,
  checked: Boolean
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  constructor(private renderer2: Renderer2) {}

  @Input() listLength: any;
  @Input() tasksList!: Array<task>;
  @ViewChild('listContainer', { static: false }) listContainer!: ElementRef;

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.addTask();
  }

  addTask() {
    console.log('tasks:', this.tasksList, 'listLength:', this.listLength);

    if (this.listLength && this.listContainer) {
      const taskList = this.listContainer.nativeElement;
      const div = this.renderer2.createElement('app-task-card');
      const text = this.renderer2.createText(this.tasksList[this.tasksList.length - 1].text);
      this.renderer2.addClass(div, 'task-card');
      this.renderer2.appendChild(div, text);
      this.renderer2.appendChild(taskList, div);
    }
  }
}
