import { Step } from '@raisehq/onboarding';

export default (dispatch: any) => {
  const showOnboarding = (troggle) => {
    dispatch({
      type: 'ONBOARDING_SHOW',
      data: {
        show: true,
        troggle: troggle === 'login' ? Step.SignIn : Step.Start
      }
    });
  };
  const hiddeOnboarding = () =>
    dispatch({
      type: 'ONBOARDING_HIDDEN',
      data: {
        ...{ show: false }
      }
    });
  return {
    showOnboarding,
    hiddeOnboarding
  };
};
