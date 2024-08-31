/* tslint:disable:no-unused-variable */
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormEmpresaComponent } from './form-empresa.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'rxjs';

describe('FormEmpresaComponent', () => {
  let component: FormEmpresaComponent;
  let fixture: ComponentFixture<FormEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
