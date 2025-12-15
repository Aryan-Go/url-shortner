# URL Shortener

A fast, secure, and reliable **URL shortening service** built with **Go (Gin framework)** for the backend, **PostgreSQL** as the database, and **React + TailwindCSS** for the frontend. Generate short, memorable URLs and manage them efficiently.

---

## Features

- **Shorten long URLs** with a unique short code  
- **Redirect users** to original URLs via short links  
- **Validation checks**:  
  - Ensures URLs start with `http` or `https`  
  - Verifies the URL host is valid  
  - Checks if the URL is "legit" before shortening  
- **Frontend feedback** for success and errors  
- **CORS-enabled** for React frontend integration  
- **Logs all requests** for monitoring and debugging  

---

## Tech Stack

| Layer         | Technology                    |
|---------------|-------------------------------|
| Frontend      | React, TailwindCSS, Axios     |
| Backend       | Go, Gin Framework             |
| Database      | PostgreSQL                    |
| Environment   | dotenv for configuration      |

---

## Getting Started

### Backend Setup

1. **Clone the repo**:
```bash
git clone https://github.com/Aryan-Go/url-shortner
cd backend
```

2. **Install dependencies**:
```bash
go mod tidy
```

3. **Configure environment**:

Create a `.env` file in the backend root:
```env
PORT=3000
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=url_shortner
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

4. **Run PostgreSQL**:
```bash
psql -U postgres
CREATE TABLE urls (
  id SERIAL PRIMARY KEY,
  long_url TEXT,
  short_code VARCHAR(10)
);
```

5. **Run the backend server**:
```bash
go run main.go
```

---

### Frontend Setup

1. **Navigate to frontend folder**:
```bash
cd frontend
```

2. **Install dependencies**:
```bash
npm i
```

3. **Run the frontend development server**:
```bash
npm run dev
```

---


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
---

## Contact

For questions or support, please open an issue on GitHub.