import type { Metadata } from "next";
import { PolicyPage } from "@/components/PolicyPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return (
    <PolicyPage
      title="Cancellation Policy"
      intro={`This Cancellation Policy explains how customers may cancel appraisal, valuation, and order support requests with ${site.name}.`}
      sections={[
        { heading: "Before Assignment or Scheduling", body: "Orders may generally be cancelled before assignment acceptance, scheduling activity, inspection coordination, research, review, or third-party vendor work has begun." },
        { heading: "After Assignment or Scheduling", body: "Cancellation after assignment, scheduling, inspection coordination, research, review, or report preparation may incur fees. Some fees may be non-refundable if vendor costs or work have already been incurred." },
        { heading: "How to Cancel", body: `Customers should contact ${site.name} immediately if they need to cancel a request. Email ${site.email}${site.phoneHref ? ` or call ${site.phone}` : ""}.` },
        { heading: "Invoice Adjustments", body: "Any refund or fee adjustment related to cancellation will be reviewed according to the status of the order and the services already performed." }
      ]}
    />
  );
}
