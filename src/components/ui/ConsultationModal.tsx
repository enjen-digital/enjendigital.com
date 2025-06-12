import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { X, Calendar, Users, ShoppingCart } from 'lucide-react';
import { saveConsultationForm } from '../../lib/forms';
import Input from '../form-inputs/Input';
import TextArea from '../form-inputs/TextArea';
import RadioGroup from '../form-inputs/RadioGroup';
import { ConsultationLead } from '../../types';

const productOptions = [
  {
    value: 'booking',
    label: 'Booking System',
    icon: Calendar,
    description: 'Online appointment scheduling and management'
  },
  {
    value: 'web-design',
    label: 'Web Design',
    icon: Users,
    description: 'Custom website development with SEO'
  },
  {
    value: 'ecommerce',
    label: 'E-Commerce',
    icon: ShoppingCart,
    description: 'Online store solutions and management'
  }
];


interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm<ConsultationLead>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      productInterest: '',
      notes: ''
    },
    mode: 'all'
  });

  if (!isOpen) return null;

  const onSubmit = async (data: ConsultationLead) => {
    setIsSubmitting(true);

    try {
      await saveConsultationForm(data);
      setSubmitStatus('success');

      // Reset form and close modal after 2 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        onClose();
        reset();
      }, 2000);

    } catch (error) {
      console.error('Error saving consultation form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl p-8 mx-4 border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Schedule Your Free Consultation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Let's discuss how we can help transform your business with our digital solutions.
            <span className="block mt-2 text-sm text-primary-600">Free consultation • No commitment required</span>
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={errors?.firstName?.message}
              rules={{
                required: 'First name is required'
              }}
            />
            
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={errors?.lastName?.message}
              rules={{
                required: 'Last name is required'
              }}
            />
          </div>

          <Input
            label="Business Email"
            name="email"
            type="email"
            register={register}
            error={errors?.email?.message}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              register={register}
              error={errors?.phone?.message}
              rules={{
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                  message: 'Invalid phone number'
                }
              }}
            />

            <Input
              label="Company Name"
              name="company"
              register={register}
              error={errors?.company?.message}
            />
          </div>

          <RadioGroup
            label="Which product are you interested in?"
            name="productInterest"
            options={productOptions}
            register={register}
            error={errors?.productInterest?.message}
            rules={{
              required: 'Product interest is required'
            }}
            value={watch('productInterest')}
            onChange={(value) => setValue('productInterest', value)}
          />

          <TextArea
            label="Tell us about your project"
            name="notes"
            rows={4}
            register={register}
            error={errors?.notes?.message}
            placeholder="Describe your business needs, goals, or any specific requirements..."
          />
          
          <div className="flex flex-col sm:flex-row gap-3">
            {submitStatus === 'success' && (
              <div className="w-full p-3 bg-green-50 border border-green-200 rounded-md text-green-800 text-sm mb-3">
                ✓ Thank you! We'll contact you within 24 hours.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="w-full p-3 bg-red-50 border border-red-200 rounded-md text-red-800 text-sm mb-3">
                ✗ Error saving request. Please try again.
              </div>
            )}
            {submitStatus !== 'success' && (
              <>
              <Button 
              type="submit" 
              size="lg"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Saving...' : 'Schedule Consultation'}
            </Button>
            <Button 
              type="button"
              variant="outline"
              size="lg"
              onClick={onClose}
              className="flex-1 sm:flex-initial"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;