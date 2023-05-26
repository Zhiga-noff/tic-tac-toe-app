import {CellField} from "../Stateless/CellField";
import {useState} from "react";


export const ClickInField = ({typeField, setTypeField})=>{
    const [type, setType] = useState('')

    return (
        <CellField type={type} setType={setType} typeField={typeField} setTypeField={setTypeField}/>
    )

}
