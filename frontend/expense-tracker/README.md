# FinanceSmart Frontend

FinanceSmart is a modern financial expense tracking application. The frontend is built with React.js and Tailwind CSS, providing a fast, responsive, and user-friendly interface for managing personal finances.

---

## Features

- **User Authentication**: Secure signup and login with JWT.
- **Profile Management**: Upload and display user profile images.
- **Expense & Income Tracking**: Add, view, and delete income and expense records.
- **Dashboard Analytics**: Visualize financial data with charts and summaries.
- **Excel Export**: Download income and expense data as Excel files.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **Notifications**: Real-time feedback for user actions.

---

## Tech Stack

- **React.js**: UI library for building interactive interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **Vite**: Fast build tool and development server.
- **Axios**: HTTP client for API requests.
- **React Router**: Client-side routing.
- **Context API**: Global state management.
- **Recharts**: Data visualization.
- **React Hot Toast**: User notifications.

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Backend API (see [FinanceSmart Backend](../backend/README.md))

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/financesmart-frontend.git
   cd financesmart/frontend/expense-tracker
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the project root if needed (e.g., for API base URL):

   ```
   VITE_API_BASE_URL=https://your-backend-url.com
   ```

4. **Run the development server:**

   ```sh
   npm run dev
   ```

   The app will be available at `http://localhost:5173` by default.

5. **Build for production:**
   ```sh
   npm run build
   ```

---

## Folder Structure

```
frontend/
└── expense-tracker/
    ├── public/                # Static assets
    ├── src/
    │   ├── assets/            # Images and icons
    │   ├── components/        # Reusable UI components
    │   ├── context/           # React context providers
    │   ├── pages/             # Application pages
    │   ├── utils/             # Utility functions and constants
    │   ├── App.jsx            # Main app component
    │   └── main.jsx           # Entry point
    ├── .env                   # Environment variables
    ├── package.json
    └── vite.config.js
```

---

## Deployment

- **Vercel** is recommended for deploying the frontend.
- Set the build command to `npm run build` and the output directory to `dist`.
- Ensure the backend API URL is correctly set in your environment variables.

---

## Customization

- **Theming**: Easily customize colors and styles via Tailwind CSS.
