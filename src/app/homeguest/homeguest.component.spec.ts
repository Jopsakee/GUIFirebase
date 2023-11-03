import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeguestComponent } from './homeguest.component';

describe('HomeguestComponent', () => {
  let component: HomeguestComponent;
  let fixture: ComponentFixture<HomeguestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeguestComponent]
    });
    fixture = TestBed.createComponent(HomeguestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
