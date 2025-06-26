import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadSTIComponent } from './load-sti.component';

describe('LoadSTIComponent', () => {
  let component: LoadSTIComponent;
  let fixture: ComponentFixture<LoadSTIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSTIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSTIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
