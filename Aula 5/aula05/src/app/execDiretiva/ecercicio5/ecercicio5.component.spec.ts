import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ecercicio5Component } from './ecercicio5.component';

describe('Ecercicio5Component', () => {
  let component: Ecercicio5Component;
  let fixture: ComponentFixture<Ecercicio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ecercicio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ecercicio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
