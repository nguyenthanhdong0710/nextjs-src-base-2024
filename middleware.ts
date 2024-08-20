import { NextResponse } from 'next/server';
import { supportedLanguages } from './config/i18n';
import { cookies } from 'next/headers';

export function middleware(request: Request) {

  // Extract the 'lang' query parameter
  const url = new URL(request.url);
  const lang = url.searchParams.get('language');

  // Check if the current cookie matches the `lang` query parameter
  const currentLocale = cookies().get('NEXT_LOCALE')?.value;

  if (lang && supportedLanguages.includes(lang) && lang !== currentLocale) {
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', lang);

    return response;
  }

  return NextResponse.next();
}