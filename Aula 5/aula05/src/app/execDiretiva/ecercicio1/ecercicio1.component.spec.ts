import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecercicio1Component } from './ecercicio1.component';

describe('Ecercicio1Component', () => {
  let component: Ecercicio1Component;
  let fixture: ComponentFixture<Ecercicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ecercicio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecercicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
