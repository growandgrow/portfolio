import React from 'react';
import Button from '../../common/Button';

const ColorsSection = () => {

  const Colors = [
    {
      buttonColor: 'primary',
      value: 'Primary'
    },
    {
      buttonColor: 'secondary',
      value: 'Secondary'
    },
    {
      buttonColor: 'success',
      value: 'Success'
    },
    {
      buttonColor: 'danger',
      value: 'Danger'
    },
    {
      buttonColor: 'warning',
      value: 'Warning'
    },
    {
      buttonColor: 'info',
      value: 'Info'
    },
    {
      buttonColor: 'light',
      value: 'Light'
    },
    {
      buttonColor: 'dark',
      value: 'Dark'
    }
  ];

  return (

    <div className="mt-5">
      <h6 className="section-secondary-title">Colors :</h6>
      <div>
        {
          Colors.map((item, index) =>
            <Button
              key={index}
              buttonColor={item.buttonColor}
              buttonStyle="default"
              buttonType="button"
              className="mr-2"
            >
              {item.value}
            </Button>
          )
        }
      </div>
    </div>

  );
};

export default ColorsSection;
