import React, { useState, useEffect} from "react";
import "../Styling/DropDown.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; 
import "primereact/resources/primereact.min.css"; 

import {
  DefaultNationOptions,
} from "./Nations";

import { MultiSelect } from "primereact/multiselect";

interface NationDropDownProps {
  onChange: (nations: string[]) => void;
}

const NationDropDown: React.FC<NationDropDownProps> = ({ onChange }) => {
  const allOptionValues = DefaultNationOptions.map(option => option.value);

  const [nations, setNations] = useState<string[]>(allOptionValues);

  useEffect(() => {
    onChange(nations);
  }, [nations, onChange]);

  return (
    <div className="flex justify-content-center">
      <MultiSelect
        value={nations}
        onChange={(e) => setNations(e.value)}
        options={DefaultNationOptions}
        optionLabel="label"
        maxSelectedLabels={0}
        placeholder="Select Nations"
        className="w-full md:w-20rem"
        selectedItemsLabel="{0} nations"
        selectAllLabel='All'
      />
    </div>
  );
};
export default NationDropDown;
