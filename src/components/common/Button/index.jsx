import React, { useMemo } from 'react';
import classNames from 'classnames';

const Button = ({
  buttonStyle,
  buttonSize,
  buttonColor,
  buttonType,
  leftIcon,
  children,
  className
}) => {

  const buttonTheme = useMemo(() => {
    const themeClasses = [];
    if ( buttonStyle === 'rounded' ) {
      themeClasses.push('btn-primary btn-rounded');
    }
    switch ( buttonColor ) {
      case 'primary':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-primary');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-primary');
        }
        break;

      case 'secondary':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-secondary');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-secondary');
        }
        break;

      case 'success':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-success');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-success');
        }
        break;

      case 'danger':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-danger');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-danger');
        }
        break;

      case 'warning':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-warning');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-warning');
        }
        break;

      case 'info':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-info');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-info');
        }
        break;

      case 'light':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-light');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-light');
        }
        break;

      case 'dark':
        if ( buttonStyle === 'default' ) {
          themeClasses.push('btn-dark');
        } else if ( buttonStyle === 'outline' ) {
          themeClasses.push('btn-outline-dark');
        }
        break;
    }

    return themeClasses;
  }, [buttonColor, buttonStyle]);

  const sizeSelect = useMemo(() => {
    const sizeClasses = [];
    switch ( buttonSize ) {
      case 'large':
        sizeClasses.push('btn-lg');
        break;
      case 'small':
        sizeClasses.push('btn-sm');
        break;
      case 'w-sm':
        sizeClasses.push('w-sm');
        break;
      case 'w-md':
        sizeClasses.push('w-md');
        break;
      case 'w-lg':
        sizeClasses.push('w-lg');
        break;
    }

    return sizeClasses;
  }, [buttonSize]);

  return (
    <button
      type={buttonType}
      className={classNames(
        'btn',
        buttonTheme,
        sizeSelect,
        className
      )}
    >
      {
        !!leftIcon && <div className="flex-center">
          {leftIcon}
        </div>
      }
      {children}
    </button>
  );
};

export default Button;
