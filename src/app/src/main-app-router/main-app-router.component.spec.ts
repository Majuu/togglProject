import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAppRouterComponent } from './main-app-router.component';

describe('MainAppRouterComponent', () => {
  let component: MainAppRouterComponent;
  let fixture: ComponentFixture<MainAppRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAppRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAppRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
