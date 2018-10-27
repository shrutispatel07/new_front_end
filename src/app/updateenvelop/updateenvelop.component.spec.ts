import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateenvelopComponent } from './updateenvelop.component';

describe('UpdateenvelopComponent', () => {
  let component: UpdateenvelopComponent;
  let fixture: ComponentFixture<UpdateenvelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateenvelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateenvelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
