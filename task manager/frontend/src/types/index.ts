export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskResponse {
  tasks: Task[];
  total: number;
}

export interface TaskRequest {
  title: string;
  description: string;
}
