import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateflyerComponent } from './updateflyer.component';

describe('UpdateflyerComponent', () => {
  let component: UpdateflyerComponent;
  let fixture: ComponentFixture<UpdateflyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateflyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
