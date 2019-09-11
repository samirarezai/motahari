import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackPaymentComponent } from './call-back-payment.component';

describe('CallBackPaymentComponent', () => {
  let component: CallBackPaymentComponent;
  let fixture: ComponentFixture<CallBackPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBackPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBackPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
