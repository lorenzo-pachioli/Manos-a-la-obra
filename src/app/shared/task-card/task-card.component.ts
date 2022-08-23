import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss']
})
export class TaskCardComponent implements OnInit {

  constructor() { }
  @Input() text: string="";

  checked = false;

  changeCheck(){
    this.checked = !this.checked;
  }
  
  ngOnInit(): void {
  }
}