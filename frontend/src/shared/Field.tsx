import React, { ReactNode, ChangeEvent } from 'react';

type FieldProps = {
  label: string;
  inputType: string;
  value: string;
  onChange: (value: string) => void;
  children?: ReactNode;
};

const Field: React.FC<FieldProps> = ({ label, inputType, value, onChange, children }) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="h-14 rounded-tl rounded-tr flex-col justify-start items-start inline-flex w-full">
      <div className="self-stretch h-14 rounded border border-zinc-500 flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch pl-4 py-2 rounded-tl rounded-tr justify-start items-center inline-flex">
          <div className="grow shrink basis-0 h-10 flex-col justify-center items-start inline-flex">
            <div className="justify-start items-center inline-flex">
              <div className="text-zinc-900 text-base font-normal font-['Roboto'] leading-normal tracking-wide">
                {label}
              </div>
            </div>
            <div className="px-1 left-[-4px] top-[-16px] absolute bg-fuchsia-50 justify-start items-center inline-flex">
              <div className="text-zinc-700 text-xs font-normal font-['Roboto'] leading-none">
                {label}
              </div>
            </div>
          </div>
        </div>
        <input
          type={inputType}
          className="your-input-styles"
          value={value}
          onChange={handleInputChange}
        />
        {children}
      </div>
    </div>
  );
}

export default Field;
