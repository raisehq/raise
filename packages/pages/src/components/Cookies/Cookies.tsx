import React from 'react';
import { Button } from '@raisehq/components';
import { CookiesBanner, Columns } from './Cookies.styles';
import useCookie from '../../hooks/useCookie';

interface CookiesAlertProps {
  onDeny?: () => void;
  onAccept?: () => void;
}

const CookiesAlert: React.FC<CookiesAlertProps> = ({ onDeny, onAccept }) => {
  const [, setCookies] = useCookie('cookies-allowed', true);
  const [cookieReminder, setReminder] = useCookie('cookies-reminder', false);

  const onDefaultDeny = () => {
    setCookies(false);
    setReminder(true);
  };
  const onDefaultAccept = () => {
    setCookies(true);
    setReminder(true);
  };

  const denyCookies: () => void = onDeny || onDefaultDeny;
  const acceptCookies: () => void = onAccept || onDefaultAccept;

  if (cookieReminder) {
    return null;
  }

  return (
    <CookiesBanner id="cookies-alert">
      <Columns>
        <div>
          <h4>Cookies policy</h4>
          <p>
            Our website uses cookies to make your browsing experience better. By using our site you
            agree to our use of cookies.
          </p>
        </div>
        <Columns>
          <Button type="tertiary" size="standard" onClick={denyCookies} text="Decline" />
          <Button type="primary" size="standard" onClick={acceptCookies} text="Accept" />
        </Columns>
      </Columns>
    </CookiesBanner>
  );
};

export default CookiesAlert;
