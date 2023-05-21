import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayOutClientComponent } from './lay-out-client.component';

describe('LayOutClientComponent', () => {
  let component: LayOutClientComponent;
  let fixture: ComponentFixture<LayOutClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayOutClientComponent]
    });
    fixture = TestBed.createComponent(LayOutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
