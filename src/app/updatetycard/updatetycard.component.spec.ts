import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatetycardComponent } from './updatetycard.component';

describe('UpdatetycardComponent', () => {
  let component: UpdatetycardComponent;
  let fixture: ComponentFixture<UpdatetycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatetycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatetycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
