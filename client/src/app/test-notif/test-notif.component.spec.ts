import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNotifComponent } from './test-notif.component';

describe('TestNotifComponent', () => {
  let component: TestNotifComponent;
  let fixture: ComponentFixture<TestNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestNotifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
