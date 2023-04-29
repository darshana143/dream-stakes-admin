import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularGridCheckboxComponent } from './ag-grid/regular-checkbox/regular-checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { RegularGridButtonComponent } from './ag-grid/regular-button/regular-button.component';
import { RegularGridPopupComponent } from './ag-grid/regular-popup/regular-popup.component';


@NgModule({
  declarations: [RegularGridCheckboxComponent,RegularGridButtonComponent,RegularGridPopupComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule
  ],
  exports:[
    RegularGridCheckboxComponent,
    RegularGridButtonComponent,
    RegularGridPopupComponent
  ]
})
export class DsComponentsModule { }
