import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbookModalComponent } from './workbook-modal.component';

describe('WorkbookModalComponent', () => {
  let component: WorkbookModalComponent;
  let fixture: ComponentFixture<WorkbookModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkbookModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkbookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
