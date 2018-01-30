import classnames from 'classnames';
import React from 'react';
import {
  Button,
  Input,
  InputGroup
} from 'reactstrap';
import MDIcon from './md-icon';

const SearchInput = ({ className, inputClassName, children, onClear, onSearch, value, ...otherProps }) => {
  const actualOnClear = () => {
    if (onClear) onClear();
    else {
      if (!otherProps.onChange) return;
      // HACK(mgnb): not a real target or anything
      otherProps.onChange({ target: { value: '' }});
    }
  };

  return (
    <InputGroup className={className}>
      <Input
        className={inputClassName}
        value={value}
        {...otherProps}
      />

      <div className='input-group-append'>
        {!!value &&
          <Button
            color='secondary'
            onClick={actualOnClear}
            outline
          >
            <MDIcon
              className='align-bottom'
              size={18}
              name='close'
            />
          </Button>
        }

        <Button
          color='secondary'
          onClick={onSearch}
          outline
        >
          <MDIcon
            className='align-bottom'
            size={18}
            name='search'
          />
        </Button>
      </div>
    </InputGroup>
  );
}

export default SearchInput;
