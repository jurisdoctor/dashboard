import './globals.css';

import { CssBaseline } from '@mui/material';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import ModeProvider from './theme/providers';
import Provider from './context/client-provider';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'dashboardt',
  description: 'data dashboard',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider session={session}>
          <ModeProvider>
            <CssBaseline />
            {children}
          </ModeProvider>
        </Provider>
      </body>
    </html>
  );
}
