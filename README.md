# Overwind UI

Opinionated React components built on top of
[Tailwind CSS](https://github.com/tailwindlabs/tailwindcss),
[Headless UI](https://github.com/tailwindlabs/headlessui),
[Next.js](https://github.com/vercel/next.js) and
[React Hook Form](https://github.com/react-hook-form/react-hook-form)

> **This is not a general component library. It is more of a design system that I use in my projects.**

## Installation

1. Install dependencies

```bash
npm install overwind-ui
```

> `next`, `react`, `react-dom`, `react-hook-form`, `@headlessui/react`, `classnames`, are peer dependencies.

2. Add `overwind-ui` tailwind preset and tell tailwind to compile the classes used in the library.

> Note that we don't compile tailwind classes ourselves because we assume that you are using tailwind in your project and so, this prevents generating duplicate classes.

```js
// tailwind.config.js
module.exports = {
  presets: [require("overwind-ui/tailwind")],

  content: [
    "./node_modules/overwind-ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
};
```

You should have `@tailwindcss/forms` installed because It's present in the plugins list of the tailwind preset.

Note that you you're not allowed to change the theme elements of your config. You're only allowed to extend it to make sure all the classes used in the library are recognized and generated.

3. Import `overwind-ui` global styles. Inside styles folder, create a file called `index.css` (or whatever you want) and import our global styles in addition to your global styles

```css
/* styles/index.css */

@import "./globals.css";
@import "overwind-ui/dist/styles.css";
```

> You need to have `postcss-import` installed and configured in your project. Look [here](https://tailwindcss.com/docs/installation#3-create-your-css-file) for more info. Again, we don't import these styles ourselves because we use tailwind classes in there which you need to compile yourself to prevent duplicate classes.

4. Wrap your next.js App component with `OverwindProvider` which takes care of loading other internal styles, placing toasts, etc. Also import the newly created `index.css` (or whatever you named it) instead of `globals.css`

```jsx
// pages/_app.js

import "../styles/index.css";
import { OverwindProvider } from "overwind-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OverwindProvider>
      <Component {...pageProps} />
    </OverwindProvider>
  );
}
```

## Usage

Import the components you want to use from `overwind-ui`.

Example usage

```jsx
import { Button } from "overwind-ui";

function Example(props) {
  return (
    <Button type="next-link" color="secondary" roundedFull>
      Hello World
    </Button>
  );
}
```

Checkout the available components [here](https://ahmedosama7450.github.io/overwind-ui/)

We use [iconify](https://iconify.design/) to load icons. You can use the `icon` prop (if applicable) to pass an icon name.
Checkout iconify icons [here](https://icon-sets.iconify.design/)

```jsx
import { Icon } from "overwind-ui";

function Example(props) {
  return <Icon icon="ri:add-fill" />;
}
```

## License

MIT
