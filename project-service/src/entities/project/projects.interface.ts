import { ObjectId, Types } from "mongoose";

interface ProjectInterface {
    _id: Types.ObjectId;
    name: string;
    teamLeadId: string
    image: string;
    description?: string;
    startDate: Date;
    endDate?: Date;
    progress: number;
    status: 'Not Started' | 'In Progress' | 'Completed';
    team: string;
    tasks: [string];
}

interface Teams {
    _id: ObjectId,
    teamLead: number,
    name: string,
    members: number[],
    updatedAt: Date
    createdAt: Date,
    __v?: number
}
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
    department: [id: number,
        name: string]
    joindate?: Date; // Optional for new employee creation
    updatedAt?: Date; // Optional for new employee creation
}

interface ProjectDetailedInterface {
    project: ProjectInterface,
    team: Teams,
    members: Employee[],
}

interface TeamWithMembers {
    team: Teams,
    members: Employee[],
}
export {
    ProjectInterface,
    ProjectDetailedInterface,
    TeamWithMembers
}