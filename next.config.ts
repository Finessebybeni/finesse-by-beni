import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Пази Turbopack от объркване с външен package-lock.json в родителска папка (/Users/abc/).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
