import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return (
    <PolicyPage
      title="Cancellation Policy"
      intro="This Cancellation Policy explains how customers may cancel appraisal and valuation service requests."
      sections={[
        { heading: "Before Assignment Acceptance", body: "Orders may be canceled prior to assignment acceptance." },
        { heading: "After Work Has Begun", body: "Cancellation fees may apply after work has begun, including accepted assignments, scheduling activity, inspection coordination, research, review, or report preparation." },
        { heading: "How to Cancel", body: `Customers should contact TruePoint Valuations immediately if they need to cancel a request. Email ${site.email} or call ${site.phone}.` },
        { heading: "Payment Adjustments", body: "Any refund or fee adjustment related to cancellation will be reviewed according to the status of the order and the services already performed." }
      ]}
    />
  );
}
