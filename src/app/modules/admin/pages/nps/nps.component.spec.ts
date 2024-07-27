/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NpsComponent } from './nps.component';

describe('NpsComponent', () => {
  let component: NpsComponent;
  let fixture: ComponentFixture<NpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
