import React from 'react';

type Props = {
  /** You can render any custom fallback UI */
  fallback: (error: Error) => React.ReactNode;
  /** You can also log the error to an error reporting service */
  onError?: (error: Error, info: React.ErrorInfo) => void;
  children: React.ReactNode;
};

type State = { hasError: false } | { hasError: true; error: Error };

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.props.onError?.(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback(this.state.error);
    }
    return this.props.children;
  }
}
