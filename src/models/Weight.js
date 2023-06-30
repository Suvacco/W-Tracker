import mongoose from "mongoose";

const weightSchema = new mongoose.Schema({
    weight: Number,
    date: Date
})

const Weight = mongoose.models.Weight || mongoose.model('Weight', weightSchema)

export default Weight