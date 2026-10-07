import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunBehReplay } from './sun-beh-replay';

describe('SunBehReplay', () => {
  let component: SunBehReplay;
  let fixture: ComponentFixture<SunBehReplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunBehReplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunBehReplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
