import React from 'react';
import Button from '../../common/Button';

const Styles = [
  {
    buttonStyle: 'default',
    value: 'Default'
  },
  {
    buttonStyle: 'outline',
    value: 'outline'
  },
  {
    buttonStyle: 'rounded',
    value: 'Rounded'
  },
  {
    buttonStyle: 'default',
    value: 'With Icon',
    icon: <i className="ti-thumb-up pr-1"/>
  },
  {
    buttonStyle: 'default',
    icon: <i className="ti-heart"/>
  }
];


const StylesSection = () => {
  return (
    <div>
      <h6 className="section-secondary-title">Styles :</h6>
      {
        Styles.map((item, index) =>
          <Button
            key={index}
            buttonColor={"primary"}
            buttonType={"button"}
            buttonStyle={item.buttonStyle}
            className={"mr-2"}
          >
            {item.icon}
            {item.value}
          </Button>
        )}
    </div>
  );
};

export default StylesSection;
