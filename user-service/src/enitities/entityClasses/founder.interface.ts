export interface Founder {
  id: number,
  fullname: string,
  email: string,
  companyname: string,
  image: string,
  role: string,
  ispaid: boolean,
  password: string,
  createdAt: Date,
  updatedAt: Date,
}


export interface FounderSignup {
  id: number,
  fullname: string,
  email: string,
  companyname: string,
  image: string,
  // ispaid:boolean,
  password: string,
  createdAt: Date,
  updatedAt: Date
}

export interface UpdateFounder {
  employeeId: string,
  employeeData: any
}