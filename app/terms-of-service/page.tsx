import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms & Conditions"
      intro={`These Terms & Conditions describe the terms that apply when using the ${site.name} website, submitting inquiries, ordering services, or paying invoices.`}
      sections={[
        { heading: "Description of Services", body: `${site.name} provides appraisal coordination and valuation support services for residential and commercial real estate transactions. We assist lenders, investors, brokers, and property owners by coordinating appraisal orders, facilitating communication throughout the valuation process, providing valuation review support, and managing appraisal-related workflows.` },
        { heading: "Order Acceptance", body: "Appraisal orders are subject to availability, scope, property type, location, client requirements, lender requirements, appraiser availability, and order documentation. Submission of a request does not guarantee acceptance, pricing, completion timeline, or a specific valuation result." },
        { heading: "No Guarantee of Valuation Outcome", body: "We do not guarantee a specific appraised value, valuation conclusion, market result, loan decision, investment result, or third-party acceptance of a report." },
        { heading: "Client Responsibilities", body: "Clients are responsible for providing accurate contact, billing, property, access, order, and scope information. Delays or inaccurate information may affect pricing, scheduling, delivery, or order completion." },
        { heading: "Payment Terms", body: `Customers are responsible for one-time invoice payments for appraisal coordination, valuation support, valuation review support, and related real estate valuation services according to the invoice or order terms issued by ${site.name}. Payments are processed securely through Stripe. Card payments are subject to invoice and order terms.` },
        { heading: "Limitation of Liability", body: `To the fullest extent permitted by law, ${site.name} is not liable for indirect, incidental, special, consequential, or punitive damages arising from website use or service coordination.` },
        { heading: "Intellectual Property", body: `Website content, branding, copy, layouts, and related materials are owned by or licensed to ${site.name} and may not be copied or reused without permission.` },
        { heading: "Dispute Resolution", body: `Customers should contact ${site.name} first to resolve any concern. Any unresolved dispute will be handled according to applicable law and venue requirements.` },
        { heading: "Changes to Terms", body: `${site.name} may update these Terms from time to time. Continued use of the website or services after updates means the revised Terms apply.` },
        { heading: "Contact Information", body: `Questions about these Terms may be sent to ${site.email} or mailed to ${site.address}, ${site.cityStateZip}.` }
      ]}
    />
  );
}
