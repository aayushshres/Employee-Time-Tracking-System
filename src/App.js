import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/admin/global/Topbar";
import Sidebar from "./scenes/admin/global/Sidebar";
import Dashboard from "./scenes/admin/dashboard";
import Employees from "./scenes/admin/employees";
import Bar from "./scenes/admin/bar";
import Form from "./scenes/admin/form";
import Pie from "./scenes/admin/pie";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/admin/calendar/calendar";
import Projects from "./scenes/admin/projects";
import LeaveRequests from "./scenes/admin/leave";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin/employees" element={<Employees />} />
              <Route path="/admin/form" element={<Form />} />
              <Route path="/admin/projects" element={<Projects />} />
              <Route path="/admin/leave" element={<LeaveRequests />} />
              <Route path="/admin/bar" element={<Bar />} />
              <Route path="/admin/pie" element={<Pie />} />
              <Route path="/admin/calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
