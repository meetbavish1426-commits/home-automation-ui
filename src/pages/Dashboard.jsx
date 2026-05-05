import { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import "./Dashboard.css";

function Dashboard() {
  const { rooms = [] } = useContext(HomeContext);

  const totalDevices = rooms.reduce(
    (sum, room) => sum + room.devices.length,
    0
  );

  const devicesOn = rooms.reduce(
    (sum, room) => sum + room.devices.filter((d) => d.on).length,
    0
  );

  const energySaved = Math.round((devicesOn / totalDevices) * 100) || 0;
  const securityStatus = devicesOn > 0 ? "Active" : "Inactive";

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="dashboard-title">🏠 Smart Home Dashboard</h1>
        <p className="dashboard-subtitle">Monitor and control your home automation system</p>
      </div>

      {/* Stats Cards */}
      <div className="dashboard-stats-grid">
        <StatCard title="Total Rooms" value={rooms.length} icon="🏠" color="#3b82f6" />
        <StatCard title="Total Devices" value={totalDevices} icon="📱" color="#10b981" />
        <StatCard title="Devices Active" value={devicesOn} icon="⚡" color="#f59e0b" />
        <StatCard title="Energy Saved" value={`${energySaved}%`} icon="🌱" color="#8b5cf6" />
      </div>

      {/* Quick Actions */}
      <div className="dashboard-actions-section">
        <h2 className="dashboard-section-title">Quick Actions</h2>
        <div className="dashboard-actions-grid">
          <ActionCard title="Room Control" description="Manage individual rooms" icon="🚪" path="/rooms" />
          <ActionCard title="Automation" description="Set up smart routines" icon="🤖" path="/automation" />
          <ActionCard title="Security" description="Monitor home security" icon="🔒" path="/sensors" status={securityStatus} />
          <ActionCard title="Energy" description="Track energy usage" icon="⚡" path="/energy" />
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-activity-section">
        <h2 className="dashboard-section-title">Recent Activity</h2>
        <div className="dashboard-activity-list">
          <ActivityItem icon="💡" message="Living room lights turned on" time="2 minutes ago" />
          <ActivityItem icon="🌡️" message="Thermostat adjusted to 72°F" time="5 minutes ago" />
          <ActivityItem icon="🔒" message="Front door locked automatically" time="10 minutes ago" />
          <ActivityItem icon="📹" message="Security camera motion detected" time="15 minutes ago" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="dashboard-stat-card" style={{ borderColor: color }}>
      <div className="dashboard-stat-icon">
        <span>{icon}</span>
      </div>
      <div className="dashboard-stat-content">
        <h3 className="dashboard-stat-value" style={{ color }}>{value}</h3>
        <p className="dashboard-stat-label">{title}</p>
      </div>
    </div>
  );
}

function ActionCard({ title, description, icon, path, status }) {
  return (
    <div className="dashboard-action-card">
      <div className="dashboard-action-icon">
        <span>{icon}</span>
        {status && (
          <span
            className="dashboard-status-badge"
            style={{
              backgroundColor: status === "Active" ? "#10b981" : "#6b7280",
            }}
          >
            {status}
          </span>
        )}
      </div>
      <h3 className="dashboard-action-title">{title}</h3>
      <p className="dashboard-action-description">{description}</p>
      <button className="dashboard-action-button">Go to {title}</button>
    </div>
  );
}

function ActivityItem({ icon, message, time }) {
  return (
    <div className="dashboard-activity-item">
      <div className="dashboard-activity-icon">
        <span>{icon}</span>
      </div>
      <div className="dashboard-activity-content">
        <p className="dashboard-activity-message">{message}</p>
        <span className="dashboard-activity-time">{time}</span>
      </div>
    </div>
  );
}

export default Dashboard;
 

