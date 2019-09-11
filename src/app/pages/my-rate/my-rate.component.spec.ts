import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRateComponent } from './my-rate.component';

describe('MyRateComponent', () => {
  let component: MyRateComponent;
  let fixture: ComponentFixture<MyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
