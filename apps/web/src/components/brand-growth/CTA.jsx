import CTASection from "../shared/CTASection";

export default function CTA() {
  return (
    <CTASection
      heading={<>Ready for growth that <br className="hidden sm:block" />compounds?</>}
      description="Book a free strategy call. We'll map your growth stack, flag the channels leaving money on the table, and come back with a plan within 24 hours."
      primaryLabel="Book a growth call"
      secondaryLabel="Start a project"
      badges={[
        "Response within 24 hours",
        "Month-to-month, no lock-in",
        "Senior team on every account",
      ]}
    />
  );
}