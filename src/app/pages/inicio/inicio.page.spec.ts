import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioPage } from './inicio.page';


import { Router } from '@angular/router';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
