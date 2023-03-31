import { Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'grid-regular-checkbox',
  template: '<p-checkbox [(ngModel)]="params.value" (click)="checkedHandler($event)" value="true" [binary]="true"> </p-checkbox>'
})
export class RegularGridCheckboxComponent implements ICellRendererAngularComp {

  params: any;

  constructor(
  ) {

  }

  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event) {

    this.params.node.setDataValue(this.params.column.colId, Boolean(event.target.attributes['aria-checked']));
  
    if(this.params.clickHandler)
      this.params.clickHandler(this.params)
  }



  refresh(params?: any): boolean {

    this.params = params;

    return true;
  }

}
