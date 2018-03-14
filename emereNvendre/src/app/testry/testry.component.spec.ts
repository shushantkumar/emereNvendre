import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestryComponent } from './testry.component';

describe('TestryComponent', () => {
  let component: TestryComponent;
  let fixture: ComponentFixture<TestryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
