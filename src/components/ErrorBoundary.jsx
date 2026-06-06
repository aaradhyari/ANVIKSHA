import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-cosmic-navy text-frosted-mint p-8">
          <div className="text-center max-w-lg">
            <h2 className="text-2xl font-bold text-neon-emerald mb-4">Something broke</h2>
            <pre className="text-sm text-silver-mist/60 text-left bg-black/30 p-4 rounded-xl overflow-auto max-h-60">
              {this.state.error?.message}
              {'\n\n'}
              {this.state.error?.stack?.split('\n').slice(0, 5).join('\n')}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
