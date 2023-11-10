const App = () => {
  return (
    <div>
      <div class="container">
        <div class="content">
          <img src="./assets/logo.svg" />
          <ul>
            <li>
              <a class="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="./about.html">About</a>
            </li>
          </ul>
        </div>
      </div>
      <main class="container home">
        <h1 class="title">Simple ToDo App from baker</h1>
        <p class="desc">This todo app for test design.</p>
        <div class="form-box">
          <input placeholder="Write Text here . . ." />
          <button>+ Add New</button>
        </div>
        <div class="todo-list">
          <div class="todo-item">
            <p>Hello this is my first Todo.</p>
            <button>X</button>
          </div>
          <div class="todo-item">
            <p>Hello this is my first Todo.</p>
            <button>X</button>
          </div>
          <div class="todo-item">
            <p>Hello this is my first Todo.</p>
            <button>X</button>
          </div>
        </div>
        <button class="fixed-btn">+ Add New</button>
      </main>
    </div>
  );
};
export default App;
