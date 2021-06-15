/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pipes1Component } from './pipes1.component';

describe('Pipes1Component', () => {
  let component: Pipes1Component;
  let fixture: ComponentFixture<Pipes1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipes1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
