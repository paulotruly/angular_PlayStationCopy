import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gridjogos } from './gridjogos';

describe('Gridjogos', () => {
  let component: Gridjogos;
  let fixture: ComponentFixture<Gridjogos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gridjogos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gridjogos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
