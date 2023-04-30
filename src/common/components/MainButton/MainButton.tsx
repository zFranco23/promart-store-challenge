
import classNames from "classnames";
import type { ReactNode, MouseEventHandler } from "react";


type Props = {
    children: ReactNode,
    className?: string,
    disabled?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined,
}

const MainButton = (props : Props) => {
    
    const { children, className, disabled = false, onClick } = props;

    const innerClassName = classNames(
        'bg-orange text-white font-semibold py-4 px-10 rounded-2xl',
        'hover:bg-orangeDark transition duration-200',
        { 'opacity-50 pointer-events-none': disabled },
        className
      );

  return (
    <button
        onClick={onClick}
        disabled={disabled}
        className={innerClassName}
    >
        {children}
    </button>
  )
}

export default MainButton