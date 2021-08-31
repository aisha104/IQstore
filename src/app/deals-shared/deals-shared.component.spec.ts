import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsSharedComponent } from './deals-shared.component';

describe('DealsSharedComponent', () => {
  let component: DealsSharedComponent;
  let fixture: ComponentFixture<DealsSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealsSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
