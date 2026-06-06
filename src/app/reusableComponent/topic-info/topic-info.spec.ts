import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicInfo } from './topic-info';

describe('TopicInfo', () => {
  let component: TopicInfo;
  let fixture: ComponentFixture<TopicInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
