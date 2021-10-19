import React from "react";
import firebase from "../utils/firebaseConfig";

const Main = () => {
  return (
    <main>
      <nav>
        <h1>Argonautes</h1>
        <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
        <div onClick={() => firebase.auth().signOut()}>Se déconnecter</div>
      </nav>
      {/* app component */}
    </main>
  );
};

export default Main;
