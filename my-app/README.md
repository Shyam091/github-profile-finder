# 🔍 GitHub Profile Finder

A modern and responsive React application that allows users to search for GitHub profiles and view important user information such as followers, following, repositories, bio, location, and profile links.

The application uses GitHub's REST API with the native JavaScript `fetch()` API and provides a smooth user experience with loading states, error handling, and custom CSS animations.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
---

## ✨ Features

* 🔍 **Real-time Profile Search**
  Search for GitHub users using GitHub's REST API.

* ⚡ **Asynchronous API Handling**
  Uses JavaScript `async/await` with `try/catch/finally` for clean asynchronous operations and error handling.

* 🎨 **Conditional UI Rendering**
  Displays different UI states for:

  * Loading
  * User not found
  * API errors
  * Successful profile results

* 🌙 **Responsive Dark Theme**
  A modern dark-themed interface inspired by GitHub's visual style.

* 🔄 **Custom Loading Animation**
  CSS keyframe animations provide visual feedback while fetching user data.

* 📱 **Responsive Design**
  Works across desktop, tablet, and mobile screen sizes.

---

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* HTML5

### API Integration

* GitHub REST API
* Native JavaScript `fetch()` API

### Styling

* CSS3
* Flexbox
* CSS Custom Properties
* CSS Keyframe Animations

### React Concepts Used

* `useState`
* Event Handling
* Conditional Rendering
* API Requests
* Async/Await

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Shyam091/github-profile-finder.git
```

2. Navigate to the project directory:

```bash
cd github-profile-finder
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser.

---

## ⚠️ API Rate Limits

This project uses GitHub's public REST API. Unauthenticated API requests are subject to GitHub's rate limits.

If the application stops returning results after multiple requests, you may have temporarily reached the API request limit.

---

## 📂 Project Structure

```text
src/
├── components/
├── App.jsx
├── App.css
└── main.jsx
```

---

## 📚 What I Learned

While building this project, I practiced:

* Working with external REST APIs
* Using JavaScript `fetch()`
* Handling asynchronous operations with `async/await`
* Managing component state with React `useState`
* Implementing loading and error states
* Conditional rendering in React
* Creating responsive layouts with CSS
* Building custom CSS animations

---

## 👨‍💻 Author

**Shyam Bihari Yadav**

GitHub: [@Shyam091](https://github.com/Shyam091)

---

## 📄 License

This project is open-source and available under the MIT License.
