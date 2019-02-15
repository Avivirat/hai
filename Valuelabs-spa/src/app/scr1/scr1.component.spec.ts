import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { Scr1Component } from './scr1.component';
import {HttpClient} from '@angular/common/http';

describe('Scr1Component', () => {
  let component: Scr1Component;
  let fixture: ComponentFixture<Scr1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scr1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scr1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
