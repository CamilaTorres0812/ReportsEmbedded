import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionesSTIComponent } from './validaciones-sti.component';

describe('ValidacionesSTIComponent', () => {
  let component: ValidacionesSTIComponent;
  let fixture: ComponentFixture<ValidacionesSTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionesSTIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionesSTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
