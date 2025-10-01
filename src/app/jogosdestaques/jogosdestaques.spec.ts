import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jogosdestaques } from './jogosdestaques';

describe('Jogosdestaques', () => {
  let component: Jogosdestaques;
  let fixture: ComponentFixture<Jogosdestaques>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jogosdestaques]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Jogosdestaques);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
