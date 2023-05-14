import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassMsgComponent } from './mass-msg.component';

describe('MassMsgComponent', () => {
  let component: MassMsgComponent;
  let fixture: ComponentFixture<MassMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
