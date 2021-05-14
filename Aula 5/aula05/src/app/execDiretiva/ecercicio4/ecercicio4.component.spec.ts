import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecercicio4Component } from './ecercicio4.component';

describe('Ecercicio4Component', () => {
  let component: Ecercicio4Component;
  let fixture: ComponentFixture<Ecercicio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ecercicio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecercicio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
