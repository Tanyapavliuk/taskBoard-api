import { Request, Response } from 'express';

import { Board, BoardInput } from '../../models/board';

const createBoard = async (req: Request, res: Response) => {
  const { description, name } = req.body;

  if (!name || !description) {
    return res.status(422).json({
      message: 'The fields name and description are required',
    });
  }

  const boardInput: BoardInput = {
    name,
    description,
  };

  const boardCreated = await Board.create(boardInput);

  return res.status(201).json({ data: boardCreated });
};

export { createBoard };