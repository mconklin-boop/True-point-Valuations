import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Service"
      intro="These Terms of Service describe the terms that apply when using the TruePoint Valuations website, submitting inquiries, ordering services, or making payments."
      sections={[
        { heading: "Description of Services", body: "TruePoint Valuations provides appraisal management and valuation coordination services for residential, commercial, investor, lender, and related property valuation needs." },
        { heading: "Payment Terms", body: "Customers are responsible for paying applicable appraisal, valuation, review, and related service fees. Online payments are processed by Stripe. Payment does not guarantee completion until the order scope, assignment, and service requirements are confirmed." },
        { heading: "User Responsibilities", body: "Customers agree to provide accurate contact, billing, property, and order information and to respond promptly to requests needed to coordinate valuation services." },
        { heading: "Limitation of Liability", body: "To the fullest extent permitted by law, TruePoint Valuations is not liable for indirect, incidental, special, consequential, or punitive damages arising from website use or service coordination." },
        { heading: "Intellectual Property", body: "Website content, branding, copy, layouts, and related materials are owned by or licensed to TruePoint Valuations and may not be copied or reused without permission." },
        { heading: "Dispute Resolution", body: "Customers should contact TruePoint Valuations first to resolve any concern. Any unresolved dispute will be handled according to applicable law and venue requirements." },
        { heading: "Changes to Terms", body: "TruePoint Valuations may update these Terms from time to time. Continued use of the website or services after updates means the revised Terms apply." },
        { heading: "Contact Information", body: `Questions about these Terms may be sent to ${site.email} or mailed to ${site.address}, ${site.cityStateZip}.` }
      ]}
    />
  );
}
