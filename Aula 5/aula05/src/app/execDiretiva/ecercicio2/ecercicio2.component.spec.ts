import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecercicio2Component } from './ecercicio2.component';

describe('Ecercicio2Component', () => {
  let component: Ecercicio2Component;
  let fixture: ComponentFixture<Ecercicio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ecercicio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecercicio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
