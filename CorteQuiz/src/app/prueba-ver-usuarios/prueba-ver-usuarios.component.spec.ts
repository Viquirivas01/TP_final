import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaVerUsuariosComponent } from './prueba-ver-usuarios.component';

describe('PruebaVerUsuariosComponent', () => {
  let component: PruebaVerUsuariosComponent;
  let fixture: ComponentFixture<PruebaVerUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebaVerUsuariosComponent]
    });
    fixture = TestBed.createComponent(PruebaVerUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
