```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```
This code will throw an error if you are using Next.js 15's App Router and you have a `layout.js` file in the `pages` directory. The App Router requires the layout to be defined in the `app` directory. Moving the `layout.js` file will fix the issue.