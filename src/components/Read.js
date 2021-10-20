import React, { useState, useEffect } from 'react';
import firebase from '../utils/firebaseConfig';

const container = {
    height: '15px',
    lineHeight: '15px',
  //  columns: '3',
    display:'inline-block',
    width: '25%',
  }
  const list = {
    listStyle: 'none',
    float: 'left',
  }
  const names = {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      size: '16px',
      color: '#f76c6c',
  }

const Read = () => {
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
        const namesDB = firebase.database().ref('namesDB');

        namesDB.on('value', (snapshot) => {
            let previousList = snapshot.val();
            let list = [];
            for (let id in previousList){
                list.push({id, ...previousList[id]})
            }
            setNameList(list);
        })
    }, []);

    return (        
            <div>
                {nameList &&
                    nameList.map((item) => {
                    return <ul style={container}>
                       <li style={list}> <p style={names}>{item.argonaute}</p></li>
                        </ul>
                })
                }
            </div>       
    );
};

export default Read;