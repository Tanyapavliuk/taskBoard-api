import { Router } from 'express';

import { updateTask, deleteTask } from '../controllers';

const taskRoute = () => {
  const router = Router();
  
  router.patch('/tasks/:taskId', updateTask);
  router.delete('/tasks/:taskId', deleteTask);

  return router;
};

export { taskRoute };
