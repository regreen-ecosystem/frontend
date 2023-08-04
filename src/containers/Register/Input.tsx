import React from 'react';

interface IProps {
  name: string;
  type: string;
}

export const Input: React.FC<IProps> = ({name, type}): JSX.Element => {
  return (
    <input
      type={type}
      id={name}
      className='border-[1px]  w-full rounded border-[#c4c4c4] px-[14px] py-[9px] hover:border-black focus:outline-main'
    />
  );
};
