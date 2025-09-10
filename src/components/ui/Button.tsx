import classNames from 'classnames'

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const buttonVariants = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
  outline:
    'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500',
  ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
}

export const Button = ({
  children,
  size = 'md',
  variant = 'primary',
  className,
  ...rest
}: ButtonProps) => {
  const buttonClasses = classNames(
    'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
    buttonSizes[size],
    buttonVariants[variant],
    className,
  )

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}
