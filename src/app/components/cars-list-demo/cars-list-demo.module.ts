import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/api';
import { CarsListDemoService } from './cars-list-demo.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule, DropdownModule, SliderModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, FormsModule, TableModule, BrowserAnimationsModule, MultiSelectModule, DropdownModule, SliderModule
  ],
  providers: [
    DynamicDialogRef,
    DynamicDialogConfig,
    CarsListDemoService
  ],
  exports: [

  ]
})
export class CarsListDemoModule { }
