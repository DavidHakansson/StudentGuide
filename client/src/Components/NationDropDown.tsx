import React, { useState, useEffect, ChangeEvent } from "react";
//import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components, DropdownIndicatorProps } from "react-select";
//import { ColourOption, colourOptions } from '../data';
import "../Styling/NationDropDown.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; // Assuming Bootstrap 4 theme for PrimeReact
import "primereact/resources/primereact.min.css"; // Core CSS

import {
  EventNationOption,
  EventNationOptions,
  DefaultNationOptions,
} from "./Nations";

import { MultiSelect } from "primereact/multiselect";

interface NationDropDownProps {
  onChange: (nations: string[]) => void;
}

const DropdownIndicator = (
  props: DropdownIndicatorProps<EventNationOption, true>
) => {
  return (
    <components.DropdownIndicator {...props}></components.DropdownIndicator>
  );
};

const NationDropDown: React.FC<NationDropDownProps> = ({ onChange }) => {
  const [nations, setNations] = useState<string[]>([]);

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
        maxSelectedLabels={3}
        placeholder="Select Nations"
        className="w-full md:w-20rem"
        selectedItemsLabel="{0} nations selected"
      />
    </div>
  );
};
export default NationDropDown;
