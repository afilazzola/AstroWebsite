import { h, Fragment  } from 'preact';
import { useEffect } from 'preact/hooks';

const GoogleAnalytics = () => {
  useEffect(() => {
    window['dataLayer'] = window['dataLayer'] || [];
    function gtag(...args) {
      window['dataLayer'].push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-WY3MGM0JN2');

    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WY3MGM0JN2';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return null;
};

export default GoogleAnalytics;