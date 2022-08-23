import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TaskInputComponent } from './tasks-table/task-input/task-input.component';
import { TaskListComponent } from './tasks-table/task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TasksTableComponent,
    TaskInputComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TasksTableComponent
  ]
})

export class FeatureModule { }
