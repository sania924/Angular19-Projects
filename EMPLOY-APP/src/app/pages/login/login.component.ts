import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    userName: '',
    password: '',
  };

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {
    // this.onLogin();
  }
  onLogin() {
    // debugger;
    this.http
      .post(
        'https://projectapi.gerasim.in/api/EmployeeManagement/login',
        this.loginObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          console.log('Login successful', res);
          localStorage.setItem('employapp', JSON.stringify(res.data));
          this.router.navigateByUrl('project');
        } else {
          console.log('Login failed', res.message);
        }
        console.log(this.loginObj);
      });
  }
}
