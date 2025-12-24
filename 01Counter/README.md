# 🔢 React Counter App

A simple yet effective **React Counter Application** built to understand **state management, event handling, conditional rendering, and button disabling** in React.

This project is part of my **project-based React learning journey**.

---

## 🚀 Features

- Increment counter value
- Decrement counter value
- Upper limit restriction (Max: 20)
- Lower limit restriction (Min: 0)
- Disable buttons automatically at limits
- User-friendly messages on limit reach

---

## 🧠 Concepts Covered

- `useState` hook
- State updates & re-rendering
- Event handling in React
- Conditional rendering
- Button disabling using state
- Controlled UI behavior

---

## 🧩 Project Logic Explanation

- Initial counter value is set to **5**
- Counter **cannot exceed 20**
- Counter **cannot go below 0**
- Increment and Decrement buttons are:
  - Disabled automatically when limits are reached
- Informative message is shown when limits are hit

---

## 📄 Code Snippet (Core Logic)

```js
const [count, setCount] = useState(5);
const [message, setMessage] = useState("");
<button disabled={count === 20}>Increment</button>
<button disabled={count === 0}>Decrement</button>
```

## 🛠️ Tech Stack
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite / CRA


## 🎯 Learning Outcome
Through this project, I learned:
- How React batches state updates
- Why functional updates are important
- How to control UI using state
- Writing predictable and safe UI logic


## 📌 Future Improvements
- Use functional updates (setCount(prev => prev + 1))
- Add reset button
- Add animations
- Convert to reusable counter component


**🧑‍💻 Author**

Gaurav Kumar<br>
🎓 B.Tech in Computer Science & Engineering<br>
💡 Learning React through practical implementation & consistency<br>
💡 Passionate about Artificial Intelligence, Software Development, and Full Stack Projects<br>
📧 LinkedIn: [Gaurav Kumar](https://www.linkedin.com/in/gaurav-kumar-25-oct?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW7%2FB5onwS4yNaZXl9gxzoA%3D%3D)<br>
GitHub: [KumarGaurav007](https://github.com/KumarGaurav007)

### ⭐ If you like this project, don’t forget to star the repo!