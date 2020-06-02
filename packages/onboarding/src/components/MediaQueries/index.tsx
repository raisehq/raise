import { useMediaQuery } from 'react-responsive';

// For normal flow, use Mobile for mobile and Default for larger devides including tabler or larger displays
export const MobileView = ({ children, disabled }: { children?: any; disabled?: boolean }) => {
  if (disabled) {
    return null;
  }
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const DefaultView = ({ children, disabled }: { children?: any; disabled?: boolean }) => {
  if (disabled) {
    return null;
  }
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
