import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSharedComponent } from './products-shared.component';

describe('ProductsSharedComponent', () => {
  let component: ProductsSharedComponent;
  let fixture: ComponentFixture<ProductsSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
