# FinanceSmart

FinanceSmart is a full-stack financial expense tracking application designed to help users manage their income and expenses efficiently. The project leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern development tools to deliver a secure, scalable, and user-friendly experience.

---

## Features

- **User Authentication**: Secure registration and login using JWT.
- **Profile Management**: Upload and manage user profile images.
- **Income & Expense Tracking**: Add, view, and delete income and expense records.
- **Dashboard Analytics**: Visualize financial data with charts and summaries.
- **Excel Export**: Download income and expense data as Excel files.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Notifications**: Real-time feedback for user actions.
- **Category Management**: Organize transactions with custom categories and icons.

---

## Tech Stack

### Frontend

- **React.js** (v19.0.0): UI library for building interactive interfaces
- **Tailwind CSS** (v4.1.3): Utility-first CSS framework for rapid styling
- **Vite** (v6.2.0): Fast build tool and development server
- **Axios** (v1.8.4): HTTP client for API requests
- **React Router DOM** (v7.5.0): Client-side routing
- **Context API**: Global state management
- **Recharts** (v2.15.2): Data visualization
- **React Hot Toast** (v2.5.2): User notifications
- **Moment.js** (v2.30.1): Date manipulation
- **Emoji Picker React** (v4.12.2): Emoji selection for categories
- **React Icons** (v5.5.0): Icon library

### Backend

- **Node.js** & **Express.js** (v5.1.0): Backend server and REST API
- **MongoDB** & **Mongoose** (v8.13.2): Database and ODM
- **JWT** (v9.0.2): Authentication and authorization
- **Multer** (v1.4.3): File uploads for profile images
- **xlsx** (v0.18.5): Excel file generation
- **bcryptjs** (v3.0.2): Password hashing
- **dotenv** (v16.5.0): Environment variable management
- **CORS** (v2.8.5): Cross-origin resource sharing

### Deployment

- **Frontend**: Vercel
- **Backend**: Render
- **Database**: MongoDB Atlas

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB database (local or Atlas)
- Git

### Backend Setup

1. **Navigate to the backend directory:**
   ```sh
   cd backend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the backend root:
   ```
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=8000
   CLIENT_URL=https://your-frontend-url.com
   ```

4. **Run the backend server:**
   ```sh
   npm start
   ```
   
   For development with auto-reload:
   ```sh
   npm run dev
   ```

   The backend will run on `http://localhost:8000` by default.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd frontend/expense-tracker
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure API base URL:**
   Edit `src/utils/apiPaths.js` to set your backend URL:
   ```javascript
   export const BASE_URL = "https://your-backend-url.com";
   ```

4. **Run the frontend development server:**
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
Financesmart/
│
├── backend/                          # Express.js backend API
│   ├── config/
│   │   └── db.js                    # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js        # Authentication logic
│   │   ├── incomeController.js      # Income operations
│   │   ├── expenseController.js     # Expense operations
│   │   └── dashboardController.js   # Dashboard data
│   ├── middleware/
│   │   ├── authMiddleware.js        # JWT verification
│   │   └── uploadMiddleware.js      # File upload handling
│   ├── models/
│   │   ├── userModel.js             # User schema
│   │   ├── incomeModel.js           # Income schema
│   │   └── expenseModel.js          # Expense schema
│   ├── routes/
│   │   ├── authRoutes.js            # Auth endpoints
│   │   ├── incomeRoutes.js          # Income endpoints
│   │   ├── expenseRoutes.js         # Expense endpoints
│   │   └── dashboardRoutes.js       # Dashboard endpoints
│   ├── uploads/                     # Uploaded profile images
│   ├── .env                         # Environment variables
│   ├── package.json
│   └── server.js                   # Entry point
│
└── frontend/
    └── expense-tracker/             # React.js frontend
        ├── public/                  # Static assets
        ├── src/
        │   ├── assets/              # Images and icons
        │   ├── components/
        │   │   ├── Charts/          # Chart components
        │   │   ├── Dashboard/       # Dashboard components
        │   │   ├── Expense/         # Expense components
        │   │   ├── Income/          # Income components
        │   │   ├── Inputs/          # Input components
        │   │   ├── layouts/         # Layout components
        │   │   ├── Cards/           # Card components
        │   │   ├── Modal.jsx        # Modal component
        │   │   ├── DeleteAlert.jsx  # Delete confirmation
        │   │   └── EmojiPickerPopup.jsx
        │   ├── context/
        │   │   └── AuthContext.jsx  # Auth context provider
        │   ├── pages/
        │   │   ├── Auth/
        │   │   │   ├── Login.jsx
        │   │   │   └── SignUp.jsx
        │   │   └── Dashboard/
        │   │       ├── Home.jsx
        │   │       ├── Income.jsx
        │   │       └── Expense.jsx
        │   ├── utils/
        │   │   ├── apiPaths.js      # API endpoints
        │   │   ├── axiosInstance.js # Axios configuration
        │   │   ├── data.js          # Mock data
        │   │   ├── helper.js        # Helper functions
        │   │   └── uploadImage.js   # Image upload utility
        │   ├── App.jsx              # Main app component
        │   └── main.jsx             # Entry point
        ├── .env                     # Environment variables
        ├── index.html
        ├── package.json
        └── vite.config.js
