import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepDescriptionModalComponent } from './step-description-modal.component';

describe('StepDescriptionModalComponent', () => {
  let component: StepDescriptionModalComponent;
  let fixture: ComponentFixture<StepDescriptionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepDescriptionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
