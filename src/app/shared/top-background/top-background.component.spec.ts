import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBackgroundComponent } from './top-background.component';

describe('TopBackgroundComponent', () => {
  let component: TopBackgroundComponent;
  let fixture: ComponentFixture<TopBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
