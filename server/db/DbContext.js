import mongoose from "mongoose";
import ValueSchema from "../models/Value";
import ProfileSchema from "../models/Profile";
import JobSchema from "../models/Job"

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Profile = mongoose.model("Profile", ProfileSchema);
  Jobs = mongoose.model("Job", JobSchema)
}

export const dbContext = new DbContext();
