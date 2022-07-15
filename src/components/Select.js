import { useEffect, useState } from "react"

const Select = ({data, field}) => {
    const [map, setMap] = useState([])
    const [value, setValues] = useState();

    const onChange = (evt) => {
        const options = evt.target.options;
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                setValues(value)
            }
        }
    }

    useEffect(() => {
        const arr = data.map((log => log[field]))

        setMap(new Set(arr))
    }, [])

    console.log(map)
    return (
        <div>
          <select onChange={onChange}>
            {Array.isArray(Array.from(map)) ? Array.from(map).map(value => <option>{value}</option>) : null}
          </select>
        </div>
    )
}

export default Select