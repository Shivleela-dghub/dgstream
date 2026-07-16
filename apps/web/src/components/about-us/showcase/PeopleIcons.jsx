export function UserIcon({className=""}) {
    return (
        <svg viewBox="0 0 34 34" fill="none" stroke="#8AB300" stroke-width="1.6" className={className}>
            <circle cx="17" cy="12" r="6"></circle>
            <path d="M5 29c1-6 6-9 12-9s11 3 12 9"></path>
        </svg>
    )
}
export function DesignerIcon({className=""}){
    return (
        <svg viewBox="0 0 34 34" fill="none" stroke="#8AB300" stroke-width="1.6" className={className}>
            <rect x="6" y="6" width="22" height="22" rx="2"></rect>
            <path d="M12 12l10 10M22 12L12 22"></path>
        </svg>
    )
}
export function EngineersIcon({className=""}){
    return (
        <svg viewBox="0 0 34 34" fill="none" stroke="#8AB300" stroke-width="1.6" className={className}>
            <polyline points="10,11 4,17 10,23"></polyline>
            <polyline points="24,11 30,17 24,23"></polyline>
            <line x1="19" y1="8" x2="15" y2="26"></line>
        </svg>
    )
}
export function GrowthMarketersIcon({className=""}){
    return (
        <svg viewBox="0 0 34 34" fill="none" stroke="#8AB300" stroke-width="1.6" className={className}>
            <polyline points="4,24 12,16 18,20 30,8"></polyline>
            <circle cx="30" cy="8" r="2.3" fill="#8AB300" stroke="none"></circle>
        </svg>
    )
}