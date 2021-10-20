import React from "react";
import firebase from "../utils/firebaseConfig";
import Create from "./Create";
import Read from "./Read";
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
  color: 'white',
  fontWeight: 'bold',
  marginTop: '5em',
  backgroundColor: '#C1082A',
  width: '100px',
  height: '30px',
  borderRadius: '10px',
  border : '1px solid red',
  hover: {
    transform: "scale(1.3)",
    transition: ".3s ease-in-out",
  }
}
const header = {
  textAlign: 'center',
  padding: '2em',
  backgroundColor: '#f4f4f4',
}

const Main = () => {
  return (
    <main>
      <header style={header}>
        <h1 style={{fontsize: '2.5em', color: 'black', fontFamily: 'Roboto'}}>
        <img style={{maxWidth: '96px', marginRight:'10px'}} src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
           Les Argonautes</h1>
      </header>
      <h4 style={{fontFamily: 'Roboto', color: '#f76c6c', marginBottom:'4em'}}>Bonjour {firebase.auth().currentUser.displayName}</h4>
      <h2 style={{fontFamily: 'Roboto', marginBottom:'1.5em'}}>Ajouter un(e) Argonaute</h2>
      <Create />
      <h2 style={{fontFamily: 'Roboto'}}>Membres de l'équipage</h2>
      <Read />
      <button style={button} onClick={() => firebase.auth().signOut()}>Déconnecter</button>
      <div style={footer}>
      <p style={baseline}>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </div>

    </main>
  );
};

export default Main;
