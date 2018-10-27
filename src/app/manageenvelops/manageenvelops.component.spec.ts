import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageenvelopsComponent } from './manageenvelops.component';

describe('ManageenvelopsComponent', () => {
  let component: ManageenvelopsComponent;
  let fixture: ComponentFixture<ManageenvelopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageenvelopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageenvelopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
