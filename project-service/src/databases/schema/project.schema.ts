import mongoose, { Schema } from "mongoose";
import { ProjectInterface } from "../../entities/project/projects.interface";

const schema = new mongoose.Schema<ProjectInterface>({
    name: {
        type: String, required: true

    },
    image: {
        type: String,
    },
    description: {
        type: String
    },
    startDate: {
        type: Date, required: true

    },
    endDate: {
        type: Date

    },
    progress: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    }, // Progress field
    status: {
        type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started'

    },
    team: {
        type: String, ref: 'Team'

    },
    tasks: [{
        type: String,
        ref: 'Task'
    }]
}, { timestamps: true })

const projectModel = mongoose.model('Project', schema);
export default projectModel;