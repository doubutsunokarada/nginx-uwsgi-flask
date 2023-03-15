loadEnv(process.env.APP_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
};

module.exports = nextConfig;

function loadEnv(appEnv = "local") {
  const env = {
    ...require(`./env/env.${appEnv}`),
    NEXT_PUBLIC_APP_ENV: appEnv,
  };

  Object.entries(env).forEach(([k, v]) => {
    process.env[k] = v;
  });
}
