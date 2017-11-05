import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalBlogsComponent } from './portal-blogs.component';

describe('PortalBlogsComponent', () => {
  let component: PortalBlogsComponent;
  let fixture: ComponentFixture<PortalBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
