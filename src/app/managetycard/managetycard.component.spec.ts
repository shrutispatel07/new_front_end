import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagetycardComponent } from './managetycard.component';

describe('ManagetycardComponent', () => {
  let component: ManagetycardComponent;
  let fixture: ComponentFixture<ManagetycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagetycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagetycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
