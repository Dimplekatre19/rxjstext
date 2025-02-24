import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomOBSComponent } from './custom-obs.component';

describe('CustomOBSComponent', () => {
  let component: CustomOBSComponent;
  let fixture: ComponentFixture<CustomOBSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomOBSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomOBSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
