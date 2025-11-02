import './Spaceship.css'

export default function Spaceship({ width = "40vw" }) {
    const height = width * 0.28; // balanced height

    return (
        <div className="ufo-balanced-wrapper">
            <svg
                width={width}
                height="auto" 
                viewBox="0 0 600 170"
                xmlns="http://www.w3.org/2000/svg"
                className="ufo-balanced"
            >
                <defs>
                    <linearGradient id="hullTopBalanced" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--secondaty-text)" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="var(--background)" stopOpacity="0.75" />
                    </linearGradient>

                    <radialGradient id="hullBottomBalanced" cx="50%" cy="60%" r="70%">
                        <stop offset="0%" stopColor="var(--background)" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="var(--background)" stopOpacity="0.25" />
                    </radialGradient>

                    <radialGradient id="engineBalanced" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7b2d9f" />
                        <stop offset="100%" stopColor="#fdd823" />
                    </radialGradient>
                </defs>

                {/* Top hull */}
                <ellipse cx="300" cy="72" rx="260" ry="48" fill="url(#hullTopBalanced)" />

                {/* Bottom hull */}
                <ellipse cx="300" cy="108" rx="230" ry="45" fill="url(#hullBottomBalanced)" />

                {/* Core engine */}
                <circle cx="300" cy="90" r="15" fill="url(#engineBalanced)" className="ufo-balanced-engine" />
            </svg>

            <div className="ufo-balanced-shadow"></div>
        </div>
    );
}
