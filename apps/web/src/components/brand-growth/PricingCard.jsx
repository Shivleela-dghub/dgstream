import { BtnLime, BtnOutline } from "../shared/Button";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`
        relative
        flex flex-col
        h-full
        w-full
        min-h-[950px]
        border
        border-[#E2E2DC]
        px-8
        py-10
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${
          plan.featured
            ? "bg-[#FCFFF3]"
            : "bg-white"
        }
      `}
    >
      {/* Badge */}
      {plan.featured && (
        <div className="absolute top-0 right-0 bg-[#C8FF00] px-2 py-2">
          <span className="text-xs font-bold tracking-[0.1em] uppercase">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Tier */}
      <p className="uppercase tracking-[0.14em] text-xs text-[#8AB300] font-semibold mb-3">
        {plan.tier}
      </p>

      {/* Title */}
      <h2 className="mt-4 text-3xl font-black leading-none text-[#07142B]">
        {plan.title}
      </h2>

      {/* Price */}
      <div className="mt-4 flex items-end gap-2">
        <span className="text-sm font-medium text-[#6B6B7A]">
          {plan.price}
        </span>

        <span className="text-sm text-[#6B6B7A]">
          {plan.duration}
        </span>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-[#6B6B7A] mb-2">
        {plan.description}
      </p>

      {/* Sections will come here */}
     {/* Feature Sections */}
        <div className="mt-12 flex flex-col gap-10">
        {plan.sections.map((section) => (
            <div key={section.title} className="space-y-2">
            {/* Section Title */}
            <h4 className="uppercase tracking-[0.1em] text-xs font-semibold text-[#8AB300] mb-6">
                {section.title}
            </h4>

            {/* Features */}
            <div className="space-y-1">
                {section.features.map((feature, index) => (
                <div className="flex items-start gap-3">
                <span className="text-[#8AB300]">—</span>
                    <p className="text-sm leading-7 text-[#4B5565]">
                        {feature}
                    </p>
                </div>
                ))}
            </div>
            </div>
        ))}
        </div>

      {/* Button placeholder */}
        <div className="mt-12">
            {plan.featured ? (
                <BtnLime className="w-full">
                    {plan.button}
                </BtnLime>
                ) : (
                <BtnOutline className="w-full">
                    {plan.button}
                </BtnOutline>
            )}
        </div>
    </div>
  );
}