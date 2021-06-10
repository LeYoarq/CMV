import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirIfComponent } from './dir-if.component';

describe('DirIfComponent', () => {
  let component: DirIfComponent;
  let fixture: ComponentFixture<DirIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
