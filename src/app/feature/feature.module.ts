import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksTableComponent } from './tasks-table/tasks-table.component';
import { TaskInputComponent } from './tasks-table/task-input/task-input.component';
import { TaskListComponent } from './tasks-table/task-list/task-list.component';
import { TaskCardComponent } from './tasks-table/task-card/task-card.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appCheckTicIcon } from '../svg/checkTic';
import { appClipboardIcon } from '../svg/clipboard';
import { appShareLogoIcon } from '../svg/shareLogo';
import { appSquareCuttedIcon } from '../svg/squareCutted';
import { appTrashCanIcon } from '../svg/trashCan';

@NgModule({
  declarations: [
    TasksTableComponent,
    TaskInputComponent,
    TaskListComponent,
    TaskCardComponent,
    HeaderComponent
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
  exports: [
    TasksTableComponent,
    HeaderComponent
  ]
})

export class FeatureModule { }
