export default function CardCorners() {
  return (
    <>
      {/* Top Left */}
      <span className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-lime-300 opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />

      {/* Top Right */}
      <span className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-lime-300 opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />

      {/* Bottom Left */}
      <span className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-lime-300 opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />

      {/* Bottom Right */}
      <span className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-lime-300 opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
    </>
  );
}