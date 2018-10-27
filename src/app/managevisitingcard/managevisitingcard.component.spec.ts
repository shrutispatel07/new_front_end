import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagevisitingcardComponent } from './managevisitingcard.component';

describe('ManagevisitingcardComponent', () => {
  let component: ManagevisitingcardComponent;
  let fixture: ComponentFixture<ManagevisitingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagevisitingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagevisitingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
