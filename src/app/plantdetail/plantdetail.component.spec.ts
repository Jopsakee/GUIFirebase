import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantdetailComponent } from './plantdetail.component';

describe('PlantdetailComponent', () => {
  let component: PlantdetailComponent;
  let fixture: ComponentFixture<PlantdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantdetailComponent]
    });
    fixture = TestBed.createComponent(PlantdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
