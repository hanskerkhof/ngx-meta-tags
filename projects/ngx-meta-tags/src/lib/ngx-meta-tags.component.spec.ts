import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMetaTagsComponent } from './ngx-meta-tags.component';

describe('NgxMetaTagsComponent', () => {
  let component: NgxMetaTagsComponent;
  let fixture: ComponentFixture<NgxMetaTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMetaTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMetaTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
