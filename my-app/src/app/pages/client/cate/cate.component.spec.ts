import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateComponent } from './cate.component';

describe('CateComponent', () => {
  let component: CateComponent;
  let fixture: ComponentFixture<CateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateComponent]
    });
    fixture = TestBed.createComponent(CateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
