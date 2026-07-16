export  function BriefIcon({
  className = "",
  stroke = "currentColor",
}) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <path
        d="M2 7h10M7 2v10"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ProductIcon({
  className="",
  stroke="currentColor",
}){
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className}>
      <rect x="2" y="4" width="10" height="7" rx="1" stroke={stroke} strokeWidth="1.3">
      </rect>
      <line x1="5" y1="4" x2="5" y2="11" stroke={stroke} strokeWidth="1"></line>
      <line x1="9" y1="4" x2="9" y2="11" stroke={stroke} strokeWidth="1"></line>
    </svg>
  )
}
export function ReviewIcon({
className="",
  stroke="currentColor",
}){
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className}>
    <circle cx="7" cy="7" r="5" stroke={stroke} strokeWidth="1.3"></circle>
    <path d="M4.5 7l2 2 3-3" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
  )
}  
export function FinalDeliveryIcon({
  className="",
  stroke="currentColor",
}){
  return (
    <svg viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M3 10l2.5-5L8 8.5l2-3.5 1.5 5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}
export function RetainerIcon({
   className="",
  stroke="currentColor",
}){
  return(
    <svg viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M7 2C4.24 2 2 4.24 2 7s2.24 5 5 5 5-2.24 5-5" stroke={stroke} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M10 2v3h-3" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}