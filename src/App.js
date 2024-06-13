import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Michael D. Price</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            I am a passionate web developer with expertise in React.js. I love
            creating beautiful and functional web applications.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul> 
            <li>
              <a href="https://example.com/project1">Project 1</a> - Description
              of project 1.
            </li>
            <li>
              <a href="https://example.com/project2">Project 2</a> - Description
              of project 2.
            </li>
            {/* Add more projects as needed */}
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
