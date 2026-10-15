# Orbet public website

Next.js website for Orbet, with a connected homepage, feature explorer, pricing, five platform pages, resources, support and contact pages.

## Run locally

Use a current Node.js version supported by the package dependencies.

```sh
npm ci
npm run dev
```

The development server uses port 3002. For a production build:

```sh
npm run lint
npm run build
npm run start
```

## Public pages

- `/`: homepage; original hero with a product showcase below it.
- `/features`: category filters and integrations.
- `/pricing`: Growth, Pro and Enterprise, with monthly/annual controls.
- `/platform`: overview and five pages under `/platform/`.
- `/resources`: three getting-started and planning guides.
- `/about`, `/support`, `/faq`, `/contact`.

The contact form prepares a draft addressed to `support@orbet.co.uk` in the visitor’s email app. It does not send or store messages through a server. Direct email links are also provided.

Growth/Pro signup links use `https://orbet.co.uk/signup/` with `plan=growth|pro` and `billing=monthly|annual`. The signup system is not part of this repository. Its application must handle those parameters to preselect the choices. Login remains at the configured `https://auth.orbetcloud.com` destination.

## Content and configuration

- Homepage sections: `components/HomeShowcase.tsx`.
- Hero content: `config/home/hero.json`; hero design: `components/Hero.tsx`.
- Pricing content: `config/bot-hosting/plans.json` (internal filename retained).
- Features: `app/features/FeaturesExplorer.tsx`.
- Platform copy: `lib/platform-pages.ts`.
- Guides and FAQs: `lib/resources.ts`.
- Navigation/footer/metadata: `config/home/`.
- Social preview: `app/opengraph-image.tsx`.

Workspace illustrations on the homepage use labelled sample data. They are not screenshots of the live application.

Stripe, Square and Twilio are listed as available based on the owner’s confirmation. Mailchimp is marked in development. Provider fees and final commercial/tax terms are separate.

## Handoff items before launch

- Supply approved Orbet terms, privacy, refund and service-level documents. The four old legal URLs currently display a clearly marked pending-document notice with `noindex`. Old hosting-company terms are no longer displayed.
- Connect and verify the separate signup application, including plan and billing selection.
- If direct website enquiry submission is required, connect an email/form backend; the current contact form only prepares email drafts.
- Verify login and service-status destinations, commercial/tax terms and permissions for the existing hero venue logos. The hero logo strip has been preserved from the supplied project.

## Updating an existing repository

Replace the project with this ZIP’s `orbetcloud-main` contents. Copying files over an existing checkout does not remove obsolete files. Delete these old tracked files if they remain:

- `app/bot-hosting/page.tsx`
- `app/game-servers/page.tsx`
- `app/root-servers/page.tsx`
- `app/dedicated-servers/page.tsx`
- `app/favicon.ico`

Redirects in `next.config.ts` preserve old URLs. `/bot-hosting` permanently redirects to `/pricing`. Legacy hosting routes redirect to the relevant Orbet platform pages. `/get-started` temporarily redirects to the supplied signup destination.

Do not commit `node_modules`, `.next`, or intermediate work files. This source ZIP excludes them.
