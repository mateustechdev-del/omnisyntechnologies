import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

export default function config(phase) {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      devIndicators: false,
      async rewrites() {
        return {
          beforeFiles: [
            { source: "/", destination: "/previa-solinftec.html" },
            { source: "/pt-br/:path((?!omniguide|cafe|graos_e_fibra|alice-ai-platform).*)", destination: "/reference-pages/pt-br/:path/index.html" }
          ],
          afterFiles: [],
          fallback: []
        };
      }
    };
  }

  return { output: "export", trailingSlash: true, devIndicators: false };
}
