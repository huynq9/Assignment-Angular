export interface signup {
  _id?: string | number;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  image_url: string;
}
export interface signin {
  name: string;
  email: string;
}
