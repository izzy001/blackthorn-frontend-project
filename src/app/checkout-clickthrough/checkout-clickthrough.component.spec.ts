import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutClickthroughComponent } from './checkout-clickthrough.component';

describe('CheckoutClickthroughComponent', () => {
  let component: CheckoutClickthroughComponent;
  let fixture: ComponentFixture<CheckoutClickthroughComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutClickthroughComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutClickthroughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
