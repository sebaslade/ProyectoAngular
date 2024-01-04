import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaciudadComponent } from './listaciudad.component';

describe('ListaciudadComponent', () => {
  let component: ListaciudadComponent;
  let fixture: ComponentFixture<ListaciudadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaciudadComponent]
    });
    fixture = TestBed.createComponent(ListaciudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
