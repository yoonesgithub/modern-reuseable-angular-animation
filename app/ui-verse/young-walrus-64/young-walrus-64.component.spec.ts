import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoungWalrus64Component } from './young-walrus-64.component';

describe('YoungWalrus64Component', () => {
  let component: YoungWalrus64Component;
  let fixture: ComponentFixture<YoungWalrus64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoungWalrus64Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoungWalrus64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
