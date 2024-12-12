import { useMemo } from 'react';
import { FieldType } from '../types/form';

export function useFormAnimation(fieldType: FieldType) {
  const animationClass = useMemo(() => {
    switch (fieldType) {
      case 'signature':
        return 'animate-fade-in';
      case 'file':
        return 'animate-slide-in';
      default:
        return 'animate-fade-in';
    }
  }, [fieldType]);

  return { animationClass };
}