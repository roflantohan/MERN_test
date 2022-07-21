import './App.css';
import { useQuery } from "@apollo/client";
import {GET_LOGS} from "./realm_apollo/queries"
import TableLogs from './components/TableLogs';

const App = () => {

  const {loading, error, data} = useQuery(GET_LOGS);
  
  if (loading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;
  
  return (
    <div className="App" >
        <TableLogs data={data.eulerlogs}/>
    </div>
  );
}

export default App;
