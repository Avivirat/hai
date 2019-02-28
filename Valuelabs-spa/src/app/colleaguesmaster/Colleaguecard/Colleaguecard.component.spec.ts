/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ColleaguecardComponent } from './Colleaguecard.component';

describe('ColleaguecardComponent', () => {
  let component: ColleaguecardComponent;
  let fixture: ComponentFixture<ColleaguecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleaguecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleaguecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
