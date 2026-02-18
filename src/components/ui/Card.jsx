export default function Card({ 
  children, 
  className = '',
  padding = true,
  hover = false,
  ...props 
}) {
  const baseStyles = 'bg-white rounded-xl shadow-md'
  const paddingStyles = padding ? 'p-6' : ''
  const hoverStyles = hover ? 'hover:shadow-xl transition-shadow duration-300' : ''

  return (
    <div
      className={`${baseStyles} ${paddingStyles} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
