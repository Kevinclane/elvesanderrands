import mongoose from "mongoose";
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

const Job = new Schema(
  {
    owner: { type: ObjectId, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    startPrice: { type: String, required: true },
    img: [{ type: String }],
    estimatedHours: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    location: { type: Object, required: true },
    status: { type: String, enum: ["open", "pending", "closed"], default: "open" },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);
Job.virtual("creator", {
  localField: "creatorEmail",
  ref: "Profile",
  foreignField: "email",
  justOne: true,
});
export default Job;
