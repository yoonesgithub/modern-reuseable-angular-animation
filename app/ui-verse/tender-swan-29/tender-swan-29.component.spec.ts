import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderSwan29Component } from './tender-swan-29.component';

describe('TenderSwan29Component', () => {
  let component: TenderSwan29Component;
  let fixture: ComponentFixture<TenderSwan29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderSwan29Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenderSwan29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
