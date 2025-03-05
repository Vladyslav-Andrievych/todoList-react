import React, { Component } from 'react';
import CreateTaskInput from './CreateTaskInput.jsx';
import Task from './Task.jsx';
import {
  createTask,
  deleteTask,
  getTasksList,
  toggleTaskStatus,
} from './tasksGateway.js';

class TasksList extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    getTasksList().then((tasksList) => {
      this.setState({
        tasks: tasksList,
      });
    });
  };

  onTaskCreate = (text) => {
    const newTask = {
      id: Math.random(),
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  onTaskStatusChange = (id) => {
    const taskToChange = this.state.tasks.find((task) => task.id === id);

    const updatedTask = {
      ...taskToChange,
      done: !taskToChange.done,
    };

    toggleTaskStatus(updatedTask, id).then(() => this.fetchTasks());
  };

  onTaskDelete = (id) => {
    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onTaskCreate} />
        <ul className="list">
          {sortedList.map((task) => (
            <Task
              key={task.id}
              {...task}
              handleStatusChange={this.onTaskStatusChange}
              handleTaskDelete={this.onTaskDelete}
            />
          ))}
        </ul>
      </main>
    );
  }
}

export default TasksList;
