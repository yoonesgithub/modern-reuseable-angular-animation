import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UckyFalcon75Component } from './ucky-falcon-75.component';

describe('UckyFalcon75Component', () => {
  let component: UckyFalcon75Component;
  let fixture: ComponentFixture<UckyFalcon75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UckyFalcon75Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UckyFalcon75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
