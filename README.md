# Welcome to RAIN-MARKET

hello, is me.

## Prepare

- Node >= 21.x.x.
- IDE: VSCode.
- Required Extension:
  [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),
  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode),
  [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker),

## After clone project

Run `npm install` to install packages.
Run `npm run prepare` to install husky and add to git hook.

## Main library

- We using [MUI system](https://mui.com/system/getting-started/) to build web component.
- We using [Tailwind](https://tailwindcss.com/) as a CSS framework.
- We using [next-auth](https://next-auth.js.org/) to handle website Authenticator.
- We using [next-intl](https://next-intl-docs.vercel.app/) to handle multiple languages and routing.
- We using [SWR](https://swr.vercel.app/) to handle API call.
- We using [react-hook-form](https://react-hook-form.com/) to handle form control.
- We using [react-hook-form](https://react-hook-form.com/) to handle form control.
- We using [Yup](https://www.npmjs.com/package/yup) to handle form validate.
- We using [redux](https://redux.js.org/) to handle some global state.

## Things to note

- Almost icon can found in [Material Icons](https://mui.com/material-ui/material-icons/).
- For styling components, using [sxProps](https://mui.com/system/getting-started/the-sx-prop/).
- Update theme color in `lightPalette.ts` or `lightPalette.ts` or create your own.
- Update component style in `createAppTheme.tsx`.
- Try to setup custom hook instead of repeat useState and useEffect.

## Do not do this

- DO NOT using fixed text in html. Use translation in next-intl. For example we use `en.ts`.
- DO NOT using color in Tailwind, for change theme perfectly, we need use color form MUI only. Check `createAppTheme.tsx`.

## Remember this

- REMEMBER that use Link, Router, Pathname from `next-intl` no need to include locale, but from `next/navigator` does.
- REMEMBER that always using Link instead of Button and onClick event calling router hook.

## Good to know

Breakpoint: (both config in `tailwind.config.ts` and `createAppTheme.tsx`)

- xs (extra-small) = 0px
- sm (small) = 600px
- md (medium) = 900px
- lg (large) = 1200px
- xl (extra-large) = 1536px

Typography

- 12px <=> variant="caption"
- 14px <=> variant="body2"
- 16px <=> variant="body1"
- 20px <=> variant="h6"
- 24px <=> variant="h5"
- 30px <=> variant="h4"

---
