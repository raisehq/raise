import { useState } from 'react';
import TagManager from 'react-gtm-module';

export enum TMEvents {
  Submit = 'submit',
  Click = 'click',
  PageView = 'pageview'
}

const GTMID = process.env.REACT_APP_GTM_ID;

function useGoogleTagManager(category?: string) {
  const [isLoaded, setLoaded] = useState(false);

  const initialize = () => {
    if (!isLoaded) {
      TagManager.initialize({
        gtmId: GTMID
      });
      setLoaded(true);
    }
  };

  const sendEvent = (event: TMEvents, label: string, value?: string) =>
    TagManager.dataLayer({
      gtmId: GTMID,
      dataLayer: {
        event,
        category,
        action: event,
        value: value || label,
        label
      }
    });
  const sendEventCategory = (newCategory: string, event: TMEvents, label: string, value?: string) =>
    TagManager.dataLayer({
      gtmId: GTMID,
      dataLayer: {
        event,
        category: newCategory,
        value: value || label,
        action: event,
        label
      }
    });

  const pageView = (path: string, title: string) =>
    TagManager.dataLayer({
      gtmId: GTMID,
      dataLayer: {
        event: TMEvents.PageView,
        pagePath: path,
        pageTitle: title
      }
    });

  // Esta funcion sirve para todo.

  return { sendEvent, pageView, sendEventCategory, initialize };
}

export default useGoogleTagManager;
