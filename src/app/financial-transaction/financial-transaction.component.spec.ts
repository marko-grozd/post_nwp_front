import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialTransactionComponent } from './financial-transaction.component';

describe('FinancialTransactionComponent', () => {
  let component: FinancialTransactionComponent;
  let fixture: ComponentFixture<FinancialTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
