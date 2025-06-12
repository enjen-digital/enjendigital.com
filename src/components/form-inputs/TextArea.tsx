import React from 'react';
import { UseFormRegister, FieldValues, Path, RegisterOptions } from 'react-hook-form';

interface TextAreaProps<T extends FieldValues> extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  required?: boolean;
  rules?: RegisterOptions<T, Path<T>>;
}

const TextArea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  required = false,
  className = '',
  rules,
  ...props
}: TextAreaProps<T>) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && '*'}
      </label>
      <textarea
        id={name}
        {...register(name, { required, ...rules })}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default TextArea; 