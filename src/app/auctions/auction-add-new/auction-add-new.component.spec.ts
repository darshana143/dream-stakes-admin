import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionAddNewComponent } from './auction-add-new.component';

describe('AuctionAddNewComponent', () => {
  let component: AuctionAddNewComponent;
  let fixture: ComponentFixture<AuctionAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
