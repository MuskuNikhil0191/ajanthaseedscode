import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajraComponent } from './bajra.component';

describe('BajraComponent', () => {
  let component: BajraComponent;
  let fixture: ComponentFixture<BajraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
