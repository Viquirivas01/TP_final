import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultijugadorComponent } from './multijugador.component';

describe('MultijugadorComponent', () => {
  let component: MultijugadorComponent;
  let fixture: ComponentFixture<MultijugadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultijugadorComponent]
    });
    fixture = TestBed.createComponent(MultijugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
