import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSectionComponent } from './flight-section.component';

describe('FlightSectionComponent', () => {
  let component: FlightSectionComponent;
  let fixture: ComponentFixture<FlightSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
