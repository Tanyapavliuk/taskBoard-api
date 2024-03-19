import { Request, Response } from 'express';

import { Board } from '../../models/board';

const updateBoard = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description } = req.body;
  
    try {
        const board = await Board.findOne({ _id: id });
  
        if (!board) {
            return res.status(404).json({ message: `Board with id "${id}" not found.` });
        }
  
        if (!name && !description) {
            return res.status(422).json({ message: 'At least one of the fields "name" or "description" is required.' });
        }
  
        if (name) {
            board.name = name;
        }
  
        if (description) {
            board.description = description;
        }
  
        await board.save();
  
        return res.status(200).json({ data: board });
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error.' });
    }
};

export { updateBoard };