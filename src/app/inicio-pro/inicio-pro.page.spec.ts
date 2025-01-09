import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioProPage } from './inicio-pro.page';

describe('InicioProPage', () => {
  let component: InicioProPage;
  let fixture: ComponentFixture<InicioProPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioProPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
