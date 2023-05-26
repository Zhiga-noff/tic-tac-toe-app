import { CellField } from './Stateless/CellField';
import {ClickInField} from "./Stateful/ClickInField";

export const StructuralComponent = ({typeField, setTypeField}) => {
  return (
    <>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>
      <ClickInField typeField={typeField} setTypeField={setTypeField}/>

    </>
  );
};
