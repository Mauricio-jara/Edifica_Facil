import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroProfesionalPage } from './registro-profesional.page';

describe('RegistroProfesionalPage', () => {
  let component: RegistroProfesionalPage;
  let fixture: ComponentFixture<RegistroProfesionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProfesionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
