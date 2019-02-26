/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChatboXComponent } from './ChatboX.component';

describe('ChatboXComponent', () => {
  let component: ChatboXComponent;
  let fixture: ComponentFixture<ChatboXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatboXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
