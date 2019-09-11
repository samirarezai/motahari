import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAudioBookBoxComponent } from './my-audio-book-box.component';

describe('MyAudioBookBoxComponent', () => {
  let component: MyAudioBookBoxComponent;
  let fixture: ComponentFixture<MyAudioBookBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAudioBookBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAudioBookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
