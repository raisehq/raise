import { useState } from 'react';
import * as Cookies from 'js-cookie';

/**
 * useCookie - React Hook for Cookies based on js-cookie
 * @param {string} key Cookie name
 * @param {Object|string} [initialValue]  Value will be assign if cookie doesn't exist.
 * @returns {Array} Returns cookie value, and the function to update it.
 */
function useCookie(key: string, initialValue: any) {
  const [item, setInnerValue] = useState(() => Cookies.get(key) || initialValue);

  /**
   * Set value of cookie
   * @param {Object|string} value
   * @param {Cookies.CookieAttributes} [options]
   */
  const setValue = (value: any, options: any) => {
    setInnerValue(value);
    Cookies.set(key, value, options);
  };

  return [item, setValue];
}

export default useCookie;
