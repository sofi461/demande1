// app/layout.jsx

import { Inter } from "next/font/google"; // Exemple d'utilisation de police Next/font
 
const inter = Inter({ subsets: ["latin"] });
import "./globals.css"
export const metadata = {
  title: "NAFTAL - Demande Intervention",
  description: "Application de gestion des demandes d'intervention",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/* Ici, vous pourriez ajouter un header/footer global à toute l'application */}
        {/* <Navbar /> */}
        <main>
          {children} {/* Les pages et layouts enfants seront rendus ici */}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
