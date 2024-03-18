import { Request, Response } from 'express';

import { Task, TaskDocument } from '../../models/task';

const updateTask = async (req: Request, res: Response) => {
  try {
    const taskId = req.params.taskId;
    
    const { title, description, status, columnId } = req.body;

    const task: TaskDocument | null = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Задача не знайдена' });
    }

    if (title) {
      task.title = title;
    }
    if (description) {
      task.description = description;
    }
    if (status) {
      task.status = status;
    }
    if (columnId) {
      task.columnId = columnId;
    }
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    console.error('Помилка при оновленні задачі:', error);
    res.status(500).json({ message: 'Помилка при оновленні задачі' });
  }
};

export { updateTask };