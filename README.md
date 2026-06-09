# TruePoint Valuations

Production-ready Next.js website for TruePoint Valuations, a real estate appraisal management company.

## Stripe setup

1. Create a Stripe Payment Link in your Stripe dashboard.
2. Open `lib/site.ts`.
3. Replace:

   ```js
   https://buy.stripe.com/replace-with-your-payment-link
   ```

   with your live Stripe Payment Link.

## Included pages

- Home
- About
- Services
- Order Appraisal
- Payment
- Contact
- Privacy Policy
- Terms of Service
- Refund Policy
- Cancellation Policy

## Local preview

```bash
npm install
npm run dev
```
