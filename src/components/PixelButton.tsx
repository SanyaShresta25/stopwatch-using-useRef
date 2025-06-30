import React from 'react';

type PixelButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
};

const PixelButton = ({
  onClick,
  children,
  variant = 'primary',
  disabled = false,
}: PixelButtonProps) => {
  const baseClasses =
    'px-4 py-2 sm:px-8 sm:py-4 font-bold text-sm sm:text-lg rounded-lg border-2 sm:border-4 transition-all duration-150 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-gradient-to-br from-green-400 to-green-600 border-green-700 text-white hover:from-green-500 hover:to-green-700 shadow-lg',
    secondary:
      'bg-gradient-to-br from-yellow-400 to-orange-500 border-orange-600 text-white hover:from-yellow-500 hover:to-orange-600 shadow-lg',
    danger:
      'bg-gradient-to-br from-pink-400 to-red-500 border-red-600 text-white hover:from-pink-500 hover:to-red-600 shadow-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};

export default PixelButton;
