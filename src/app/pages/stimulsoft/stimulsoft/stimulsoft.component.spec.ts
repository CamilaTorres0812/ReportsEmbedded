import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StimulsoftComponent } from './stimulsoft.component';

describe('StimulsoftComponent', () => {
  let component: StimulsoftComponent;
  let fixture: ComponentFixture<StimulsoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StimulsoftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StimulsoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
