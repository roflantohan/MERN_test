import { useEffect, useState } from "react"

const Select = ({data, field, handler}) => {
    const [map, setMap] = useState([])

    const onChange = (evt) => {
        const options = evt.target.options;
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                handler(field, options[i].value)
            }
        }
    }

    useEffect(() => {
        const arr = data.map((log => log[field]))
        if(arr[0] && Array.isArray(arr[0])){
            const newArr = [].concat(...arr);
            setMap(new Set(newArr))
        }else{
            setMap(new Set(arr))
        }
    }, [])

    return (
        <div>
          <select onChange={onChange}>
            <option>All</option>
            {Array.isArray(Array.from(map)) ? Array.from(map).map((value, i) => <option key={i} >{value}</option>) : null}
          </select>
        </div>
    )
}

export default Select