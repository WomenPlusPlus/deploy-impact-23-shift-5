// ActionButtonTransparentMagenta.tsx
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ActionButtonTransparentMagenta: React.FC<Props> = ({ children }) => {
  return (
    <button
      className="rounded-full bg-white border-solid border-2 border-magenta-40 text-magenta-40 px-10 py-2 hover:bg-magenta-40 hover:text-white"
    >
      {children}
    </button>
  );
};

export default ActionButtonTransparentMagenta;
