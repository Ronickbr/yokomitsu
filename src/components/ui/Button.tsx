import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { 
      className = "", 
      variant = "primary", 
      size = "md", 
      isLoading = false, 
      children, 
      disabled, 
      ...props 
    }, 
    ref
  ) => {
    
    const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-brand-primary text-white hover:bg-brand-secondary shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 focus:ring-brand-primary",
      secondary: "bg-brand-secondary text-white hover:bg-brand-primary focus:ring-brand-secondary",
      outline: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus:ring-brand-primary",
      ghost: "bg-transparent text-brand-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-200",
    };
    
    const sizes = {
      sm: "py-2 px-4 text-sm",
      md: "py-3 px-6 text-base",
      lg: "py-4 px-8 text-lg",
      icon: "p-3",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
