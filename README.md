# HalalGaming Platform

A competitive gaming platform that allows players to challenge each other in skill-based matches using cryptocurrency payments.

## Features

- 1v1 competitive matches with cryptocurrency betting
- Tournament system
- Subscription-based access (Basic and VIP tiers)
- KYC verification system
- Smart contract integration for secure payments
- Initial focus on FIFA, with plans to expand to other games

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Prisma (Database ORM)
- NextAuth.js (Authentication)
- Ethers.js (Blockchain integration)
- PostgreSQL (Database)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file with the following variables:
   ```
   DATABASE_URL="your_database_url"
   NEXTAUTH_SECRET="your_nextauth_secret"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
halalgaming/
├── app/                 # Next.js app directory
├── components/         # React components
├── lib/               # Utility functions and configurations
├── prisma/            # Database schema and migrations
├── public/            # Static assets
└── styles/            # Global styles
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

Proprietary - All rights reserved 