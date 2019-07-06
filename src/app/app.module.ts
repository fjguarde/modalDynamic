import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { DynamicDialogDemoComponent } from './components/dynamic-dialog-demo/dynamic-dialog-demo.component';
// import { CarsListDemoComponent } from './components/cars-list-demo/cars-list-demo.component';
import { CarsListDemoModule } from './components/cars-list-demo/cars-list-demo.module';
import { DynamicDialogDemoModule } from './components/dynamic-dialog-demo/dynamic-dialog-demo.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [
    AppComponent,
    // DynamicDialogDemoComponent,
    // CarsListDemoComponent
  ],
  imports: [
    BrowserModule,
    CarsListDemoModule,
    DynamicDialogDemoModule,
    BrowserAnimationsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
