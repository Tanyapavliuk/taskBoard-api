import { Router } from 'express';

import { createBoard, deleteBoard, getAllBoards,getBoard,updateBoard, getTasksByBoardId, createTask  } from '../controllers';

const boardRoute = () => {
  const router = Router();

  router.post('/boards',createBoard);

  router.post('/boards/:boardId/tasks', createTask);

  router.get('/boards', getAllBoards);

  router.get('/boards/:id', getBoard);

  router.get('/boards/:boardId/tasks', getTasksByBoardId);

  router.patch('/boards/:id', updateBoard);

  router.delete('/boards/:id', deleteBoard);

  return router;
};

export { boardRoute };