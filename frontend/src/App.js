import "./App.css";

function App() {
  return (
    <div className="app">

      <header className="navbar">
        <h2>🚀 DevOps Blue-Green Deployment</h2>
        <span className="status-live">SYSTEM ACTIVE</span>
      </header>

      <section className="hero">
        <h1>Production Deployment Dashboard</h1>
        <p>
          Kubernetes + Docker + Jenkins + Nginx + Prometheus + Grafana
        </p>
      </section>

      <section className="cards">

        <div className="card blue">
          <h2>🔵 Blue Environment</h2>
          <p>Current Stable Production Version</p>

          <div className="metrics">
            <span>Pods Running: 2</span>
            <span>Status: Healthy</span>
          </div>

          <button>View Deployment</button>
        </div>

        <div className="card green">
          <h2>🟢 Green Environment</h2>
          <p>New Candidate Release Version</p>

          <div className="metrics">
            <span>Pods Running: 2</span>
            <span>Status: Ready</span>
          </div>

          <button>Switch Traffic</button>
        </div>

        <div className="card monitor">
          <h2>📊 Monitoring Stack</h2>

          <div className="stack">
            <span>Prometheus</span>
            <span>Grafana</span>
            <span>Jenkins CI/CD</span>
            <span>Kubernetes</span>
          </div>
        </div>

      </section>

      <footer>
        DevOps Mini Project • Blue-Green Deployment Strategy
      </footer>

    </div>
  );
}

export default App;