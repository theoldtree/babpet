import React, { useState } from "react";
import AppRouter from "./components/Router";
import { authService } from "./firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
