import { Either, to } from '../utils';

const useGraphWidth = (ref, currentAmount, totalAmount) => {
  const config = Either.either(ref);

  return config.fold(
    () => ({
      width: 0,
      originalWidth: 0
    }),
    () => {
      const width = ref.getBoundingClientRect().width - 50;
      const percent = (parseInt(currentAmount) / parseInt(totalAmount)) * 100;

      console.log(parseInt(currentAmount), parseInt(totalAmount), totalAmount);

      return {
        width: percent,
        originalWidth: width
      };
    }
  );
};

export default useGraphWidth;
