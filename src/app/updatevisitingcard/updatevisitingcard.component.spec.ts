import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevisitingcardComponent } from './updatevisitingcard.component';

describe('UpdatevisitingcardComponent', () => {
  let component: UpdatevisitingcardComponent;
  let fixture: ComponentFixture<UpdatevisitingcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatevisitingcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevisitingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
