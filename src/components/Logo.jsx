import "./Logo.css";


export default function Logo({ size = 200 }) {
    return (
        <svg
            width={size}
            height={size * 0.3}
            viewBox="0 0 600 160"
            className="pastport-logo"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Radial gradient that matches your CSS token */}
            <defs>
                <radialGradient id="pastport-core" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#7b2d9f" />
                    <stop offset="100%" stopColor="#fdd823" />
                </radialGradient>
            </defs>

            {/* Wordmark left */}
            <text
                x="0"
                y="95"
                fontFamily="var(--font-display)"
                fontWeight="650"
                fontSize="90"
                letterSpacing="0.065em"
                fill="var(--primary)"
            >
                PASTP
            </text>

            {/* O Core */}
            <circle
                cx="330"
                cy="80"
                r="33"
                fill="url(#pastport-core)"
                className="time-core"
            />

            {/* RT right */}
            <text
                x="360"
                y="95"
                fontFamily="var(--font-display)"
                fontWeight="650"
                fontSize="90"
                letterSpacing="0.065em"
                fill="var(--primary)"
            >
            RT
            </text>
        </svg>
    );
}
