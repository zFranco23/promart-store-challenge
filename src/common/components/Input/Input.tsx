import classNames from 'classnames'
import type { FieldErrors, UseFormRegisterReturn } from 'react-hook-form'

type props = {
  name: string
  label: string
  formRef: UseFormRegisterReturn
  placeholder?: string
  type?: string
  errors?: FieldErrors
  className?: string
  disabled?: boolean
}

function Input(props: props) {
  const {
    name,
    label,
    formRef,
    placeholder = '',
    type = 'text',
    errors,
    className,
    disabled = false,
  } = props

  const innerClassName = classNames(
    'focus:outline-none focus:shadow-none focus:border-orange',
    'block w-full py-3 px-4 border border-2 border-neutral40',
    'rounded-lg text-gray-900 placeholder-gray-500',
    'transition duration-300',
    { 'border-error ocus:border-error': errors?.[name] },
    className,
  )

  return (
    <div className='mb-4 flex-col'>
      <label htmlFor={name} className='text-xl font-semibold text-neutral60 mb-8'>
        {label}
      </label>
      <input
        disabled={disabled}
        type={type}
        id={name}
        className={innerClassName}
        placeholder={placeholder}
        {...formRef}
      />
      {errors?.[name] && (
        <p className='text-red-500 mt-1 text-error text-xl font-bold'>
          <>{errors[name]?.message}</>
        </p>
      )}
    </div>
  )
}

export default Input
