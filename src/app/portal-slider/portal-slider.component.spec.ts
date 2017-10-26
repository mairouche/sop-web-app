import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalSliderComponent } from './portal-slider.component';

describe('PortalSliderComponent', () => {
  let component: PortalSliderComponent;
  let fixture: ComponentFixture<PortalSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
