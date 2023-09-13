// import { Route, Routes } from 'react-router'
import InnerApp from "./InnerApp";
import {  Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./container/screen/auth/Login";
import { StyledEngineProvider } from "@mui/material/styles";
const App = () => {
  const renderRoutes = () => {
    return (
      <>
        <Routes>
          <Route path="/*" element={<InnerApp />} />
        </Routes>
      </>
    );
  };

  return (
    <><StyledEngineProvider injectFirst>
  <Box>
        {/* <Router>{renderRoutes()}</Router> */}
        <Login/>
      </Box>

    </StyledEngineProvider>
    
    </>
  );
}

export default App;
