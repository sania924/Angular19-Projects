export class User {
  userId: number;
  email: string;
  password: any;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  isAgree: boolean;

  constructor() {
    this.userId = 0;
    this.email = '';
    this.password = 0;
    this.address = '';
    this.city = '';
    this.state = '';
    this.zipcode = 0;
    this.isAgree = false;
  }
}
