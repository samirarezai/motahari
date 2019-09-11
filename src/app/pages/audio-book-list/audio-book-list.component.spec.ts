import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioBookListComponent } from './audio-book-list.component';

describe('AudioBookListComponent', () => {
  let component: AudioBookListComponent;
  let fixture: ComponentFixture<AudioBookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioBookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
