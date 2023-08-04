import React from 'react';
import { Logo } from './Logo';
import { Input } from './Input';
import './Register.module.css'

export const Register: React.FC = () => {
  return (
    <div id='register' className='flex justify-center items-center h-screen'>
      <section className='flex-1 border-r-4 border-green-900'>
        <section className='flex flex-col flex-1 ml-32 gap-4 w-1/2 '>
          <div>
            <h1 className='text-3xl font-[500]'>Create your account</h1>
            <p>Enter your details to create account with us</p>
          </div>
          <label htmlFor='name'>
            Name
            <Input type='text' name='name' />
          </label>
          <label htmlFor='CompanyName'>
            Company Name
            <Input type='text' name='CompanyName' />
          </label>
          <label htmlFor='email'>
            Email
            <Input type='email' name='email' />
          </label>
          <label htmlFor='password'>
            Password
            <Input type='password' name='password' />
          </label>
          <label htmlFor='ConfirmPassword'>
            Confirm Password
            <Input type='password' name='ConfirmPassword' />
          </label>
          <label htmlFor='terms'>
            <input
              type='checkbox'
              name='terms'
              value=''
              id=''
              className='mr-1 accent-main'
            />
            <div className='inline-block'>
              I agree to the 
              <a className='underline text-main pl-2' href=''>
                Terms & conditions
              </a>
            </div>
          </label>
          <button className='bg-main text-white px-[14px] py-[9px] rounded-md hover:bg-dark hover:shadow-md'>
            Create my account
          </button>
          <p className='text-center'>
            Already have an account?{' '}
            <a className='underline text-main ' href='/login'>
              Sign in
            </a>
          </p>
        </section>
      </section>
      <section className='flex-1 flex items-center justify-center'>
        <Logo />
      </section>
    </div>
  );
};
