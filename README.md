# React Native Multi-Page Demo

A simple multi-page learning project built with **React Native** and **Expo**.  
This project demonstrates the fundamentals of React Native through three small apps in a single project: a Counter, a Quotes page, and a Todo app.

---

## 📱 Pages / Features

### 1. Counter Page
- Increment and decrement a number
- Demonstrates **state management** with `useState`
- Reset functionality (optional)
- Clean and responsive UI

### 2. Quotes Page
- Fetches a random quote from an API
- Shows **loading state** while fetching
- Handles **errors gracefully**
- Displays **quote author**
- Button to fetch a new quote

### 3. Todo App
- Add new tasks
- Mark tasks as **completed**
- Delete tasks
- Separate **active** and **completed** tasks
- Clean minimal UI with **Expo Checkbox**
- Demonstrates **state handling, list rendering, and user interactions**

---

## 🛠️ Tech Stack

- **React Native**  
- **Expo**  
- **JavaScript (ES6+)**  
- **NativeWind** (Tailwind CSS for React Native)  
- **Axios** (for fetching quotes)  
- **Expo Checkbox** (for Todo tasks)  

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/aaryahjolia/react-native-multi-page-demo.git
cd react-native-multi-page-demo
```

### 2. Install dependencies
```
npm install
```
### 3. Run the app
```
npx expo start
```

Now, Scan the QR code with your Expo Go app (iOS/Android)
Or run in web/mobile simulator


## 🎯 Learning Goals

This project was built to practice and demonstrate key React Native concepts, including:

- **React Native Fundamentals**: Understanding components, props, and state.  
- **State Management**: Using `useState` to handle dynamic UI updates.  
- **User Input Handling**: Working with `TextInput`, buttons, and checkboxes.  
- **API Integration**: Fetching data from an API using Axios, handling loading and error states.  
- **Conditional Rendering**: Displaying different UI based on state, such as active vs completed tasks.  
- **List Rendering**: Dynamically rendering arrays of tasks or quotes.  
- **UI Styling**: Applying consistent and responsive styling using NativeWind (Tailwind CSS for React Native).  
- **Multi-Page App Structure**: Organizing multiple pages (Counter, Quotes, Todo) within a single React Native project.  
