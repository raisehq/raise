import { Either } from '../utils';

const useGraphWidth = (
  ref: any,
  currentAmount: number,
  totalAmount: number
) => {
  const config = Either.either(ref);

  return config.fold(
    () => ({
      width: 0,
      originalWidth: 0,
    }),
    () => {
      const width = ref.getBoundingClientRect().width - 50;
      const percent = (currentAmount / totalAmount) * 100;

      return {
        width: percent,
        originalWidth: width,
      };
    }
  );
};

export default useGraphWidth;
