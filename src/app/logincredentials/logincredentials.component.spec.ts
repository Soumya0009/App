import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincredentialsComponent } from './logincredentials.component';

describe('LogincredentialsComponent', () => {
  let component: LogincredentialsComponent;
  let fixture: ComponentFixture<LogincredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
