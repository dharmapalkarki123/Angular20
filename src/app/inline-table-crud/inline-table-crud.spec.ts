import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineTableCrud } from './inline-table-crud';

describe('InlineTableCrud', () => {
  let component: InlineTableCrud;
  let fixture: ComponentFixture<InlineTableCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineTableCrud]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineTableCrud);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
