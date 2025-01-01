# Next.js 15 App Router Error: layout.js in pages directory

This repository demonstrates a common error encountered when using Next.js 15's App Router. The error occurs when a `layout.js` file is placed in the `pages` directory instead of the `app` directory.

## Bug

The following code snippet demonstrates the issue:

```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```

This code will throw an error if you are using Next.js 15's App Router and you have a `layout.js` file in the `pages` directory.  The error message will indicate a problem with the routing or the page structure.

## Solution

The solution is simple: move the `layout.js` file to the `app` directory.  Next.js 15's App Router expects layouts to be located within the `app` directory structure.

## Setup

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` (or similar - adapt to your development process).

This will allow you to experience and test the bug and its resolution.