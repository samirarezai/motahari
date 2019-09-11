import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchStepComponent } from './match-step.component';

describe('MatchStepComponent', () => {
  let component: MatchStepComponent;
  let fixture: ComponentFixture<MatchStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
