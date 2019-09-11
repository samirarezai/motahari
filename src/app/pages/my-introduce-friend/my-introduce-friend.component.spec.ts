import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIntroduceFriendComponent } from './my-introduce-friend.component';

describe('MyIntroduceFriendComponent', () => {
  let component: MyIntroduceFriendComponent;
  let fixture: ComponentFixture<MyIntroduceFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyIntroduceFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyIntroduceFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
