import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gamecard } from './gamecard';

describe('Gamecard', () => {
  let component: Gamecard;
  let fixture: ComponentFixture<Gamecard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gamecard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gamecard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
