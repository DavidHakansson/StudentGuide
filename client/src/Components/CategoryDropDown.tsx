
import React, { useState, useEffect, ChangeEvent } from 'react';
//import EmojiIcon from '@atlaskit/icon/glyph/emoji';
import Select, { components, DropdownIndicatorProps } from 'react-select';
//import { ColourOption, colourOptions } from '../data';
import { EventCategoryOption, EventCategoryOptions, DefaultCategoryOptions } from './Types';

interface CategoryDropDownProps {
  onChange: (categories: string[]) => void;
}



const DropdownIndicator = (
  props: DropdownIndicatorProps<EventCategoryOption, true>
) => {
  return (
    <components.DropdownIndicator {...props}>
      
    </components.DropdownIndicator>
  );
};

const CategoryDropDown : React.FC<CategoryDropDownProps> = ({ onChange }) => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    onChange(categories);
  }, [categories, onChange]);

  return(
    <Select
      closeMenuOnSelect={false}
      components={{ DropdownIndicator }}
      defaultValue={DefaultCategoryOptions}
      isMulti
      onChange={(selectedOptions) => {
        if (selectedOptions) {
          setCategories(selectedOptions.map(option => option.value));
        }
      }}
      options={EventCategoryOptions}
    />
  )
}


export default CategoryDropDown;