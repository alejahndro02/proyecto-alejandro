import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalentadoresComponent } from './calentadores.component';

describe('CalentadoresComponent', () => {
  let component: CalentadoresComponent;
  let fixture: ComponentFixture<CalentadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalentadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalentadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
