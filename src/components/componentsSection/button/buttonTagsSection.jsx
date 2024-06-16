import React from 'react';
import Button from '../../common/Button';

const ButtonTagsSection = () => {

  const Tags = [
    {
      type: 'button',
      value: 'Button'
    },
    {
      type: 'input',
      value: 'Input'
    },
    {
      type: 'submit',
      value: 'Submit'
    },
    {
      type: 'reset',
      value: 'Reset'
    }
  ];
  return (
    <div className="mt-5">
      <h6 className="section-secondary-title">Colors :</h6>
      <div>
        {
          Tags.map((item,index) =>
            <Button
              key={index}
              buttonColor="primary"
              buttonStyle="default"
              buttonType={item.type}
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

export default ButtonTagsSection;
