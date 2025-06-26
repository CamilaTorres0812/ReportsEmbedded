import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPowerbiReportComponent } from './add-powerbi-report.component';

describe('AddPowerbiReportComponent', () => {
  let component: AddPowerbiReportComponent;
  let fixture: ComponentFixture<AddPowerbiReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPowerbiReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPowerbiReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
