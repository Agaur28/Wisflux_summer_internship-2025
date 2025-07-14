class Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;

  constructor(id: number, title: string, description: string, completed: boolean = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
  }

  static fromData(data: any): Task {
    return new Task(data.id, data.title, data.description, data.completed);
  }

  toData(): any {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      completed: this.completed,
    };
  }
}

export default Task;
