import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvRechargeComponent } from './tv-recharge.component';

describe('TvRechargeComponent', () => {
  let component: TvRechargeComponent;
  let fixture: ComponentFixture<TvRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvRechargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TvRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
