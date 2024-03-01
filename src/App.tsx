import React, { useState } from 'react';
import './App.css';
import List from './components/Lists';
import AddToList from './components/AddToLists';

//define interface for the elements in the array and its properties
export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 36,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNYTeJMPyneKPa7vsAQuqw_A4YLQHaT1wWQ&usqp=CAU",
      note: "G.O.A.T 🐐🐐🐐🐐🐐🐐",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHeQjgbZrnBCgy1JnTAd6kAs-D6vv8MWV7A&usqp=CAU",
      note: "Mamba Forever"
    }
  ])

  return (
    <div className="App">
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;