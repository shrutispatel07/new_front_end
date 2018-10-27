import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagelabelComponent } from './managelabel.component';

describe('ManagelabelComponent', () => {
  let component: ManagelabelComponent;
  let fixture: ComponentFixture<ManagelabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagelabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagelabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
