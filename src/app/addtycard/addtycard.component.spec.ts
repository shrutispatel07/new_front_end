import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtycardComponent } from './addtycard.component';

describe('AddtycardComponent', () => {
  let component: AddtycardComponent;
  let fixture: ComponentFixture<AddtycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
