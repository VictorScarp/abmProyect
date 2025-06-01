export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
}

export interface CreateUserData {
  name: string;
  email: string;
  phone: string;
  department: string;
}

export interface UpdateUserData extends CreateUserData {
  id: number;
}
