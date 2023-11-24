import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirDificultadComponent } from './elegir-dificultad.component';

describe('ElegirDificultadComponent', () => {
  let component: ElegirDificultadComponent;
  let fixture: ComponentFixture<ElegirDificultadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElegirDificultadComponent]
    });
    fixture = TestBed.createComponent(ElegirDificultadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
