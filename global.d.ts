import english from "./messages/english.json";

type Messages = typeof english;

declare global {
  // Use type safe message keys with `next-intl`
  interface IntlMessages extends Messages {}
}
