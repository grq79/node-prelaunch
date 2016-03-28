module.exports = {
  env: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Rhyd',
  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/node-prelaunch',
  mailgun: {
    domain: process.env.MAILGUN_DOMAIN || 'rhyd.co',
    api: process.env.MAILGUN_API_KEY || 'key-bd361c05429961ad804f00a84c7260b4',
    public: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-f4f950d49905de43164581a742d5a82f',
    email: process.env.MAILGUN_REPLY_EMAIL || 'info@rhyd.co'
  },
  googleAnalytics: process.env.GOOGLE_ANALYTICS || 'UA-73984136-1'
};
