export default function UnauthorizedAccess() {
    return (
        <div className="terminal-screen">
            <h1 className="terminal-title">ACCESS DENIED</h1>

            <p className="terminal-sub">
                Temporal Security Protocol: <span className="terminal-code">TS-403</span>
            </p>

            <p className="terminal-text">
                Unauthorized timeline modification attempt detected.
                <br />
                Only the original Voyager may alter this mission.
            </p>

            <a href="/" className="terminal-btn">
                Return to Command Center
            </a>
        </div>
    );
}
