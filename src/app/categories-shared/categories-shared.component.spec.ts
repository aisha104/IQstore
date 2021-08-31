import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSharedComponent } from './categories-shared.component';

describe('CategoriesSharedComponent', () => {
  let component: CategoriesSharedComponent;
  let fixture: ComponentFixture<CategoriesSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
