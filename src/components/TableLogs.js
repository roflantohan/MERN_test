
const TableLogs = ({data}) => {
    
  
    return (
        <table className='tableLogs'>
            <thead>
            <tr>
                {Object.keys(data[0]).map((header, i) => <th key={i}>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {data.map((log, i) => {

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
  