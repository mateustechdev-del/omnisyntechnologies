import "./globals.css";
export const metadata = {
  icons: { icon: { url: "/omnisyn-aba-32.png", type: "image/png", sizes: "32x32" }, apple: "/omnisyn-icon.png" },
  title: "OmniSyn Tecnologies | Tecnologia agrícola",
  description: "Conheça o OmniCore e as aplicações de tecnologia agrícola da OmniSyn Tecnologies."
};
export default function Layout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

