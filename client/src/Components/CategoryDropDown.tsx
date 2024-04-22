
import React, { useState, useEffect} from 'react';
import {DefaultCategoryOptions, AllCategoryOptions } from './Types';
import "../Styling/DropDown.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"; // Assuming Bootstrap 4 theme for PrimeReact
import "primereact/resources/primereact.min.css"; // Core CSS

import { MultiSelect } from "primereact/multiselect";

interface CategoryDropDownProps {
  onChange: (categories: string[]) => void;
}
const CategoryDropDown : React.FC<CategoryDropDownProps> = ({ onChange }) => {
  const allOptionValues = DefaultCategoryOptions.map(option => option.value);

  const [categories, setCategories] = useState<string[]>(allOptionValues);


  useEffect(() => {
    onChange(categories);
  }, [categories, onChange]);

  return(
    <div className="flex justify-content-center">
      <MultiSelect
        value={categories}
        onChange={(e) => setCategories(e.value)}
        options={AllCategoryOptions}
        optionLabel="label"
        maxSelectedLabels={0}
        placeholder="Select categories"
        className="w-full md:w-20rem"
        selectedItemsLabel="{0} categories"
        selectAllLabel='All'
      />
    </div>
  )
}
export default CategoryDropDown;
