import { Component, OnInit, signal } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-crud-signals',
  imports: [],
  templateUrl: './crud-signals.component.html',
  styleUrl: './crud-signals.component.scss',
})
export class CrudSignalsComponent implements OnInit {
  userList = signal<User[]>([]);
  userForm = signal<User>(new User());
  sidepanelVisible = signal<boolean>(false);
  ngOnInit() {
    const localData = localStorage.getItem('angular');
    if (localData != null) {
      const parsedata = JSON.parse(localData);
      this.userList.set(parsedata);
    }
  }
  changeView() {
    this.sidepanelVisible.set(!this.sidepanelVisible());
  }
  updateUserObj(fieldName: string, event: any) {
    if (fieldName == 'isAgree') {
      this.userForm.update((oldObj) => ({
        ...oldObj,
        [fieldName]: event.target.cheked,
      }));
    } else {
      this.userForm.update((oldObj) => ({
        ...oldObj,
        [fieldName]: event.target.value,
      }));
    }
  }
  onSave() {
    if (this.userForm().userId == 0) {
      this.userForm().userId = this.userList().length + 1;
      this.userList.update((oldArray) => [...oldArray, this.userForm()]);
    } else {
      const record = this.userList().find(
        (m) => m.userId == this.userForm().userId
      );
      if (record != undefined) {
        record.email = this.userForm().email;
        record.password = this.userForm().password;
        record.address = this.userForm().address;
        record.city = this.userForm().city;
        record.state = this.userForm().state;
        record.zipcode = this.userForm().zipcode;
        record.isAgree = this.userForm().isAgree;
      }
    }
    localStorage.setItem('angular', JSON.stringify(this.userList()));
  }
  onedit(item: User) {
    this.userForm.set(item);
    this.changeView();
  }
  onDelete(id: number) {
    const isdelete = confirm('are you sure to want delete');
    if (isdelete) {
      const index = this.userList().findIndex((m) => m.userId == id);
      this.userList().splice(index, 1);
    }
    localStorage.setItem('angular', JSON.stringify(this.userList()));
  }
}
