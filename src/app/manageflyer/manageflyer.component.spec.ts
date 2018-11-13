import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageflyerComponent } from './manageflyer.component';

describe('ManageflyerComponent', () => {
  let component: ManageflyerComponent;
  let fixture: ComponentFixture<ManageflyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageflyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageflyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
