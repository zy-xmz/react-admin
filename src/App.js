import './App.css';
import { Routes, Route, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <div>
      <div><Link to="/">home</Link></div>
      <div><Link to="/login">去登录</Link></div>
      </div>
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
  <h1>登录</h1>
</div>
  )
}

export default App;
