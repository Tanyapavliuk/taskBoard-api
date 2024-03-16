import { Request, Response } from 'express';

import { Board } from '../../models/board';

const updateBoard = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { description, name } = req.body;
  
    const board = await Board.findOne({ _id: id });
  
    if (!board) {
      return res.status(404).json({ message: `Board with id "${id}" not found.` });
    }
  
    if (!name || !description) {
      return res.status(422).json({ message: 'The fields name and description are required' });
    }
  
    await Board.updateOne({ _id: id }, { name, description });
  
    const boardUpdated = await Board.findById(id, { name, description });
  
    return res.status(200).json({ data: boardUpdated });
  };

  export { updateBoard };