import { Request, Response } from 'express';

import { Board } from '../../models/board';

const getBoard = async (req: Request, res: Response) => {
  const { id } = req.params;

  const board = await Board.findOne({ _id: id });

  if (!board) {
    return res.status(404).json({ message: `Board with id "${id}" not found.` });
  }

  return res.status(200).json({ data: board });
};

export { getBoard };
