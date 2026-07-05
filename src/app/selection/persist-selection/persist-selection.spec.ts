import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistSelection } from './persist-selection';

describe('PersistSelection', () => {
  let component: PersistSelection;
  let fixture: ComponentFixture<PersistSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersistSelection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
