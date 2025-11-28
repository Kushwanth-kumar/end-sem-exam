import React, { useState } from "react";

const StudentNotification = () => {
  // Sample student data
  const [students] = useState([
    {
      id: 1,
      name: "Ramu",
      age: 25,
      email: "ramu@example.com",
      course: "Web Development",
      status: "Active",
      profileLink: "https://student-portal.com/profile/ramu",
      githubLink: "https://github.com/ramu",
    },
    {
      id: 2,
      name: "Priya",
      age: 23,
      email: "priya@example.com",
      course: "Data Science",
      status: "Active",
      profileLink: "https://student-portal.com/profile/priya",
      githubLink: "https://github.com/priya",
    },
    {
      id: 3,
      name: "Arjun",
      age: 24,
      email: "arjun@example.com",
      course: "Mobile Development",
      status: "Inactive",
      profileLink: "https://student-portal.com/profile/arjun",
      githubLink: "https://github.com/arjun",
    },
    {
      id: 4,
      name: "Neha",
      age: 22,
      email: "neha@example.com",
      course: "UI/UX Design",
      status: "Active",
      profileLink: "https://student-portal.com/profile/neha",
      githubLink: "https://github.com/neha",
    },
    {
      id: 5,
      name: "Vikram",
      age: 26,
      email: "vikram@example.com",
      course: "Backend Development",
      status: "Active",
      profileLink: "https://student-portal.com/profile/vikram",
      githubLink: "https://github.com/vikram",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [notifications, setNotifications] = useState([]);

  // Generate notification based on student details
  const generateNotification = (student) => {
    const statusColor = student.status === "Active" ? "green" : "orange";
    const notification = {
      id: Date.now(),
      studentName: student.name,
      message: `${student.name} from ${student.course} course (Age: ${student.age}) is ${student.status}`,
      email: student.email,
      timestamp: new Date().toLocaleTimeString(),
      status: student.status,
      statusColor: statusColor,
    };

    setNotifications([notification, ...notifications]);
    setSelectedStudent(student);

    // Auto-remove notification after 5 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
    }, 5000);
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "1000px",
    margin: "20px auto",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  };

  const notificationPanelStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    marginBottom: "20px",
    maxHeight: "200px",
    overflowY: "auto",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const notificationItemStyle = (statusColor) => ({
    backgroundColor: "#f9f9f9",
    borderLeft: `4px solid ${statusColor}`,
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  });

  const notificationMessageStyle = {
    fontSize: "14px",
    color: "#333",
    marginBottom: "5px",
  };

  const notificationTimestampStyle = {
    fontSize: "12px",
    color: "#999",
  };

  const studentListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
    marginTop: "20px",
  };

  const studentCardStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const studentCardHoverStyle = {
    backgroundColor: "#f0f0f0",
    transform: "translateY(-5px)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  };

  const studentNameStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "8px",
  };

  const studentDetailStyle = {
    fontSize: "13px",
    color: "#666",
    marginBottom: "5px",
  };

  const statusBadgeStyle = (status) => ({
    display: "inline-block",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "bold",
    backgroundColor: status === "Active" ? "#d4edda" : "#fff3cd",
    color: status === "Active" ? "#155724" : "#856404",
    marginTop: "8px",
  });

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "8px 12px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
    marginTop: "10px",
    width: "100%",
    transition: "background-color 0.3s",
  };

  const clearButtonStyle = {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    marginBottom: "20px",
    transition: "background-color 0.3s",
  };

  const selectedStudentStyle = {
    backgroundColor: "#e3f2fd",
    border: "2px solid #007bff",
  };

  const linkStyle = {
    display: "inline-block",
    marginRight: "10px",
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
    fontSize: "13px",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };

  const linkContainerStyle = {
    marginTop: "15px",
    paddingTop: "15px",
    borderTop: "1px solid #ddd",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Student Notification System</h1>

      {/* Notification Panel */}
      <div style={notificationPanelStyle}>
        <h3 style={{ marginTop: 0, marginBottom: "15px", color: "#333" }}>
          Live Notifications ({notifications.length})
        </h3>
        {notifications.length === 0 ? (
          <p style={{ color: "#999", textAlign: "center" }}>
            No notifications yet. Click on a student to generate a notification.
          </p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              style={notificationItemStyle(notification.statusColor)}
            >
              <div style={notificationMessageStyle}>{notification.message}</div>
              <div style={notificationTimestampStyle}>
                {notification.email} • {notification.timestamp}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Clear Notifications Button */}
      {notifications.length > 0 && (
        <button
          style={clearButtonStyle}
          onClick={clearAllNotifications}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = "#c82333")
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = "#dc3545")
          }
        >
          Clear All Notifications
        </button>
      )}

      {/* Selected Student Details */}
      {selectedStudent && (
        <div style={{ ...notificationPanelStyle, backgroundColor: "#e3f2fd" }}>
          <h3 style={{ marginTop: 0, color: "#007bff" }}>
            Selected Student: {selectedStudent.name}
          </h3>
          <p>
            <strong>Email:</strong> {selectedStudent.email}
          </p>
          <p>
            <strong>Age:</strong> {selectedStudent.age}
          </p>
          <p>
            <strong>Course:</strong> {selectedStudent.course}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span style={statusBadgeStyle(selectedStudent.status)}>
              {selectedStudent.status}
            </span>
          </p>
          <div style={linkContainerStyle}>
            <strong>Quick Links:</strong>
            <br />
            <a
              href={selectedStudent.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#007bff")
              }
            >
              📋 View Profile
            </a>
            <a
              href={selectedStudent.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#007bff")
              }
            >
              🔗 GitHub
            </a>
          </div>
        </div>
      )}

      {/* Student List */}
      <h2 style={{ marginTop: "30px", marginBottom: "15px", color: "#333" }}>
        Student List ({students.length})
      </h2>
      <div style={studentListStyle}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              ...studentCardStyle,
              ...(selectedStudent?.id === student.id
                ? selectedStudentStyle
                : {}),
            }}
            onMouseEnter={(e) => {
              Object.assign(e.currentTarget.style, studentCardHoverStyle);
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 2px 4px rgba(0,0,0,0.1)";
            }}
          >
            <div style={studentNameStyle}>{student.name}</div>
            <div style={studentDetailStyle}>📧 {student.email}</div>
            <div style={studentDetailStyle}>👤 Age: {student.age}</div>
            <div style={studentDetailStyle}>📚 {student.course}</div>
            <div style={statusBadgeStyle(student.status)}>
              {student.status}
            </div>
            <button
              style={buttonStyle}
              onClick={() => generateNotification(student)}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#0056b3")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#007bff")
              }
            >
              Generate Notification
            </button>
            <div style={{ marginTop: "10px", display: "flex", gap: "5px" }}>
              <a
                href={student.profileLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "6px",
                  backgroundColor: "#28a745",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "12px",
                  textAlign: "center",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#218838")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#28a745")
                }
              >
                Profile
              </a>
              <a
                href={student.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  padding: "6px",
                  backgroundColor: "#6f42c1",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "4px",
                  fontSize: "12px",
                  textAlign: "center",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#5a32a3")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#6f42c1")
                }
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentNotification;
