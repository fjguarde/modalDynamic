import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { CarsListDemoComponent } from '../cars-list-demo/cars-list-demo.component';
// import {DialogService, MessageService} from 'primeng/api';


@NgModule({
  declarations: [
    CarsListDemoComponent
  ],
  imports: [
    CommonModule,
    DynamicDialogModule,
  ],
  entryComponents: [
    CarsListDemoComponent
  ],
  providers: [
    // DialogService,
    // MessageService
  ],
  exports: [
  ]
})
export class DynamicDialogDemoModule { }
