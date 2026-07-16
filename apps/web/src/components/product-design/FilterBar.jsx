import { COLORS,FONT_FAMILIES} from "../shared/FontColors";
const { mono } = FONT_FAMILIES;
export default function FilterBar({ categories, selectedCategory, onCategorySelect }) {
    return (
    <>
      <div className="border-b" style={{ borderColor: COLORS.border }}>
        <div className="max-w-[1140px] mx-auto px-6 md:px-16">
          <div className="flex items-center overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategorySelect(category.id)}
                className="text-[0.65rem] tracking-[0.1em] uppercase px-6 py-4 cursor-pointer whitespace-nowrap border-b-2 -mb-px transition-colors"
                style={{
                  ...mono,
                  color: selectedCategory === category.id ? COLORS.black : COLORS.muted,
                  borderColor: selectedCategory === category.id ? COLORS.lime : "transparent",
                }}
              >
                {category.label}{" "}
                <span className="text-[0.55rem] ml-1 px-[6px] py-[2px]" style={{ background: COLORS.surface2, color: COLORS.muted }}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}