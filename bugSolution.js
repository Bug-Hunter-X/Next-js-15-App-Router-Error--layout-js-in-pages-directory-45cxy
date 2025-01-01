```javascript
// app/layout.js

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

Move `layout.js` to the `app` directory.  This resolves the conflict with the App Router's structure.