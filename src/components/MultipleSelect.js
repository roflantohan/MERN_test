import { useState } from "react"

const MultipleSelect = () => {
    const [values, setValues] = useState([]);

    const onChange = (evt) => {
        const options = evt.target.options;
        const value = values;
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                if(!values.includes(options[i].value)){
                    value.push(options[i].value);
                }else{
                    const indx = value.indexOf(options[i].value)
                    value.splice(indx, 1)
                }
            }
        }
        console.log(value)
        setValues(value)
    }

    console.log(values)

    return (
        <div>
          <select multiple={true} setvalues={values} onChange={onChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
    )
}

export default MultipleSelect