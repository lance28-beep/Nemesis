// Add this type definition at the top of your file
type Env = {
  bool: (key: string, defaultValue?: boolean) => boolean;
  string: (key: string, defaultValue?: string) => string;
  number: (key: string, defaultValue?: number) => number;
  // Add other methods if needed
};

// Then modify your env usage
const env: Env = {
  bool: (key: string, defaultValue = false) => {
    const value = process.env[key];
    return value ? value.toLowerCase() === 'true' : defaultValue;
  },
  string: (key: string, defaultValue = '') => {
    const value = process.env[key];
    return value || defaultValue;
  },
  number: (key: string, defaultValue = 0) => {
    const value = process.env[key];
    return value ? Number(value) : defaultValue;
  },
  // Add other methods if needed
};

// Now you can use env.bool safely
const config = {
  app: {
    name: env.string('APP_NAME', 'Nemesis'),
    env: env.string('NODE_ENV', 'development'),
    port: env.number('PORT', 3000)
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true)
  }
};

export default config; 