import React from "react";
import firebase from "../utils/firebaseConfig";
//import "/style.css";

const footer = {
  height: '50px',
  backgroundColor: '#f76c6c',
}
const baseline = {
  color: 'white',
  fontFamily: 'Roboto',
  lineHeight:'50px',
  marginTop: '2em',

}
const button = {
  color: 'green'
}

const Main = () => {
  return (
    <main>
      <nav>
        <h1 style={{fontsize: '2.5em', color: 'red', fontFamily: 'Roboto'}}> Les Argonautes</h1>
        <h4>Bonjour {firebase.auth().currentUser.displayName}</h4>
      </nav>
      <button style={button} onClick={() => firebase.auth().signOut()}>Déconnecter</button>
      {/* app component */}
      <div style={footer}>
      <p style={baseline}>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </div>

    </main>
  );
};

export default Main;
