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
      });
  }
  onChange(id: number) {
    this.http
      .get<User>('http://localhost:3000/userList/' + id)
      .subscribe((res: User) => {
        this.useObj = res;
        this.openModel();
      });
  }
  updateUser() {
    this.http
      .put('http://localhost:3000/userList/' + this.useObj.id, this.useObj)
      .subscribe((res: any) => {
        this.getUser();
      });
  }
}
