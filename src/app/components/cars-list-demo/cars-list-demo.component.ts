import { Component, OnInit } from '@angular/core';
import { CarsListDemoService } from './cars-list-demo.service';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/api';
import { Car } from 'src/app/models/car';

@Component({
  selector: 'app-cars-list-demo',
  templateUrl: './cars-list-demo.component.html',
  styleUrls: ['./cars-list-demo.component.css']
})
export class CarsListDemoComponent implements OnInit {

  cars: Car[] = [{vin: 'coche1'}, {vin: 'coche2'}, {vin: 'coche3'}];

  constructor(private carService: CarsListDemoService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

  ngOnInit() {
  //    this.carService.getCarsSmall().then(cars => this.cars = cars);
  }

  selectCar(car: Car) {
      this.ref.close(car);
  }

}
