import { Request, Response } from 'express';

import { Board } from '../../models/board';
import { Task } from '../../models/task';

const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status = 'to do', columnId='to do' } = req.body;
    const boardId = req.params.boardId;

    const existingBoard = await Board.findById(boardId);
    if (!existingBoard) {
      return res.status(404).json({ message: 'Дошка не знайдена' });
    }

    const newTask = new Task({
      boardId,
      title,
      description,
      status, 
      columnId
    });

    const savedTask = await newTask.save();

    existingBoard.tasks.push(savedTask._id);
    await existingBoard.save();

    res.status(201).json({ message: 'Задача успішно додана', task: savedTask });
  } catch (error) {
    console.error('Помилка при додаванні задачі:', error);
    res.status(500).json({ message: 'Помилка сервера' });
  }
};

export { createTask };
