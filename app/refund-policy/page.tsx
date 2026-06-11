import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund & Dispute Policy" };

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund & Dispute Policy"
      intro={`This Refund & Dispute Policy explains how ${site.name} reviews refund requests, invoice adjustments, and payment concerns.`}
      sections={[
        { heading: "Refund Eligibility", body: "Appraisal and valuation fees may be refundable before work has started, before an assignment has been accepted, before an inspection has been scheduled, and before third-party vendor costs have been incurred." },
        { heading: "Non-Refundable Fees", body: "Appraisal/order fees may be non-refundable once work has started, an appraisal assignment has been accepted, an inspection is scheduled, research or review has begun, or third-party vendor costs are incurred." },
        { heading: "Written Requests", body: `Refund and dispute requests must be submitted by email to ${site.email}. Please include your name, company, property address, invoice number if available, payment date, and the reason for the request.` },
        { heading: "Review Process", body: "We review refund and dispute requests against the order status, assignment status, inspection scheduling, completed work, third-party vendor costs, and invoice/order terms." },
        { heading: "Approved Refunds", body: "Approved refunds return to the original payment method when possible. Refund timing may vary based on Stripe, the card issuer, bank, or payment method used." },
        { heading: "Payment Disputes", body: "Customers should contact us first so we can review the order and invoice record. We may provide documentation, order history, communications, and invoice details when responding to a payment dispute." }
      ]}
    />
  );
}
