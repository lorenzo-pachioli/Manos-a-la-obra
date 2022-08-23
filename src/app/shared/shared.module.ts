import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleH1Component } from './title-h1/title-h1.component';
import { TaskCardComponent } from './task-card/task-card.component';



@NgModule({
  declarations: [
    TitleH1Component,
    TaskCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleH1Component,
    TaskCardComponent
  ]
})
export class SharedModule { }
