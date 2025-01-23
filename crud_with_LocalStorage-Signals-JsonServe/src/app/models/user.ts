export class User {
  id: number;
  userId: number;
  email: string;
  password: any;
  address: string;
  city: string;
  state: string;
  zipcode: number;
  isAgree: boolean;

  constructor() {
    this.id = 0;
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
