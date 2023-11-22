import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGameOverComponent } from './modal-game-over.component';

describe('ModalGameOverComponent', () => {
  let component: ModalGameOverComponent;
  let fixture: ComponentFixture<ModalGameOverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGameOverComponent]
    });
    fixture = TestBed.createComponent(ModalGameOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
