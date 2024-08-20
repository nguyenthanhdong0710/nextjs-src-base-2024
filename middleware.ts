import { NextResponse } from 'next/server';
import { supportedLanguages } from './config/i18n';
import { cookies } from 'next/headers';

export function middleware(request: Request) {

  // Extract the 'language' query parameter
  const url = new URL(request.url);
  const language = url.searchParams.get('language');

  // Check if the current cookie matches the `language` query parameter
  const currentLocale = cookies().get('NEXT_LOCALE')?.value;

  if (language && supportedLanguages.includes(language) && language !== currentLocale) {
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', language);

    return response;
  }

  return NextResponse.next();
}