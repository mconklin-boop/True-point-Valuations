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
        { heading: "Information Collection", body: "We may collect contact details, company information, property information, order details, invoice-related records, and communications submitted through forms, email, or phone." },
        { heading: "Use of Information", body: "Information is used to respond to inquiries, coordinate appraisal and valuation services, manage invoices, provide customer support, maintain business records, and comply with applicable obligations." },
        { heading: "Data Security", body: "We use reasonable administrative, technical, and organizational safeguards to protect customer information. TruePoint Valuations does not collect payment card details through this website." },
        { heading: "Cookies", body: "Our website may use basic cookies or similar technologies for site functionality, analytics, security, and performance improvement." },
        { heading: "Third Party Services", body: "We may use third-party service providers, including email providers, website hosting providers, analytics tools, invoicing tools, and operational software." },
        { heading: "Customer Rights", body: "Customers may contact us to request access, correction, or deletion of personal information where applicable and subject to business recordkeeping or legal requirements." },
        { heading: "Contact Information", body: `Questions about this Privacy Policy may be sent to ${site.email} or mailed to ${site.address}, ${site.cityStateZip}.` }
      ]}
    />
  );
}
