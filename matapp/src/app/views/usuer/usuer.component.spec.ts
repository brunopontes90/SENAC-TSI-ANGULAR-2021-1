import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuerComponent } from './usuer.component';

describe('UsuerComponent', () => {
  let component: UsuerComponent;
  let fixture: ComponentFixture<UsuerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
