import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro="This Privacy Policy explains how TruePoint Valuations collects, uses, and protects information submitted through our website and service inquiry process."
      sections={[
        { heading: "Information Collection", body: "We may collect contact details, company information, property information, order details, payment-related records, and communications submitted through forms, email, phone, or payment workflows." },
        { heading: "Use of Information", body: "Information is used to respond to inquiries, coordinate appraisal and valuation services, process payments, provide customer support, maintain business records, and comply with applicable obligations." },
        { heading: "Data Security", body: "We use reasonable administrative, technical, and organizational safeguards to protect customer information. Payment card details are processed by Stripe and are not stored by TruePoint Valuations." },
        { heading: "Cookies", body: "Our website may use basic cookies or similar technologies for site functionality, analytics, security, and performance improvement." },
        { heading: "Third Party Services", body: "We may use third-party service providers, including Stripe for payment processing, email providers, website hosting providers, analytics tools, and operational software." },
        { heading: "Customer Rights", body: "Customers may contact us to request access, correction, or deletion of personal information where applicable and subject to business recordkeeping or legal requirements." },
        { heading: "Contact Information", body: `Questions about this Privacy Policy may be sent to ${site.email} or mailed to ${site.address}, ${site.cityStateZip}.` }
      ]}
    />
  );
}
