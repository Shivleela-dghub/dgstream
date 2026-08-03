import CTASection from "../shared/CTASection";

export default function CTA() {
  return (
    <CTASection
      heading="Want to work with us?"
      description="Tell us about your brand and where you want it to go. We'll come back with a clear plan — scope, timeline, and price — within 24 hours."
      primaryLabel="Send Your Brief"
      secondaryLabel="Book a 30-min Call"
      badges={[
        "Response within 24 hours",
        "No long-term contracts on project work",
        "Senior team on every project",
      ]}
    />
  );
}