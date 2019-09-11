import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBoxComponent } from './book-box.component';

describe('BookBoxComponent', () => {
  let component: BookBoxComponent;
  let fixture: ComponentFixture<BookBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
