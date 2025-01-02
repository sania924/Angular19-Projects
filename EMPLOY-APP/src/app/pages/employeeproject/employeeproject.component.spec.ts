import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeprojectComponent } from './employeeproject.component';

describe('EmployeeprojectComponent', () => {
  let component: EmployeeprojectComponent;
  let fixture: ComponentFixture<EmployeeprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
