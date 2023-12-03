import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleLogsComponent } from './console-logs.component';

describe('ConsoleLogsComponent', () => {
  let component: ConsoleLogsComponent;
  let fixture: ComponentFixture<ConsoleLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsoleLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
