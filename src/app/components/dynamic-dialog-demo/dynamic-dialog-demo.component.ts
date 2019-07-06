import { Component } from '@angular/core';
import {DialogService, MessageService} from 'primeng/api';
import {CarsListDemoComponent} from '../cars-list-demo/cars-list-demo.component';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-dynamic-dialog-demo',
  templateUrl: './dynamic-dialog-demo.component.html',
  styleUrls: ['./dynamic-dialog-demo.component.css']
})
export class DynamicDialogDemoComponent {

  constructor(public dialogService: DialogService, public messageService: MessageService) {}

  show() {
      const ref = this.dialogService.open( CarsListDemoComponent, {
          header: 'Choose a Car',
          width: '70%',
          contentStyle: {'max-height': '350px', 'overflow': 'auto'}
      });

      ref.onClose.subscribe((car: Car) => {
          if (car) {
              this.messageService.add({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin});
          }
      });
  }

}
