import { Types } from "mongoose";

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

export {
    ProjectInterface
}