import './NotFound.css'

export default function NotFound404() {
    return (
        <div className="terminal-screen">
            <h1 className="terminal-title">404 — TIMELINE NOT FOUND</h1>

            <p className="terminal-sub">
                Temporal Error Code: <span className="terminal-code">TS-404</span>
            </p>

            <p className="terminal-text">
                The coordinate you entered does not exist in this reality.
            </p>

            <a href="/" className="terminal-btn">
                Return to Command Center
            </a>
        </div>
    );
}
