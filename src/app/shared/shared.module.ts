import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleH1Component } from './title-h1/title-h1.component';
import { ButtonComponent } from './button/button.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { appCheckTicIcon } from '../svg/checkTic';


@NgModule({
  declarations: [
    TitleH1Component,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      icons: [
        appCheckTicIcon
      ],
    })
  ],
  exports: [
    TitleH1Component,
    ButtonComponent
  ]
})
export class SharedModule { }
