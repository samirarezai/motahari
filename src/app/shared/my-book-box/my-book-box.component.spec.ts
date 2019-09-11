import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBookBoxComponent } from './my-book-box.component';

describe('MyBookBoxComponent', () => {
  let component: MyBookBoxComponent;
  let fixture: ComponentFixture<MyBookBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBookBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
