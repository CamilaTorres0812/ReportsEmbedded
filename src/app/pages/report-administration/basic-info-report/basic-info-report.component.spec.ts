import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicInfoReportComponent } from './basic-info-report.component';

describe('BasicInfoReportComponent', () => {
  let component: BasicInfoReportComponent;
  let fixture: ComponentFixture<BasicInfoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicInfoReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicInfoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
