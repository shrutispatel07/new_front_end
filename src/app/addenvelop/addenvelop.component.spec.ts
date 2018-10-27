import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddenvelopComponent } from './addenvelop.component';

describe('AddenvelopComponent', () => {
  let component: AddenvelopComponent;
  let fixture: ComponentFixture<AddenvelopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddenvelopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddenvelopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
