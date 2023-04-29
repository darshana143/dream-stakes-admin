import { ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IAfterGuiAttachedParams } from 'ag-grid-community';
import tippy, { hideAll } from 'tippy.js';

@Component({
  selector: 'grid-regular-popup',
  templateUrl: './regular-popup.component.html',
  styleUrls: ['./regular-popup.component.scss'],
})
export class RegularGridPopupComponent implements ICellRendererAngularComp {

    public params;
    public isOpen = false;
    public tippyInstance;
  
    @ViewChild('content') container;
    @ViewChild('trigger') button;
  
    constructor(private changeDetector: ChangeDetectorRef) {}
    
    refresh(params: any): boolean {
      throw new Error('Method not implemented.');
    }

    afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
      throw new Error('Method not implemented.');
    }
 
   
    ngAfterViewInit(): void {
      this.tippyInstance = tippy(this.button.nativeElement);
      this.tippyInstance.disable();
    }
  
    agInit(params) {
      this.params = params;
    }
  
    onClickHandler(option) {

      this.togglePopup();

      if (option === 'create') {
        this.params.api.applyTransaction({
          add: [{}],
        });
      }

      if (option === 'delete') {
        this.params.api.applyTransaction({ remove: [this.params.data] });
      }
  
      if (option === 'edit') {
        this.params.api.startEditingCell({
          rowIndex: this.params.rowIndex,
          colKey: 'make',
        });
      }

    }
  
    configureTippyInstance() {

      this.tippyInstance.enable();
      this.tippyInstance.show();
  
      this.tippyInstance.setProps({
        trigger: 'manual',
        placement: 'right',
        arrow: false,
        interactive: true,
        appendTo: document.body,
        hideOnClick: false,
        onShow: (instance) => {
          hideAll({ exclude: instance });
        },
        onClickOutside: (instance, event) => {
          this.isOpen = false;
          instance.unmount();
        },
      });

    }
  
    togglePopup() {

      this.isOpen = !this.isOpen;

      this.changeDetector.detectChanges();

      if (this.isOpen) {
        this.configureTippyInstance();
        this.tippyInstance.setContent(this.container.nativeElement);
      } 
      else {
        this.tippyInstance.unmount();
      }
    }
  }
  