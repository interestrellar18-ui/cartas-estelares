const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,

  // DESLIGA PWA NO DESENVOLVIMENTO
  disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({

  reactStrictMode: true,

  // IMPEDE O TURBOPACK DE SURTAR
  turbopack: {},

});