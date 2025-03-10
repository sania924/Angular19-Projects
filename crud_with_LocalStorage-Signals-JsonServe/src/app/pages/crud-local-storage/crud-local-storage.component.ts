import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crud-local-storage',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './crud-local-storage.component.html',
  styleUrl: './crud-local-storage.component.scss',
})
export class CrudLocalStorageComponent implements OnInit {
  title = 'crud_with_localStorage';
  isNewUser: boolean = true;
  useObj: User = new User();
  userList: User[] = [];
  changeView() {
    this.isNewUser = !this.isNewUser;
  }
  ngOnInit() {
    const localData = localStorage.getItem('angular');
    if (localData != null) {
      this.userList = JSON.parse(localData);
    }
  }
  onSave() {
    this.useObj.userId = this.userList.length + 1;
    this.userList.push(this.useObj);
    // for edit need to reintilize
    this.useObj = new User();
    localStorage.setItem('angular', JSON.stringify(this.userList));
    this.changeView();
  }
  onEdit(data: User) {
    this.useObj = data;
    this.changeView();
  }
  onUpdate() {
    const record = this.userList.find((m) => m.userId == this.useObj.userId);
    if (record != undefined) {
      record.email = this.useObj.email;
      record.password = this.useObj.password;
      record.address = this.useObj.address;
      record.city = this.useObj.city;
      record.state = this.useObj.state;
      record.zipcode = this.useObj.zipcode;
      record.isAgree = this.useObj.isAgree;
    }
    localStorage.setItem('angular', JSON.stringify(this.userList));
    this.changeView();
    this.useObj = new User();
  }
  isDelete(userId: number) {
    const isdelete = confirm('Are you sure to want delete ');
    if (isdelete) {
      const index = this.userList.findIndex((m) => m.userId == userId);
      this.userList.splice(index, 1);
      localStorage.setItem('angular', JSON.stringify(this.userList));
    }
  }
}
