import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JowarComponent } from './jowar.component';

describe('JowarComponent', () => {
  let component: JowarComponent;
  let fixture: ComponentFixture<JowarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JowarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JowarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
