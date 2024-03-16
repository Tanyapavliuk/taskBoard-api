import mongoose, { Schema, Model, Document } from 'mongoose';

type BoardDocument = Document & {
  name: string;
  description: string | null;
  tasks: Schema.Types.ObjectId[];
};

type BoardInput = {
    name: BoardDocument['name'];
    description: BoardDocument['description'];
  };

const boardSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      default: null,
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  },
  {
    collection: 'boards',
    timestamps: true,
  },
);

const Board: Model<BoardDocument> = mongoose.model<BoardDocument>('Board', boardSchema);

export { Board,BoardInput, BoardDocument };