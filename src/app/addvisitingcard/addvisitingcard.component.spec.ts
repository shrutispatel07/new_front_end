import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvisitingcardComponent } from './addvisitingcard.component';

describe('AddvisitingcardComponent', () => {
  let component: AddvisitingcardComponent;
  let fixture: ComponentFixture<AddvisitingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddvisitingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvisitingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
