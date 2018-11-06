import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggingStartComponent } from './logging-start.component';

describe('LoggingStartComponent', () => {
  let component: LoggingStartComponent;
  let fixture: ComponentFixture<LoggingStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggingStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggingStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
