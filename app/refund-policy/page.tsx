import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <PolicyPage
      title="Refund Policy"
      intro="This Refund Policy explains how appraisal and valuation fee refund requests are handled."
      sections={[
        { heading: "Refund Eligibility", body: "Appraisal and valuation fees may be refundable prior to work beginning." },
        { heading: "Work Already Started", body: "Once an appraisal assignment has been accepted and work has commenced, refunds may be reduced or unavailable depending on services already performed." },
        { heading: "Written Requests", body: `Refund requests must be submitted in writing to ${site.email}. Please include your name, property address, invoice date, and reason for the request.` },
        { heading: "Processing Timeline", body: "Approved refunds or invoice adjustments are generally processed within 5-10 business days. Actual timing may vary based on the billing method used." }
      ]}
    />
  );
}
