// ActionButtonTransparentBlack.tsx
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ActionButtonTransparentBlack: React.FC<Props> = ({ children }) => {
  return (
    <button
      className="flex flex-row justify-center gap-2 align-middle rounded-full bg-white border-solid border-2 border-black text-black px-10 py-2 hover:bg-black hover:text-white"
    >
      {children}
    </button>
  );
};

export default ActionButtonTransparentBlack;
