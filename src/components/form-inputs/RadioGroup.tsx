import { UseFormRegister, FieldValues, Path, RegisterOptions } from 'react-hook-form';
import { LucideIcon } from 'lucide-react';

interface RadioOption {
  value: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

interface RadioGroupProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  options: RadioOption[];
  register: UseFormRegister<T>;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  rules?: Omit<RegisterOptions<T>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
}

const RadioGroup = <T extends FieldValues>({
  label,
  name,
  options,
  register,
  error,
  value,
  onChange,
  rules
}: RadioGroupProps<T>) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label} {rules?.required && '*'}
      </label>
      <div className="grid grid-cols-1 gap-3">
        {options.map((option) => {
          const Icon = option.icon;
          const isSelected = value === option.value;
          
          return (
            <label
              key={option.value}
              className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                isSelected
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                type="radio"
                {...register(name, rules)}
                value={option.value}
                className="sr-only"
                onChange={(e) => onChange?.(e.target.value)}
              />
              <div className="flex items-center flex-1">
                <div className={`p-2 rounded-lg mr-4 ${
                  isSelected
                    ? 'bg-primary-100 text-primary-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.description}</div>
                </div>
              </div>
              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-primary-600 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
              )}
            </label>
          );
        })}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default RadioGroup; 