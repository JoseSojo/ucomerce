import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Mejora la detección de errores en desarrollo
  eslint: {
    ignoreDuringBuilds: true, // Ignora errores de ESLint en el proceso de compilación
  },
  typescript: {
    ignoreBuildErrors: true, // Permite la compilación sin bloquearse por errores de TypeScript
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@services": require("path").resolve(__dirname, "src/domain/services"),
    };
    return config;
  }
};

export default nextConfig;
