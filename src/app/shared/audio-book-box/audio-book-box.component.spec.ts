import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookBoxComponent } from './audio-book-box.component';

describe('AudioBookBoxComponent', () => {
  let component: AudioBookBoxComponent;
  let fixture: ComponentFixture<AudioBookBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioBookBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
