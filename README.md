# Overview
Delay the (re)rendering of stateless components by a set amount of time.

This is one of many techniques for ensuring that expensive computations don't block the UI
thread during user interactions.

# Install

```
npm install inferno-render-delay
```

# Documentation

```typescript
function withRenderDelay(wrappedComponent, options?)
```

- `wrappedComponent`: The stateless component to be delayed.

- `options`
  - `delay` (_number_): Length of the delay in millisceonds. Defaults to 1.
  - `delayFirstRender` (_bool_): True to delay the initial render. Defaults to false.

# Example

```jsx harmony
const Message = (props) => <p>{props.text}</p>
const DelayedMessage = withRenderDelay(Message, { delay: 500, delayFirstRender: true })

render(
  <div>
    <Message text="hello" />
    <DelayedMessage text="world" />
  </div>, 
  document.getElementById('root')
)
```

# Use Cases

#### Deferring Expensive Computations

No Delay  | Delay
------|------
![no-delay-computation](examples/images/no-delay-computation.gif) | ![delay-computation](examples/images/delay-computation.gif)

#### Waiting For User Input

No Delay  | Delay
------|------
![no-delay](examples/images/no-delay.gif) | ![with-delay](examples/images/with-delay.gif)