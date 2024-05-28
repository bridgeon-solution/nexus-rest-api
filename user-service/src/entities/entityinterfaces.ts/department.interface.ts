
export interface Department {
  status?: string
  data?: {
    id?: number,
    name?: string
  }
}

export interface UpdateDepartments {
  departmentId: string,
  departmentData: any
}
