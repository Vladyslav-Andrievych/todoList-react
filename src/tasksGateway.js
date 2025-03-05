const baseUrl = 'https://61ea82407bc0550017bc67cb.mockapi.io/api/v1/tasks';

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to get tasks');
    } else {
      return response.json();
    }
  });
};

export const createTask = (newTask) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(newTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });
};

export const toggleTaskStatus = (updatedTask, taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTask),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to change task's status");
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
};
