/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'rxjs';
import { FormCompanyComponent } from './form-company.component';

describe('FormEmpresaComponent', () => {
  let component: FormCompanyComponent;
  let fixture: ComponentFixture<FormCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormCompanyComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
