import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode; // Make children optional
};

const ActionButtonTransparentPurple: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full h-14 bg-purple-50 rounded-full flex-col justify-center items-center gap-2 inline-flex">
      <div className="self-stretch grow shrink basis-0 px-6 py-2.5 justify-center items-center gap-2 inline-flex">
        <div className="text-center text-white text-sm font-medium font-['Roboto'] leading-tight tracking-tight">Create an account</div>
        {children}
      </div>
    </div>
  );
};

export default ActionButtonTransparentPurple;
