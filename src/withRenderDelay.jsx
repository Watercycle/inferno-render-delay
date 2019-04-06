import { Component } from "inferno";

const defaultOptions = {
  delay: 1,
  delayFirstRender: false
}

const withRenderDelay = (WrappedComponent, options = defaultOptions) =>
  class RenderDelay extends Component {
    constructor(props, context) {
      super(props, context);

      this.timer = null

      if (options.delayFirstRender) {
        this.child = null
        this.startRenderTimer();
      } else {
        this.child = <WrappedComponent {...this.props} />
      }
    }

    // Updates only happen when the props are updated.
    shouldComponentUpdate() {
      return false;
    }

    componentWillReceiveProps() {
      this.startRenderTimer();
    }

    componentWillUnmount() {
      clearTimeout(this.timer);
    }

    startRenderTimer() {
      // rapid updates stop existing timers
      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.child = <WrappedComponent {...this.props} />;
        this.forceUpdate();
      }, options.delay);
    }

    render() {
      return this.child;
    }
  };

export default withRenderDelay;
