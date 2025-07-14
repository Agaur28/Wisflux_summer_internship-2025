import { Router } from 'express';
import TaskController from '../controllers/taskController';

const router = Router();
const taskController = new TaskController();

export function setRoutes(app) {
  app.use('/api/tasks', router);

  router.post('/', taskController.createTask.bind(taskController));
  router.get('/', taskController.getTasks.bind(taskController));
  router.put('/:id', taskController.updateTask.bind(taskController));
  router.delete('/:id', taskController.deleteTask.bind(taskController));
}
