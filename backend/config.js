const env = process.env;

export default {
  PORT: env.PORT || 8080,
  ENV: env.NODE_ENV || 'development',
  HOST: env.HOST || '0.0.0.0',
};
