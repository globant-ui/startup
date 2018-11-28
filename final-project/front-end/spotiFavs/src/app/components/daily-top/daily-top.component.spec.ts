import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTopComponent } from './daily-top.component';

describe('DailyTopComponent', () => {
  let component: DailyTopComponent;
  let fixture: ComponentFixture<DailyTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
