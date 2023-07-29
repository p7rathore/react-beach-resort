import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
//imports for Dashboard app
import Dashboard from "./dashboardDesignProject/containers/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./dashboardDesignProject/styles/global";
import { lightTheme, darkTheme } from "./dashboardDesignProject/styles/theme";
import { useThemeContext } from "./dashboardDesignProject/themeContext";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/room/:slug" element={<SingleRoom />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export function DashboardApp() {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
