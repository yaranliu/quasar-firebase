import { AuthenticationProvider } from "components/auth/AuthenticationProvider";

const appAuthProviders = [
  {
    source: AuthenticationProvider.Google,
    title: 'Sign in with Google',
    icon: 'fa-brands fa-google'
  },
  {
    source: AuthenticationProvider.Apple,
    title: 'Sign in with Apple',
    icon: 'fa-brands fa-apple'
  },
  {
    source: AuthenticationProvider.Facebook,
    title: 'Sign in with Facebook',
    icon: 'fa-brands fa-facebook'
  },
  {
    source: AuthenticationProvider.Twitter,
    title: 'Sign in with Twitter',
    icon: 'fa-brands fa-twitter'
  },
  {
    source: AuthenticationProvider.Github,
    title: 'Sign in with Github',
    icon: 'fa-brands fa-github'
  },
  {
    source: AuthenticationProvider.LinkedIn,
    title: 'Sign in with LinkedIn',
    icon: 'fa-brands fa-linkedin'
  },
]

export { appAuthProviders }
