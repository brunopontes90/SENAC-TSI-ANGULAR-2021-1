import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecercicio3Component } from './ecercicio3.component';

describe('Ecercicio3Component', () => {
  let component: Ecercicio3Component;
  let fixture: ComponentFixture<Ecercicio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ecercicio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecercicio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
