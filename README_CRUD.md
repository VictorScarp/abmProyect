# User Management CRUD Application

A complete CRUD (Create, Read, Update, Delete) application built with modern web technologies.

## 🚀 Technologies Used

- **Vite** - Fast build tool and development server
- **React 19** - UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Bootstrap 5** - CSS framework for responsive design
- **Local Storage** - Client-side data persistence

## ✨ Features

- ✅ **Create Users** - Add new users with form validation
- ✅ **Read Users** - Display users in a responsive table
- ✅ **Update Users** - Edit existing user information
- ✅ **Delete Users** - Remove users with confirmation dialog
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Responsive Design** - Works on desktop and mobile devices
- ✅ **Local Storage** - Data persists between browser sessions
- ✅ **Notifications** - Success and error alerts with auto-hide
- ✅ **Sample Data** - Pre-loaded with example users
- ✅ **Statistics** - Dashboard showing user counts and departments

## 🏗️ Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Alert.tsx        # Notification component
│   ├── UserForm.tsx     # Create/Edit user form
│   └── UserList.tsx     # Display users table
├── services/            # Business logic and data management
│   └── UserService.ts   # CRUD operations with Local Storage
├── types/               # TypeScript type definitions
│   └── User.ts          # User interface and related types
├── App.tsx              # Main application component
├── App.css              # Custom styles
└── main.tsx             # Application entry point
```

## 🛠️ Installation & Setup

1. **Clone and navigate to the project:**
   ```bash
   cd /home/victor/Documents/develop/abmProyect
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎯 Usage

### Adding a New User
1. Click the "Add New User" button
2. Fill in all required fields:
   - Name (required)
   - Email (required, must be valid email format)
   - Phone (required)
   - Department (required, select from dropdown)
3. Click "Create User" to save

### Editing a User
1. Click the "Edit" button next to any user in the table
2. Modify the desired fields in the form
3. Click "Update User" to save changes

### Deleting a User
1. Click the "Delete" button next to any user
2. Confirm the deletion in the dialog
3. User will be permanently removed

## 🔧 Features & Functionality

### Form Validation
- All fields are required
- Email format validation
- Real-time error display
- Form submission prevention when invalid

### Data Persistence
- Uses browser's Local Storage
- Data persists between sessions
- Automatic ID generation
- Sample data initialization

### User Interface
- Responsive Bootstrap design
- Loading states
- Success/error notifications
- Confirmation dialogs
- Clean, modern layout

### TypeScript Support
- Full type safety
- Interface definitions
- Type-only imports
- Strict TypeScript configuration

## 🎨 Styling

The application uses Bootstrap 5 for styling with custom CSS enhancements:
- Responsive grid system
- Modern card-based layout
- Hover effects and animations
- Form validation styling
- Alert notifications

## 🔄 State Management

The application uses React hooks for state management:
- `useState` for component state
- `useEffect` for side effects
- Local state for form data
- Service layer for data operations

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🚦 Error Handling

Comprehensive error handling includes:
- Form validation errors
- Data operation failures
- User feedback through alerts
- Graceful error recovery

## 🔮 Future Enhancements

Potential improvements for the application:
- Search and filter functionality
- Pagination for large datasets
- Data export features
- User authentication
- Real-time updates
- Dark mode support
- Advanced form fields

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Vite + React + TypeScript + Bootstrap**
