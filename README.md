# To-Do List App

A simple To-Do List app built with Angular. This app helps you organize and manage your tasks effectively with features like task completion, deletion, and persistent storage.

---

## Features

- Add tasks to your to-do list.
- Mark tasks as completed (crossed out).
- Delete tasks you no longer need.
- Persistent storage using local storage—tasks stay even after refreshing the page.

---

## How to Use

### Adding a Task
1. Type the name of your task in the input box.
2. Click the "Add Task" button to add it to the list.

### Marking a Task as Completed
1. Check the box next to a task to mark it as completed.
2. The task will appear crossed out.

### Deleting a Task
1. Click the "Delete" button next to a task to remove it from the list.

---

## Installation

To set up the project locally:

1. Clone the repository:
   git clone https://github.com/your-username/todo-list-app.git

2. Navigate to the project directory:
   cd todo-list-app

3. Install dependencies:
   npm install

4. Run the app:
    ng serve

5. Open http://localhost:4200 in your browser to view the app.


## Technologies Used

- Angular: Standalone components for a modular structure.
- Local Storage: For persistent task storage.
- CSS Flexbox: For modern and responsive styling.

## Known Limitations

1. Tasks are device-specific and not synced across devices.
2. You cannot edit tasks—only add, complete, or delete them.
3. There is no "Clear All" or "Undo" feature.
