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
  
  console.log(data.eulerlogs)
  return (
    <div className="App" >
        <TableLogs data={data.eulerlogs}/>
    </div>
  );
}

export default App;
