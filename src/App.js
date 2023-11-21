import { Routes, Route } from 'react-router-dom';
import Login from './scenes/login/login';
import AdminPage from './scenes/admin/AdminPage';
import EmployeePage from './scenes/employee/EmployeePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/admin/*" element={<AdminPage />} />
      <Route path="/employee/*" element={<EmployeePage />} />
    </Routes>
  );
}

export default App;
