import { NextRequest, NextResponse } from "next/server";
import { getValue } from '@lib/configcat'

const ABOUT_COOKIE_NAME = 'flag-newAboutPage'
const COOKIE_NAME_COUNTRY = 'uCountry'
const COOKIE_NAME_UID = 'uId'
const COOKIE_NAME_SUGFR = 'sugconfr'

export function middleware (req: NextRequest) {  
    if (req.nextUrl.pathname.startsWith('/about')) {
        const url = req.nextUrl.clone()

        // Redirect paths that go directly to the variant
        if (url.pathname != '/about') {
            url.pathname = '/about'
            return NextResponse.redirect(url)
        }

        const cookie = req.cookies.get(ABOUT_COOKIE_NAME) || (getValue('newaboutpage') ? '1' : '0')

        url.pathname = cookie === '1' ? '/about/aboutnew' : '/about'

        const res = NextResponse.rewrite(url)

        // Add the cookie if it's not there
        if (!req.cookies.get(ABOUT_COOKIE_NAME)) {
            res.cookies.set(ABOUT_COOKIE_NAME, cookie)
        }

        return res
      }

      if (req.nextUrl.pathname.startsWith('/featureflag')) {
        const url = req.nextUrl.clone()
  
        // Fetch user Id from the cookie if available 
        const userId = req.cookies.get(COOKIE_NAME_UID) || crypto.randomUUID()
        const country = req.cookies.get(COOKIE_NAME_COUNTRY) || req.geo?.country
        const sugfr = req.cookies.get(COOKIE_NAME_SUGFR) || (getValue(COOKIE_NAME_SUGFR) ? '1' : '0')

        const res = NextResponse.rewrite(url)
        
        // Add the cookies if those are not there
        if (!req.cookies.get(COOKIE_NAME_COUNTRY)) {
            res.cookies.set(COOKIE_NAME_COUNTRY, country)
        }

        if (!req.cookies.get(COOKIE_NAME_UID)) {
            res.cookies.set(COOKIE_NAME_UID, userId)
        }

        if (!req.cookies.get(COOKIE_NAME_SUGFR)) {
            res.cookies.set(COOKIE_NAME_SUGFR, sugfr)
        }

        return res
      }
}