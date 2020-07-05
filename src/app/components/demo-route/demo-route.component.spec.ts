import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoRouteComponent } from './demo-route.component';

describe('DemoRouteComponent', () => {
  let component: DemoRouteComponent;
  let fixture: ComponentFixture<DemoRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
