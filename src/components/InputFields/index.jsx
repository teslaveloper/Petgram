import React from "react";
import { STLInput, STLForm, STLSelect, STLButton } from './styles';

// The following component is an example of your existing Input Component
export const Input = (props) => {
  const {label, name, register, required} = props;

  return (
    <>
    {label && <label>{label} </label> }
    <STLInput
      {...props}
      {...register(name, required)}
    />
  </>
  )
};

export const Input2 = ({props}) => {
  const {label, name, register, required} = props;

  return (
    <>
    {label && <label>{label} </label> }
    <STLInput
      {...props}
      {...register(name, required)}
    />
  </>
  )
};

export const Form = ({props, children}) => (
  <STLForm {...props}>
    {children}
  </STLForm>
)

export const PurpleSignButton = ({props, children}) => (
  <STLButton  {...props}>
    {children}
  </STLButton>
)

// you can use React.forwardRef to pass the ref too
export const Select = React.forwardRef(({inputProps, options}, ref) => (
  //  name={name} onChange={onChange} onBlur={onBlur}
  <>
    {inputProps.label && <label>{inputProps.label} </label> }
    <STLSelect ref={ref} {...inputProps}>
      {inputProps.caption &&
        <option value={null}> {inputProps.caption} </option>
      }
      {options}
    </STLSelect>
  </>
));
