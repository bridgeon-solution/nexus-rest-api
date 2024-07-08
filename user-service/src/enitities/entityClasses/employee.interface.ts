export interface Employee {
  id: number; // Optional for new employee creation
  fullname: string;
  email: string;
  phone: string;
  salary: number;
  gender: string;
  password: string
  birthdate: Date; // Assuming you want a Date type
  image: string
  role: string;
  designation: string;
  departmentId?: number; // Optional for new employee creation
  joindate?: Date; // Optional for new employee creation
  updatedAt?: Date; // Optional for new employee creation
  isgenerate: boolean;
}

export interface UpdateEmployees {
  employeeId: string,
  employeeData: Employee
}

export interface EmployeePagination {
  data: any,
  total: number,
  page?: number,
  pageSize?: number,
}


export interface LoginData {
  email: string,
  password: string
}