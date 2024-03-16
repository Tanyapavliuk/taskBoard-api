import { Request, Response } from 'express';

import { Board } from '../../models/board';

const getAllBoards = async (req: Request, res: Response) => {
  const boards = await Board.find().sort('-createdAt').exec();

  return res.status(200).json({ data: boards });
};

export { getAllBoards };
