import { Request, Response } from 'express';

import { Task, TaskDocument } from '../../models/task';

const getTasksByBoardId = async (req: Request, res: Response) => {
  try {
    const boardId = req.params.boardId;
    
    const tasks: TaskDocument[] = await Task.find({ boardId });
    res.json(tasks);
  } catch (error) {
    console.error('Помилка при отриманні задач дошки:', error);
    res.status(500).json({ message: 'Помилка при отриманні задач дошки' });
  }
};

export { getTasksByBoardId };