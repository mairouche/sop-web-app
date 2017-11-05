import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNewsComponent } from './portal-news.component';

describe('PortalNewsComponent', () => {
  let component: PortalNewsComponent;
  let fixture: ComponentFixture<PortalNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
