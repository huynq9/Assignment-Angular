import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutAdminComponent } from './lay-out-admin.component';

describe('LayOutAdminComponent', () => {
  let component: LayOutAdminComponent;
  let fixture: ComponentFixture<LayOutAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayOutAdminComponent]
    });
    fixture = TestBed.createComponent(LayOutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
