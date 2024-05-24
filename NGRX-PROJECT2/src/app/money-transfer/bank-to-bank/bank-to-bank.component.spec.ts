import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankToBankComponent } from './bank-to-bank.component';

describe('BankToBankComponent', () => {
  let component: BankToBankComponent;
  let fixture: ComponentFixture<BankToBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankToBankComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankToBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
