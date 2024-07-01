import mongoose from "mongoose";
import { Team } from "../../entities/interfaces/team.interface";

const teamSchema = new mongoose.Schema({
  teamLead: {
    type: Number,
    required: true,
    ref: 'Employee'
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  members: [
    {
      type: Number,
      ref: 'Employee',
    }
  ]
}, { timestamps: true })


const team = mongoose.model<Team>("team", teamSchema)

export default team