## Project Title: To-Do List App

### Overview
This project is a simple To-Do List web application built using React. It allows users to add, view, and manage their tasks. The application features a user-friendly interface, with the ability to categorize tasks by color.

### Technologies Used
- React: A popular JavaScript library for building user interfaces.
- React Bootstrap: A library that provides Bootstrap components as React components.
- Cookies (js-cookie): Used for storing and retrieving task data in browser cookies.
- JSON: Data is stored and managed in JSON format.
- Next.js: The project structure suggests the use of Next.js for server-side rendering and routing (though it's not explicitly mentioned in the code).

### Features
1. **Task Management**: Users can add new tasks with a title, description, and color category.
2. **Color Categorization**: Tasks can be categorized into different color groups, such as Primary, Success, Danger, Warning, Info, and Light.
3. **Persistent Storage**: Task data is stored in browser cookies, allowing users to access their tasks even after closing and reopening the application.
4. **Responsive Design**: The application is designed to be responsive, adapting to different screen sizes.

### Code Structure
- **index.tsx**: The main entry point of the application, which displays the list of tasks and handles the addition of new tasks.
- **addModal.tsx**: A modal component used for adding new tasks. It includes form inputs for task title, description, and color category.
- **sidebar.tsx**: A simple sidebar component displaying the application title.

### How to Run
To run this project, follow these steps:
```bash
npm install
npm run dev
```
### Usage
- To add a new task, click on the "+" button on the main page. Fill in the task details, select a color category, and click the "Add" button.
- To view existing tasks, they will be displayed on the main page, categorized by their color.
- Task data is automatically saved in browser cookies and will persist between sessions.

### Future Improvements
Some possible future improvements for this project include:
- Task editing and deletion functionality.
- Task prioritization or due dates.

### App Image

![App Image](https://github.com/KiaNu-ReeVes/react-todoapp/blob/main/AppImage/image.png?raw=true)

Feel free to fork and modify this project to add more features and customize it to your needs!