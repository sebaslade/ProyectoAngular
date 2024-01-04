import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarciudadComponent } from './agregarciudad.component';

describe('AgregarciudadComponent', () => {
  let component: AgregarciudadComponent;
  let fixture: ComponentFixture<AgregarciudadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarciudadComponent]
    });
    fixture = TestBed.createComponent(AgregarciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
