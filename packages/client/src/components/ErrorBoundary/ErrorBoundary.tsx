import React from 'react';
import { Message, Container } from 'semantic-ui-react';

interface ErrorBoundary {
  children: any;
}

/* eslint-disable */
class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
  constructor(props: ErrorBoundary) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    if (error.message.indexOf('Loading chunk') >= 0) {
      return { hasError: true };
    }
    return { hasError: false };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Message negative style={{ marginTop: '40%' }}>
            <Message.Header>
              Something went wrong! Don’t worry, we will find who is responsible and fire them.
            </Message.Header>
            <p> On the meantime, refresh the page</p>
          </Message>
        </Container>
      );
    }

    return this.props.children;
  }
}

/* eslint-enable */

export default ErrorBoundary;
