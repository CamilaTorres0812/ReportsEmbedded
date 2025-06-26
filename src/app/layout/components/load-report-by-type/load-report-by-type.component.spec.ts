import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadReportByTypeComponent } from './load-report-by-type.component';

describe('LoadReportByTypeComponent', () => {
  let component: LoadReportByTypeComponent;
  let fixture: ComponentFixture<LoadReportByTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadReportByTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadReportByTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
