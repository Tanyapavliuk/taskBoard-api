import { Request, Response } from 'express';

import { Board } from '../../models/board';

const deleteBoard = async (req: Request, res: Response) => {
  const { id } = req.params;

  await Board.findByIdAndDelete(id);

  return res.status(200).json({ message: 'Board deleted successfully.' });
};

export { deleteBoard };