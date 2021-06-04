import {Schema, model} from 'mongoose';

const apiSchema = new Schema (
  {
    id: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    }
  }
);

export default model("TD", apiSchema);
