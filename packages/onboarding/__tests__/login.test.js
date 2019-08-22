import { renderIntoDocument, cleanup } from 'react-testing-library';
import { SignIn } from '../lib/components/SignIn/SignIn';

afterEach(cleanup);

describe('onboarding signin', () => {
  it('renders welcome message', () => {
    const { getByLabelText, getByText } = renderIntoDocument(
      <SignIn onSubmit={handleSubmit} />
    );
    const { getByText } = render(<Signin />);
    expect(getByText('Welcome to Raise')).toBeInTheDocument();
  });
});
