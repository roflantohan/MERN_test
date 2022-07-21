import { useState, useEffect } from "react";
import Select from "./Select";

const TableLogs = ({data}) => {
    const [tableData, setTableData] = useState(Array.isArray(data) ? data : [])
    const [filter, setFilter] = useState({});

    const formatTableData = () => {
        let newData = [];
        if(filter){
          const keys = Object.keys(filter);
          const value = Object.values(filter)
    
          data.forEach(elem => {
            let flag = true;
            for(let i = 0; i < keys.length; i++){
              if(value[i] !== "All"){
                const valueElem = elem[keys[i]];
                if(Number.isNaN(valueElem) && !valueElem.includes(value[i])) flag = false
                else if(valueElem != value[i]) flag = false
              }
            }
            if(flag) newData.push(elem)
          })

          setTableData(newData)
        }else{
            setTableData(data)
        }
    
        
    }

    const arr = [];

    
    const filterHandler = (field, value) => {
        const obj = filter
        obj[`${field}`] = value;
        setFilter(Object.assign({}, obj))
    }


    useEffect(() => {
        
        formatTableData()
    }, [filter])
    
    

    return (
        <table className='tableLogs'>
            <thead>
            <tr>
                {Array.isArray(data) && data.length ? Object.keys(data[0]).map((header, i) => <th key={i}><p>{header}</p><Select data={data} field={header} handler={filterHandler}/></th>) : null}
            </tr>
            </thead>
            <tbody>
            {tableData.map((log, i) => {

                const values = Object.values(log)

                return <tr key={i}>
                    { values.map((value, j) => <td key={i+j}>{value}</td>) }
                </tr>
                
            })}
            </tbody>
        </table>
    );
  }
  
  export default TableLogs;
  