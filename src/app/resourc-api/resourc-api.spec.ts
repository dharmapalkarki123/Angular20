import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcApi } from './resourc-api';

describe('ResourcApi', () => {
  let component: ResourcApi;
  let fixture: ComponentFixture<ResourcApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
