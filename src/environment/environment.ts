const env = {
  baseUrl: import.meta.env.VITE_BASE_API_URL,
  env: "local",
};

if (import.meta.env.DEV) {
  env.env = "development";
}

if (import.meta.env.PROD) {
  env.env = "production";
}

console.log("env", env);

export default env;
