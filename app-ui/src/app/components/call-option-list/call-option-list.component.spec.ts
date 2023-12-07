import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallOptionListComponent } from './call-option-list.component';

describe('CallOptionListComponent', () => {
  let component: CallOptionListComponent;
  let fixture: ComponentFixture<CallOptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallOptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallOptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
