import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StepperModule } from 'primeng/stepper';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { StepperComponent } from './pages/stepper/stepper.component';

@Component({
  selector: 'app-root',
  imports: [StepperModule, ButtonModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'EMPLOY-APP';
  designationList: any[] = [];
  roleList: any[] = [];
  employeeList: any[] = [];
  isCreateView: boolean = true;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.loadDesignation();
    this.loadRoles();
    this.loadAllEmployees();
  }
  employeeObj: any = {
    roleId: 0,
    userName: ' ',
    empCode: ' ',
    empId: 0,
    empName: ' ',
    empEmailId: ' ',
    empDesignationId: 0,
    empContactNo: ' ',
    empAltContactNo: ' ',
    empPersonalEmailId: ' ',
    empExpTotalYear: 0,
    empExpTotalMonth: 0,
    empCity: ' ',
    empState: ' ',
    empPinCode: ' ',
    empAddress: ' ',
    empPerCity: ' ',
    empPerState: ' ',
    empPerPinCode: ' ',
    empPerAddress: ' ',
    password: ' ',
    ErpEmployeeSkills: [],
    ErmEmpExperiences: [],
  };

  addSkills() {
    const empSkillObj = {
      empSkillId: 0,
      empId: 0,
      skill: '',
      totalYearExp: 0,
      lastVersionUsed: '',
    };
    this.employeeObj.ErpEmployeeSkills.unshift(empSkillObj);
  }
  addExperience() {
    const empExObj = {
      empExpId: 0,
      empId: 0,
      companyName: 'string',
      startDate: '2025-01-04T14:57:26.816Z',
      endDate: '2025-01-04T14:57:26.816Z',
      designation: 'string',
      projectsWorkedOn: 'string',
    };
    this.employeeObj.ErmEmpExperiences.unshift(empExObj);
  }
  loadAllEmployees() {
    this.http
      .get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee')
      .subscribe((res: any) => {
        this.employeeList = res.data;
      });
  }
  saveEmploy() {
    this.http
      .post(
        'https://freeapi.gerasim.in/api/EmployeeApp/CreateNewEmployee',
        this.employeeObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          console.log(res);
          alert('successful');
        } else {
          alert(res.message);
        }
      });
  }

  loadDesignation() {
    this.http
      .get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllDesignation')
      .subscribe((res: any) => {
        this.designationList = res.data;
      });
  }
  loadRoles() {
    this.http
      .get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllRoles')
      .subscribe((res: any) => {
        this.roleList = res.data;
      });
  }

  updateEmployee() {
    this.http
      .put(
        'https://freeapi.gerasim.in/api/EmployeeApp/UpdateEmployee',
        this.employeeObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Employee Created Success');
          this.loadAllEmployees();
          this.isCreateView = false;
        } else {
          alert(res.message);
        }
      });
  }
  onEdit(id: number) {
    this.http
      .get(
        'https://freeapi.gerasim.in/api/EmployeeApp/GetEmployeeByEmployeeId?id=' +
          id
      )
      .subscribe((res: any) => {
        this.employeeObj = res.data;
        this.employeeObj.empId = id;
        this.isCreateView = true;
      });
  }
  onDelet(id: number) {
    const isDelete = confirm('Are You sure want to delete');
    if (isDelete) {
      this.http
        .delete(
          'https://freeapi.gerasim.in/api/EmployeeApp/DeleteEmployeeByEmpId?empId=' +
            id
        )
        .subscribe((res: any) => {
          if (res.result) {
            alert('Employee Deleted Success');
            this.loadAllEmployees();
          } else {
            alert(res.message);
          }
        });
    }
  }
  addNew() {
    this.isCreateView = true;
  }
}