```

---

## API Documentation

### Base URL
```
https://your-backend-url.com/api/v1
```

### Authentication Endpoints

#### POST `/api/v1/auth/register`
Register a new user.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

#### POST `/api/v1/auth/login`
Login an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "_id": "user_id",
    "fullName": "John Doe",
    "email": "john@example.com"
  },
  "token": "jwt_token"
}
```

#### GET `/api/v1/auth/getUser`
Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "_id": "user_id",
  "fullName": "John Doe",
  "email": "john@example.com",
  "profileImage": "image_url"
}
```

#### POST `/api/v1/auth/upload-image`
Upload a profile image.

**Request:** `multipart/form-data` with file field `image`

**Response:**
```json
{
  "imageUrl": "https://backend-url.com/uploads/filename.jpg"
}
```

### Income Endpoints

#### POST `/api/v1/income/add`
Add a new income record (requires authentication).

**Request Body:**
```json
{
  "source": "Salary",
  "amount": 5000,
  "date": "2024-01-15",
  "icon": "💰"
}
```

#### GET `/api/v1/income/get`
Get all income records for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

#### DELETE `/api/v1/income/:id`
Delete an income record (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

#### GET `/api/v1/income/downloadexcel`
Download all income data as an Excel file (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

### Expense Endpoints

#### POST `/api/v1/expense/add`
Add a new expense record (requires authentication).

**Request Body:**
```json
{
  "category": "Food",
  "amount": 50,
  "date": "2024-01-15",
  "icon": "🍔"
}
```

#### GET `/api/v1/expense/get`
Get all expense records for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

#### DELETE `/api/v1/expense/:id`
Delete an expense record (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

#### GET `/api/v1/expense/downloadexcel`
Download all expense data as an Excel file (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

### Dashboard Endpoints

#### GET `/api/v1/dashboard`
Get dashboard analytics data (requires authentication).

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "totalBalance": 4500,
  "totalIncome": 5000,
  "totalExpense": 500,
  "recentTransactions": [...],
  "incomeByCategory": [...],
  "expenseByCategory": [...]
}
```

---

## Environment Variables

### Backend (.env)
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/database_name
JWT_SECRET=your_jwt_secret_key_here
PORT=8000
CLIENT_URL=https://your-frontend-url.com
```

### Frontend (src/utils/apiPaths.js)
```javascript
export const BASE_URL = "https://your-backend-url.com";
```

---

## Deployment

### Backend Deployment (Render)

1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set the following environment variables in Render:
   - `MONGO_URL`
   - `JWT_SECRET`
   - `PORT` (default: 8000)
   - `CLIENT_URL` (your frontend URL)
5. Set the build command: `npm install`
6. Set the start command: `node server.js`
7. Deploy

### Frontend Deployment (Vercel)

1. Push your code to GitHub
2. Import your project in Vercel
3. Configure build settings:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variable for backend URL if needed
5. Deploy

---

## Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## Support

For issues and questions, please open an issue on the GitHub repository.
