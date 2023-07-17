import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from 'reactstrap';
import Header from "./components/Header";
import ApplicationViews from "./components/ApplicationViews";
import { onLoginStatusChange } from "./modules/authManager";
import { me } from "./modules/authManager"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [userProfileRole, setUserProfileRole] = useState(null);

  useEffect(() => {
    onLoginStatusChange(setIsLoggedIn);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      const myProfile = me();
      const myRole = myProfile.userTypeId;
      setUserProfileRole(myRole);
    }
    else {
      setUserProfileRole("");
    }
  }, [isLoggedIn])

  if (isLoggedIn === null) {
    return <Spinner className="app-spinner dark" />;
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <ApplicationViews isLoggedIn={isLoggedIn} role={userProfileRole} />
    </Router>
  );
}

export default App;
