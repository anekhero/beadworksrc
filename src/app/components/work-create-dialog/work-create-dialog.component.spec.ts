import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCreateDialogComponent } from './work-create-dialog.component';

describe('WorkCreateDialogComponent', () => {
  let component: WorkCreateDialogComponent;
  let fixture: ComponentFixture<WorkCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
