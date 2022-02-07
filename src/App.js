import React, { useState } from 'react';

function App() {
  const [additem, setadditem] = useState("");
  const [arritem, setarritem] = useState([])
  const add = (e) => {
    const val = e.target.value;
    setadditem(val)
  }
  const submitItem = () => {
    setarritem((prev) => [...prev, additem])
    document.getElementById("txt").innerHTML = " ";

  }
  const delItems = (ind) => {
    // console.log("deleted");
    // arritem.splice(ind, 1)
    // submitItem();
    // console.log(arritem);
    // console.log(ind);
    setarritem((prev) => { return prev.filter((value, index) => { return index !== ind }) })
  }
  return (
    <>
      <div className="header"><h1>ToDO List</h1></div>
      <div className="container">
        <div className="main">
          <input type="text" id="txt" onChange={add} placeholder="Add a Item" />
          <button className="add" onClick={submitItem}>+</button>

        </div>

        <ol>

          {arritem.map((val, ind) => {
            return (<p key={ind} id={ind}><button className="sub" onClick={() => delItems(ind)}>x</button>{val}</p>)
          })}
        </ol>
      </div>
    </>
  );
}

export default App;
