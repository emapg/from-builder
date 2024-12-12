export type FieldType = 
  | 'text' 
  | 'email' 
  | 'phone' 
  | 'textarea' 
  | 'select' 
  | 'checkbox' 
  | 'radio' 
  | 'date' 
  | 'file' 
  | 'signature'
  | 'number'
  | 'password'
  | 'url';

export interface ValidationRule {
  type: 'required' | 'email' | 'phone' | 'min' | 'max' | 'pattern' | 'fileType' | 'fileSize';
  value?: string | number;
  message: string;
}

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: ValidationRule[];
  conditionalLogic?: {
    dependsOn: string;
    showIf: string | boolean;
  };
  page?: number;
}

export interface FormTheme {
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: string;
  fontFamily: string;
  buttonStyle: 'solid' | 'outline' | 'gradient';
  animation: 'none' | 'fade' | 'slide' | 'bounce';
}

export interface FormTemplate {
  id: string;
  name: string;
  description: string;
  fields: FormField[];
  theme: FormTheme;
}