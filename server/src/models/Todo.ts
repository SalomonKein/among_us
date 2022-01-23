import {Document, Model, model, Schema} from "mongoose";
import {ITodo} from "todos.type";

// export interface ITodo extends Document {
//   title: string;
//   description: string;
//   isComplited: boolean;
//   isPrivate: boolean;
//   userId: string
// }

const todoSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
  },
  isPublic: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Todo: Model<ITodo> = model("Todo", todoSchema);

export default Todo;
