export const environment = {
  production: false,
  links: {
    url: process.env['NG_APP_URL'],
    lkdlnurl: process.env['NG_APP_LINKEDIN_URL']
  },
  access_key: process.env['NG_APP_ACCESS_KEY'],
  personal: {
    phone: process.env['NG_APP_PHONE'],
    mail: process.env['NG_APP_MAIL']
  }
};
