import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersSharedComponent } from './best-sellers-shared.component';

describe('BestSellersSharedComponent', () => {
  let component: BestSellersSharedComponent;
  let fixture: ComponentFixture<BestSellersSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellersSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
