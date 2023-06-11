import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopcolectionComponent } from './shopcolection.component';

describe('ShopcolectionComponent', () => {
  let component: ShopcolectionComponent;
  let fixture: ComponentFixture<ShopcolectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopcolectionComponent]
    });
    fixture = TestBed.createComponent(ShopcolectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
