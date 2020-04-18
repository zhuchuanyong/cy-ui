import React from "react";
import classnames from "classnames";

//  按钮大小
export type ButtonSize = "lg" | "sm";
// 按钮类型
export type ButtonType = "primary" | "default" | "danger" | "link";

// 定义按钮属性
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}

//! 将自定义属性和原生html属性合并
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
  // console.log(props);

  // btn , btn-lg
  const classs = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  // console.log(classs);

  if (btnType === "link" && href) {
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
  btnType: "default",
};
export default Button;
