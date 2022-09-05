import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { SharedModule } from '../shared/shared.module';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appCheckTicIcon } from '../svg/checkTic';
import { appClipboardIcon } from '../svg/clipboard';
import { appShareLogoIcon } from '../svg/shareLogo';
import { appSquareCuttedIcon } from '../svg/squareCutted';
import { appTrashCanIcon } from '../svg/trashCan';
import { TaskGetterService } from '../services/task-getter.service';

@NgModule({
  declarations: [
    TaskInputComponent,
    TaskListComponent,
    TaskCardComponent,
    TasksTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SvgIconsModule.forRoot({
      icons: [
        appCheckTicIcon,
        appClipboardIcon,
        appShareLogoIcon,
        appSquareCuttedIcon,
        appTrashCanIcon
      ],
    })
  ],
  providers: [
    TaskGetterService
  ],
  exports: [
    TasksTableComponent
  ]
})

export class FeatureModule { }
