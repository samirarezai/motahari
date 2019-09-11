import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteCallBackPaymentComponent } from './site-call-back-payment.component';

describe('SiteCallBackPaymentComponent', () => {
  let component: SiteCallBackPaymentComponent;
  let fixture: ComponentFixture<SiteCallBackPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteCallBackPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteCallBackPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
