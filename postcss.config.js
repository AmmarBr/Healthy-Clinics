import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

const isProd = process.env.NODE_ENV === "production";

export default {
  plugins: [
    // Tailwind هيتشبك تلقائيًا لأنك مركّب @tailwindcss/vite
    autoprefixer(),
    ...(isProd
      ? [cssnano({ preset: ["default", { discardComments: { removeAll: true } }] })]
      : []),
  ],
};
