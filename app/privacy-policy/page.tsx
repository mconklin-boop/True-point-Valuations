import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      intro={`This Privacy Policy explains how ${site.name} collects, uses, and protects information submitted through our website, appraisal order process, invoice workflow, and customer support communications.`}
      sections={[
        { heading: "Information Collection", body: "We may collect names, email addresses, phone numbers, company information, property addresses, property/order details, invoice details, payment metadata, customer support messages, and related communications submitted through forms, email, phone, or invoice workflows." },
        { heading: "Use of Information", body: "Information is used to respond to inquiries, coordinate appraisal and valuation services, process and track orders, provide customer support, manage invoices, support payment processing, maintain business records, and comply with applicable obligations." },
        { heading: "Payment Information", body: "Payments are processed securely through Stripe. Stripe handles payment information, and we do not store full credit card numbers on our servers." },
        { heading: "Data Security", body: "We use reasonable administrative, technical, and organizational safeguards to protect customer information. No website or electronic process can be guaranteed to be completely secure." },
        { heading: "Cookies", body: "Our website may use basic cookies or similar technologies for site functionality, analytics, security, and performance improvement." },
        { heading: "Third Party Services", body: "We may use third-party service providers, including Stripe for payment processing, email providers, website hosting providers, analytics tools, invoicing tools, and operational software." },
        { heading: "Customer Rights", body: "Customers may contact us to request access, correction, or deletion of personal information where applicable and subject to business recordkeeping or legal requirements." },
        { heading: "Contact Information", body: `Questions about this Privacy Policy may be sent to ${site.email} or mailed to ${site.address}, ${site.cityStateZip}.` }
      ]}
    />
  );
}
