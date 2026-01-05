# Portfolio App

Modern personal portfolio built with Next.js and Tailwind CSS. The site features
animated sections, a projects showcase, and a contact form wired to Resend.

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Contact form (Resend)

Set the following environment variables in `.env.local`:

```env
RESEND_API_KEY=your_resend_key_here
CONTACT_FROM_EMAIL=Portfolio <hello@yourdomain.com>
CONTACT_TO_EMAIL=you@yourdomain.com
```

Notes:
- `CONTACT_FROM_EMAIL` must be a verified sender in Resend.
- Restart the dev server after adding `.env.local`.

## Project structure

- `app/` Next.js app router pages and layout
- `components/` UI and section components
- `constants/` Static data and icon definitions
- `public/` Images and static assets

## Next release bug list

- [ ] Set a default job selection on load
- [ ] Fix occasional missing sections caused by in-view animations
- [ ] Add a burger menu to the header for mobile
- [ ] Add project case studies; "Read More" currently does nothing
- [ ] Update projects based on latest experience
