import React from "react";
import classnames from "classnames";
export enum Buttonsize {
  large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: Buttonsize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

// button 属性和原生button属性
type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
// a 属性和原生a属性
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

// Partial<> 把a和button属性设置为可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    disabled,
    className,
    size,
    children,
    href,
    ...restProps
  } = props;
  console.log(props);

  // btn , btn-lg
  const classs = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });
  console.log(classs);

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classs} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classs} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};
export default Button;
