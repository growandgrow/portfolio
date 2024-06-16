import React from 'react';
import StylesSection from './button/stylesSection';
import SizesSection from './button/sizesSection';
import ColorsSection from './button/colorsSection';
import ButtonTagsSection from './button/buttonTagsSection';

const ButtonSection = () => {
  return (
    <div className="p-4">
      <h3>Buttons</h3>
      <hr/>

      <StylesSection/>
      <SizesSection/>
      <ColorsSection/>
      <ButtonTagsSection/>
    </div>
  );
};

export default ButtonSection;
