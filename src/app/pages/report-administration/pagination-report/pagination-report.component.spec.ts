import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationReportComponent } from './pagination-report.component';

describe('PaginationReportComponent', () => {
  let component: PaginationReportComponent;
  let fixture: ComponentFixture<PaginationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
