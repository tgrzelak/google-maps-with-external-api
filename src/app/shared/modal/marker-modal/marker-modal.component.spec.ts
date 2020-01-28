import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerModalComponent } from './marker-modal.component';

describe('MarkerModalComponent', () => {
  let component: MarkerModalComponent;
  let fixture: ComponentFixture<MarkerModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
