import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/home";
import { theme } from "./Theme";
import { ThemeProvider } from "@mui/material";
import CssBaseLine from "@mui/material/CssBaseline";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
