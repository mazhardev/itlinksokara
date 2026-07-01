const fs = require("fs");

/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const hasCustomDomain =
  fs.existsSync("./public/CNAME") || fs.existsSync("./CNAME");
const configuredBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubActions && repoName && !isUserOrOrgSite && !hasCustomDomain
    ? `/${repoName}`
    : "");
const basePath =
  configuredBasePath && configuredBasePath !== "/"
    ? configuredBasePath.replace(/\/$/, "")
    : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
};

module.exports = nextConfig;
