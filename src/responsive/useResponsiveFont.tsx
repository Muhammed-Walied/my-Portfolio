import { useResponsiveStack } from './useResponsiveStack'; // Adjust the import path as necessary

interface FontStyles {
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
}

const defaultLetterSpacing = '-2%';

export function useResponsiveFont() {
  const { isSmallDown, isMediumDown } = useResponsiveStack();

  const getFontStyle = (type: 'H1' | 'H2' | 'H3' | 'Subtitle' | 'Body1' | 'Body2' | 'Body3'): FontStyles => {
    switch (type) {
      case 'H1':
        return {
          fontSize: isSmallDown ? '36px' : isMediumDown ? '48px' : '60px',
          lineHeight: isSmallDown ? '40px' : isMediumDown ? '48px' : '72px',
          letterSpacing: defaultLetterSpacing,
        };
      case 'H2':
        return {
          fontSize: isSmallDown || isMediumDown ? '18px' : '36px',
          lineHeight: isSmallDown || isMediumDown ? '28px' : '40px',
          letterSpacing: defaultLetterSpacing,
        };
      case 'H3':
        return {
          fontSize: isSmallDown || isMediumDown ? '24px' : '30px',
          lineHeight: isSmallDown || isMediumDown ? '28px' : '36px',
          letterSpacing: defaultLetterSpacing,
        };
      case 'Subtitle':
        return {
          fontSize: isSmallDown || isMediumDown ? '18px' : '20px',
          lineHeight: '28px',
        };
      case 'Body1':
        return {
          fontSize: isSmallDown || isMediumDown ? '16px' : '18px',
          lineHeight: isSmallDown || isMediumDown ? '24px' : '28px',
        };
      case 'Body2':
        return {
          fontSize: '16px',
          lineHeight: '24px',
        };
      case 'Body3':
        return {
          fontSize: '14px',
          lineHeight: '20px',
        };
      default:
        return { fontSize: '16px', lineHeight: '24px' }; // Default or fallback style
    }
  };

  return getFontStyle;
}
