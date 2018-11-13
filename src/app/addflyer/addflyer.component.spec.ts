import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddflyerComponent } from './addflyer.component';

describe('AddflyerComponent', () => {
  let component: AddflyerComponent;
  let fixture: ComponentFixture<AddflyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddflyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
