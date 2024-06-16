import React from 'react';
import Button from '../../common/Button';

const SizesSection = () => {
  const sizes = [
    {
      buttonColor: 'primary',
      buttonSize: 'large',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'Large'
    },
    {
      buttonColor: 'primary',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'Regular'
    },
    {
      buttonColor: 'primary',
      buttonSize: 'small',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'Small'
    },
    {
      buttonColor: 'primary',
      buttonSize: 'w-sm',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'w-sm'
    },
    {
      buttonColor: 'primary',
      buttonSize: 'w-md',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'w-md'
    },
    {
      buttonColor: 'primary',
      buttonSize: 'w-lg',
      buttonStyle: 'default',
      buttonType: 'button',
      value: 'w-lg'
    }
  ];

  return (
    <div className="mt-5">
      <h6 className="section-secondary-title">Sizes :</h6>
      <div>
        {
          sizes.map((item, index) => {
            return (
              <Button
                key={index}
                buttonColor={item.buttonColor}
                buttonStyle={item.buttonStyle}
                buttonType={item.buttonType}
                buttonSize={item.buttonSize}
                className="mr-2"
              >
                {item.value}
              </Button>
            );
          })
        }
      </div>
    </div>
  );
};

export default SizesSection;
