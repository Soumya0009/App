import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorcomeComponent } from './errorcome.component';

describe('ErrorcomeComponent', () => {
  let component: ErrorcomeComponent;
  let fixture: ComponentFixture<ErrorcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
