import React, { useState, useEffect, ChangeEvent } from "react";
//import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components, DropdownIndicatorProps } from "react-select";
//import { ColourOption, colourOptions } from '../data';
import {
  EventNationOption,
  EventNationOptions,
  DefaultNationOptions,
} from "./Nations";

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
    <Select
      closeMenuOnSelect={false}
      components={{ DropdownIndicator }}
      defaultValue={DefaultNationOptions}
      isMulti
      onChange={(selectedOptions) => {
        if (selectedOptions) {
          setNations(selectedOptions.map((option) => option.value));
        }
      }}
      options={EventNationOptions}
    />
  );
};

export default NationDropDown;
