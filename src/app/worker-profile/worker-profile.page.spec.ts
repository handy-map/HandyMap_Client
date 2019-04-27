import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerProfilePage } from './worker-profile.page';

describe('WorkerProfilePage', () => {
  let component: WorkerProfilePage;
  let fixture: ComponentFixture<WorkerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
