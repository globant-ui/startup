import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTenResultsComponent } from './last-ten-results.component';

describe('LastTenResultsComponent', () => {
  let component: LastTenResultsComponent;
  let fixture: ComponentFixture<LastTenResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTenResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTenResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
