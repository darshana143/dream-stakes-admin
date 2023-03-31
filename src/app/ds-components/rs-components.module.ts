import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegularGridCheckboxComponent } from './ag-grid/regular-checkbox/regular-checkbox.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegularGridCheckboxComponent],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule
  ],
  exports:[
    RegularGridCheckboxComponent
  ]
})
export class DsComponentsModule { }
