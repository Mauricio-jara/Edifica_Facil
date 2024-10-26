import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilProPage } from './perfil-pro.page';

describe('PerfilProPage', () => {
  let component: PerfilProPage;
  let fixture: ComponentFixture<PerfilProPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
