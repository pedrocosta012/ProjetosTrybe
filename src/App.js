import React from 'react';
import './App.css';
import NameFilter from './components/NameFilter';
import Table from './components/Table';
import DeepDataFilter from './components/DeepDataFilter';
import AvailableFilter from './components/AvailableFilter';

function App() {
  return (
    <div>
      <NameFilter />
      <DeepDataFilter />
      <AvailableFilter />
      <Table />
    </div>
  );
}

export default App;
