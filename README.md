# Social Account Status Checker — Appwrite Sites edition

This project is a Next.js full-stack site designed for Appwrite Sites.

## What works now
- Responsive lemon-green and black interface.
- Select Instagram, Facebook, TikTok, X, YouTube, or Snapchat.
- Search input accepts a username or public profile URL.
- Server-side `/api/check` endpoint validates requests.
- Results explain what can be confirmed and provide platform-specific official next steps.
- Downloadable JSON report.
- No passwords, session cookies, or verification codes are collected.

## Important limitation
The first version does **not** claim to identify hidden restrictions on arbitrary public accounts. Most platforms do not offer a public API for that. It returns `UNKNOWN` until a documented official API, with the required app approval and account-owner authorization, can confirm an enforcement state. A profile being visible or missing is not proof of good standing or restriction.

## Deploy to Appwrite Sites
1. Push the contents of this folder to a GitHub repository (the `package.json` must be at the repository root).
2. In Appwrite Console, open Sites → Create site → Connect GitHub.
3. Select the repository and the `main` production branch.
4. Select Next.js.
5. Set install command: `npm install`
6. Set build command: `npm run build`
7. Set output directory: ` .next 
8. Deploy.

Appwrite Sites supports Next.js deployments and server-side routes. Do not deploy this project as a static-only site; `/api/check` runs on the server.

## Production integrations
Provider-specific OAuth and API adapters should be added only after developer-app approval:
- Meta: account-owner authorized Graph API permissions; no universal arbitrary-username restriction endpoint.
- TikTok: approved Login Kit / Display API scopes; no general public restriction lookup.
- X: API access tier and supported public profile endpoints; public profile data is not enforcement status.
- YouTube: Data API for public channel metadata; channel owners check YouTube Studio for authoritative standing.
- Snapchat: approved Snap Kit integration; not a general username restriction API.

Never put private provider credentials in browser code or `NEXT_PUBLIC_` variables. Store server secrets as Appwrite Site secret environment variables after approval.
