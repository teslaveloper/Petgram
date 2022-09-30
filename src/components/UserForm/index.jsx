import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Input, Select, Form, PurpleSignButton } from  'components/InputFields';
import { Title2 } from './styles';

export const UserForm = ({
  handelCallBack,
  isNew = true,
  submitName,
  loading = false,
  error,
  reset
}) => {
  const { register, handleSubmit } = useForm();
  const isDisabled = loading;

  const getGenderOptions = () => (
    <>
      <option value='male'>Male</option>
      <option value='female'>Female</option>
    </>
  )

  return (
    <div className="content-form">
      {submitName && <Title2>{submitName}</Title2>}
      <Form
        props={{
          onSubmit: handleSubmit(handelCallBack),
          autoComplete:"off"
        }}
      >
        <div>
          <Input
            type='text'
            name="email"
            placeholder="Email"
            register={register}
            disabled={isDisabled}
            autoComplete="off"
            required
          />
        </div>
        <div>
          <Input
            type='password'
            name="password"
            placeholder="password"
            register={register}
            disabled={isDisabled}
            autoComplete="off"
            required
          />
        </div>
        {isNew &&
          <>
            <div>
              <Input
                type='text'
                name="first_name"
                placeholder="First Name"
                register={register}
                disabled={isDisabled}
                autoComplete="off"
                required
              />
            </div>
            <div>
              <Input
                type='text'
                name="last_name"
                placeholder="Last Name"
                register={register}
                disabled={isDisabled}
                autoComplete="off"
                required
              />
            </div>

            <div>
              <Select
                inputProps={{
                  name:'gender',
                  caption:'Select Gender',
                  disabled: isDisabled
                }}
                options={getGenderOptions()}
              />
            </div>
          </>
        }

        <div>
          <PurpleSignButton
            props={{
              type:'submit',
              disabled: isDisabled
            }}
            >{submitName}
          </PurpleSignButton>
          { isNew
            ? <Link to='/login'>Log-In</Link>
            : <Link to='/not_registered'>Sign-Up</Link>
          }
        </div>
        {error &&
          <div>
            <span>Submission error! ${error.message}</span>
            <input type='button' onClick={() => reset()} value="Dismiss" />
          </div>
        }
      </Form>
    </div>)
}