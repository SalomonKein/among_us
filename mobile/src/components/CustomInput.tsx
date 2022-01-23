import React from 'react';
import {View} from 'react-native';

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CustomInput({
  name,
  type,
  onChange,
  onBlur,
  value,
  touched,
  errors,
}: {
  name: string;
  type: string;
  onChange: any;
  onBlur: any;
  value: string;
  touched: boolean | undefined;
  errors: string | undefined;
}) {    
  return (
    <View>
      <p>
          {(name==='confirmPassword')?
        <label htmlFor={name}>{'Confirm password'}</label>
        :
        <label htmlFor={name}>{capitalizeFirstLetter(name)}</label>}
        <br />
        {(type!=='textarea')?
        <input
          style={{width: '100%'}}
          type={type}
          name={name}
          placeholder={capitalizeFirstLetter(name)}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />:
        <textarea
          style={{width: '100%', resize: 'none'}}          
          name={name}
          placeholder={capitalizeFirstLetter(name)}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
        }
      </p> 
      {touched && errors && <p style={{color: 'red', margin: '0'}}>{errors}</p>}
    </View>
  );
}
