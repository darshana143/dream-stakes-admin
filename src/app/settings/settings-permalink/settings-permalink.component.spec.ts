import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPermalinkComponent } from './settings-permalink.component';

describe('SettingsPermalinkComponent', () => {
  let component: SettingsPermalinkComponent;
  let fixture: ComponentFixture<SettingsPermalinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPermalinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPermalinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
