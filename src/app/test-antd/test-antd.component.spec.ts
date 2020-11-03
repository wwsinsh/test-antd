import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAntdComponent } from './test-antd.component';

describe('TestAntdComponent', () => {
  let component: TestAntdComponent;
  let fixture: ComponentFixture<TestAntdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAntdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAntdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
