import { Component} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'grid-regular-button',
  template: '<div class="container"(click)="checkedHandler($event)" value="true" style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 20px; height: 20px; margin-top: 10px;"><div class="dot" style=" width:4px; height: 4px;border-radius: 10px; background-color: black; margin-bottom: 1px;"></div><div class="dot" style="display: flex; flex-direction: column;"><div class="dot" style=" width:4px; height: 4px;border-radius: 10px; background-color: black; margin-bottom: 1px;"></div><div class="dot" style="display: flex; flex-direction: column;"><div class="dot" style=" width:4px; height: 4px;border-radius: 10px; background-color: black; margin-bottom: 1px;"></div></div>'
})
export class RegularGridButtonComponent implements ICellRendererAngularComp {

  params: any;

  constructor(
  ) {}

  agInit(params: any): void {
    this.params = params;
  }

  checkedHandler(event) {

    // this.params.node.setDataValue(this.params.column.colId, Boolean(event.target.attributes['aria-checked']));
  
    // if(this.params.clickHandler)
    //   this.params.clickHandler(this.params)
  }



  refresh(params?: any): boolean {

    this.params = params;

    return true;
  }

}