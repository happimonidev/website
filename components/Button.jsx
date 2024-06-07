import clsx from "clsx";

const Button = ({ onClick, disabled, className, children }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        `flex
          gap-2
          justify-center
          item-center
          w-full
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:bg-primary
          transition
          border-primary
          bg-primary
          text-white
          px-4
          py-3
          text-base
        `,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
