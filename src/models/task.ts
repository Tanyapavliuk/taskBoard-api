import mongoose, { Schema, Model, Document } from 'mongoose';

interface TaskDocument extends Document {
  boardId: Schema.Types.ObjectId;
  title: string;
  description?: string;
  status?: 'to do' | 'in progress' | 'done';
}

  const taskSchema = new Schema<TaskDocument>({
    boardId: {
      type: Schema.Types.ObjectId,
      ref: 'Board',
      required: true
    },
    title: String,
    description: String,
    status: {
      type: String,
      enum: ['to do', 'in progress', 'done'],
      default: 'to do'
    },

  }, { collection: 'tasks',timestamps: true });
  
  const Task: Model<TaskDocument> = mongoose.model<TaskDocument>('Task', taskSchema);

  export { Task, TaskDocument };