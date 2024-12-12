import { FormTheme } from '../types/form';

export const defaultTheme: FormTheme = {
  primaryColor: '#3b82f6',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  borderRadius: '0.5rem',
  fontFamily: 'Inter, system-ui, sans-serif',
  buttonStyle: 'solid',
  animation: 'fade',
};

export const defaultValidationMessages = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  fileSize: 'File size must be less than {value}MB',
  fileType: 'File type must be {value}',
};