import TagManager from 'react-gtm-module';

export function useGoogleTagManager(
  userId,
  project,
  category,
  pagePath,
  pageTitle,
  dataLayerName,
  event,
  value
) {
  /*

    Esto trackea las pageviews y los eventos a la vez.

  */
  console.log('SHIT ', dataLayerName);
  const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
    dataLayer: {
      event,
      userId,
      pagePath,
      pageTitle,
      category,
      value,
      userProject: project,
      action: event
    }
  };
  // Esta funcion sirve para todo.
  TagManager.initialize(tagManagerArgs);
  return true;
}

export default useGoogleTagManager;
