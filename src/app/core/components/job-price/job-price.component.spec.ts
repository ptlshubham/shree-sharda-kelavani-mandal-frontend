import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPriceComponent } from './job-price.component';

describe('JobPriceComponent', () => {
  let component: JobPriceComponent;
  let fixture: ComponentFixture<JobPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
