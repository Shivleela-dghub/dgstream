export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  return (
    <div
      className={`
        ${align === "center" ? "text-center mx-auto" : ""}
        max-w-3xl
        ${className}
      `}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-1 h-4 bg-lime-300 rounded-full" />

          <span className="text-xs uppercase tracking-[0.25em] font-medium text-neutral-500">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-black">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}