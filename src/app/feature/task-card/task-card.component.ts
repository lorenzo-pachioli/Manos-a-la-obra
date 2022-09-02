import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  constructor() { }

  @Input() checked: boolean = false;
  @Input() id: number = 0;
  @Output() checkedChange: EventEmitter<boolean>  = new EventEmitter();

  changeCheck(){
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }
  
  ngOnInit(): void {
  }
}
