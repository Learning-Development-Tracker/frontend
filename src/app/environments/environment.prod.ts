export const environment = {
    production: false,
    firebase: JSON.parse(process.env['FIREBASE_API_DEV'] as string)
  };