import TagManager from 'react-gtm-module';

export function useGoogleTagManager(
  userId,
  project,
  category,
  pagePath,
  pageTitle,
  dataLayerName,
  event,
  label
) {
  const tagManagerArgs = {
    dataLayer: {
      event,
      userId,
      pagePath,
      pageTitle,
      category,
      label,
      userProject: project,
      action: event
    },
    dataLayerName
  };

  return TagManager.dataLayer(tagManagerArgs);
}

export default useGoogleTagManager;
