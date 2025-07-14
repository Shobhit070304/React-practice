// ErrorBoundary.js
// Example of a React error boundary component that catches JavaScript errors in its child component tree.
import React from "react";

// Class component to catch errors in child components
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  // Update state to show fallback UI on error
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    console.error("Caught by Error Boundary:", error, errorInfo);
  }

  // Render fallback UI or children
  render() {
    if (this.state.hasError) {
      return <h2>⚠️ Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
