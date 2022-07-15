import './App.css';
import { useQuery } from "@apollo/client";
import {GET_LOGS} from "./realm_apollo/queries"
import TableLogs from './components/TableLogs';
import Select from './components/Select';
import MultipleSelect from './components/MultipleSelect';
import { useState } from 'react';

const App = () => {


  const {loading, error, data} = useQuery(GET_LOGS);
  
  if (loading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;
  
  

  return (
    <div className="App">
      <div>
      <Select data={data.eulerlogs} field={"sourceId"}/>
      <Select data={data.eulerlogs} field={"logName"}/>
      <Select data={data.eulerlogs} field={"logSeverity"}/>
        <Select data={data.eulerlogs} field={"sourceId"}/>
        <button>Search</button>
      </div>


      <TableLogs data={data.eulerlogs}/>



    </div>
  );
}

export default App;
