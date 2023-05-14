import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsAllComponent } from './ads-all.component';

describe('AdsAllComponent', () => {
  let component: AdsAllComponent;
  let fixture: ComponentFixture<AdsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
