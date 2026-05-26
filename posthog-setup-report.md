<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into djigo.dev. Here is a summary of all changes made:

- **`instrumentation-client.ts`** (new) — Initialises `posthog-js` for the entire Next.js 15.3+ app using the recommended `instrumentation-client` approach. Enables exception tracking and the EU PostHog instance via a reverse proxy at `/ingest`.
- **`next.config.ts`** — Added `rewrites` to proxy PostHog ingestion and asset requests through `/ingest/*`, preventing ad-blocker interference. Also set `skipTrailingSlashRedirect: true` as required by PostHog.
- **`app/components/Menu.tsx`** — Added `"use client"` directive (it was missing) and `posthog.capture('section_selected', { section })` in the `handleClick` handler, tracking which section the visitor explores.
- **`app/components/Social.tsx`** — Added `posthog.capture('social_link_clicked', { title, url })` via an `onClick` handler, tracking which social/contact links visitors click.
- **`.env.local`** — Populated `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` (EU instance).

| Event | Description | File |
|---|---|---|
| `section_selected` | Visitor clicks a section menu button (software/product/customer) | `app/components/Menu.tsx` |
| `social_link_clicked` | Visitor clicks a social or contact link in the sidebar | `app/components/Social.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/705210)
- [Section selections over time](/insights/o9jqWxNc) — daily trend of section clicks
- [Section popularity breakdown](/insights/NgNr13lY) — bar chart of which sections are explored most
- [Social link clicks over time](/insights/qqpGEt3K) — daily trend of sidebar link clicks
- [Most clicked social links](/insights/0rt56Dha) — bar chart of which links get the most clicks

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
