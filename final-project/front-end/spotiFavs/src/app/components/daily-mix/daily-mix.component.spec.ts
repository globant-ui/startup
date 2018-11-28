import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyMixComponent } from './daily-mix.component';

describe('DailyMixComponent', () => {
  let component: DailyMixComponent;
  let fixture: ComponentFixture<DailyMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
