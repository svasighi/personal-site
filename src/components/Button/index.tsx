import classNames from "classnames";
import styles from "./Button.module.scss";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  /** Defines if the button is disabled */
  disabled?: boolean;
  /** The style of the button */
  layout?: "normal" | "rounded";
  /** The element that should be rendered as a button */
  tag?: "button" | "a";
  /** The native HTML button type */
  type?: "button" | "submit" | "reset";
  /** enable the loading state of the button */
  loading?: boolean;
  /** using href only on a type */
  href?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    tag = "button",
    disabled = false,
    layout = "normal",
    className,
    children,
    href,
    ...other
  } = props;

  const classes = classNames(
    styles.button,
    styles[layout],
    {
      [styles.active]: !disabled,
      [styles.disabled]: disabled,
    },
    className,
  );

  return React.createElement(
    tag,
    {
      className: classes,
      disabled: disabled,
      href: tag == "a" && !disabled ? href : undefined,
      ...other,
    },
    children,
  );
};

export default Button;
