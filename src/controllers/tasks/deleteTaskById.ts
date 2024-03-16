import { Request, Response } from 'express';

import { Board } from '../../models/board';
import { Task } from '../../models/task';

const deleteTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;

    const task = await Task.findById(taskId);
    const boardId = task?.boardId;
    
    await Board.updateOne({ _id: boardId }, { $pull: { tasks: taskId } });
    
    await Task.deleteOne({ _id: taskId });
    res.json({ message: 'Задачу успішно видалено' });
  } catch (error) {
    // Обробка помилок
    console.error('Помилка при видаленні задачі:', error);
    res.status(500).json({ message: 'Помилка при видаленні задачі' });
  }
};

export { deleteTask };