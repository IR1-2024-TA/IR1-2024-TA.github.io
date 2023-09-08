import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbboardComponent } from './dashboard.component';

describe('DasbboardComponent', () => {
  let component: DasbboardComponent;
  let fixture: ComponentFixture<DasbboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DasbboardComponent]
    });
    fixture = TestBed.createComponent(DasbboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
