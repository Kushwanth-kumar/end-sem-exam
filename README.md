# Student Notification System - End Semester Exam Project

## Overview
A modern React-based Student Notification System that displays real-time notifications based on student details. This project demonstrates proficiency in React, component design, state management, and interactive UI.

## 📋 Project Structure

```
├── StudentNotification.jsx     # Main notification component
├── index.jsx                   # React entry point
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies
└── README.md                  # This file
```

## ✨ Features

### 1. **Student List Display**
- Shows 5 sample students with complete details
- Responsive grid layout
- Hover effects on student cards

### 2. **Real-time Notifications**
- Generate notifications by clicking student cards
- Auto-dismiss notifications after 5 seconds
- Live notification counter
- Color-coded status indicators (Active/Inactive)

### 3. **Student Details**
- Name, Email, Age, Course Information
- Activity Status (Active/Inactive)
- Profile Links and GitHub Links
- Quick access buttons

### 4. **Interactive UI**
- Status badges with visual indicators
- Smooth hover transitions
- Clean, modern design
- Responsive layout

## 👥 Student Data Included

1. **Ramu** - Web Development, Age: 25
2. **Priya** - Data Science, Age: 23
3. **Arjun** - Mobile Development, Age: 24
4. **Neha** - UI/UX Design, Age: 22
5. **Vikram** - Backend Development, Age: 26

Each student includes:
- Email address
- Course enrollment
- Activity status
- Profile links
- GitHub profile links

## 🔗 Quick Links

### Profile Links
- Format: `https://student-portal.com/profile/[name]`
- Example: `https://student-portal.com/profile/ramu`

### GitHub Links
- Format: `https://github.com/[name]`
- Example: `https://github.com/ramu`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd "d:\HTML\Skill in sem-1"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 How to Use

1. **View Student List**: All students are displayed in a grid layout
2. **Generate Notification**: Click the "Generate Notification" button on any student card
3. **View Details**: Click a student card to see their full details in the selected panel
4. **Access Links**: Click "Profile" or "GitHub" buttons to visit their links
5. **Clear Notifications**: Use "Clear All Notifications" button to remove all active notifications

## 🎨 Styling Features

- **Modern UI** with gradient background
- **Color-coded status** (Green for Active, Orange for Inactive)
- **Interactive buttons** with hover effects
- **Card-based layout** with shadow effects
- **Responsive design** that works on all devices

## 🛠 Technologies Used

- **React 18+** - UI Framework
- **Vite** - Build tool and dev server
- **CSS-in-JS** - Inline styling
- **ES6+** - Modern JavaScript

## 📊 Component Structure

### StudentNotification Component
Main component that manages:
- Student state
- Notification state
- Selected student tracking
- UI rendering

### Features
- useState hooks for state management
- Inline styling for flexibility
- Event handlers for interactivity
- Auto-dismissing notifications

## 🔔 Notification System

### How Notifications Work
1. Click "Generate Notification" on a student card
2. Notification is created with student details
3. Notification appears at the top of the page
4. Color-coded by status (Green/Orange)
5. Auto-dismisses after 5 seconds

### Notification Format
```
[Student Name] from [Course] (Age: [Age]) is [Status]
Email: [Email] • [Timestamp]
```

## 📝 Code Highlights

### Key Functions
- `generateNotification(student)` - Creates and displays notifications
- `clearAllNotifications()` - Removes all notifications
- State updates for real-time UI changes

### Styling Approach
- Inline CSS-in-JS for better component encapsulation
- Responsive grid layout
- Professional color scheme

## 🎓 Educational Value

This project demonstrates:
- React functional components
- React Hooks (useState)
- Component composition
- State management
- Event handling
- Inline styling in React
- Data structure design
- User interaction patterns

## 🔄 Git Repository

**Repository**: [Skill-in-sem-1](https://github.com/kumar-48/Skill-in-sem-1)
**Owner**: kumar-48
**Branch**: master

### Recent Commit
```
cad4fb3 - Add Student Notification System with React and Vite - End Semester Exam Project
```

## 🌐 Access Instructions

### Local Development
```
URL: http://localhost:3000/
```

The application will automatically open in your default browser when you run `npm run dev`

## 📋 Submission Checklist

- ✅ StudentNotification component created
- ✅ Student list with 5+ students
- ✅ Real-time notification system
- ✅ Student profile links added
- ✅ GitHub links integrated
- ✅ React with Vite configured
- ✅ Development server running on port 3000
- ✅ Code committed to Git repository
- ✅ README documentation created
- ✅ Professional UI/UX implemented

## 📞 Support

For issues or questions about the project:
1. Check the StudentNotification.jsx file for implementation details
2. Review the React documentation
3. Check Vite configuration for build issues

## 🎯 Future Enhancements

- Add more students dynamically
- Implement persistent notifications with database
- Add search and filter functionality
- Integrate with backend API
- Add notification sound/alerts
- Implement notification history

---

**Status**: ✅ Ready for Submission  
**Last Updated**: November 28, 2025  
**Version**: 1.0.0
