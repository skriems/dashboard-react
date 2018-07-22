const env = process.env;

export const CONFIG = {
  api: env.NODE_ENV !== "test" ? env.REACT_APP_API : 'test.foo.api',
  debug: env.NODE_ENV !== "test" ? env.REACT_APP_DEBUG : false
};
