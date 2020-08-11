import React, { useReducer } from 'react';
import './App.css';
import { initialState, reducer } from './Reducers'
import Fetch from './Fetch'
import { DataContext } from './Context'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <DataContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Fetch />
      </DataContext.Provider>
    </div>
  );
}

export default App;
