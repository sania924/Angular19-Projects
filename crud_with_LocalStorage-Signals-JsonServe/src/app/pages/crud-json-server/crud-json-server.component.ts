import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-json-server',
  imports: [FormsModule],
  templateUrl: './crud-json-server.component.html',
  styleUrl: './crud-json-server.component.scss',
})
export class CrudJsonServerComponent implements OnInit {
  userList: User[] = [];
  useObj: User = new User();
  http = inject(HttpClient);
  @ViewChild('Modal') Modal: ElementRef | undefined;
  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.http
      .get<User[]>('http://localhost:3000/userList')
      .subscribe((res: User[]) => {
        this.userList = res;
      });
  }
  openModel() {
    if (this.Modal) {
      this.Modal.nativeElement.style.display = 'block';
    }
  }
  closeModel() {
    if (this.Modal) {
      this.Modal.nativeElement.style.display = 'none';
    }
  }
  onSave() {
    this.http
      .post('http://localhost:3000/userList', this.useObj)
      .subscribe((res: any) => {
        this.getUser();
        this.closeModel();
      });
  }
  onChange(id: number) {
    this.http
      .get<User>('http://localhost:3000/userList/' + id)
      .subscribe((res: User) => {
        this.useObj = res;
        this.openModel();
        this.closeModel();
      });
  }
  updateUser() {
    this.http
      .put('http://localhost:3000/userList/' + this.useObj.id, this.useObj)
      .subscribe((res: any) => {
        this.getUser();
      });
  }
  onDelete(id: number) {
    const isDelete = confirm('are you sure to want delete?');
    if (isDelete) {
      this.http
        .delete('http://localhost:3000/userList/' + id)
        .subscribe((res: any) => {
          this.getUser();
        });
    }
  }
}
