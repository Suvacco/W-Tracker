import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
    date: Date,
    weight: String
})

export default mongoose.models.Weight || mongoose.model('Weight', weightSchema)