---
description: How to run the Portfolio Web App (Backend & Frontend)
---

To run the full stack portfolio application, you need to start both the Django backend and the Vite frontend.

### 1. Start the Backend (Django)
Open a new terminal and run:
// turbo
```powershell
cd H:\protfile\backend
python manage.py runserver 8000
```
- **API Overview**: [http://localhost:8000/api/overview/](http://localhost:8000/api/overview/)
- **Admin Panel**: [http://localhost:8000/admin/](http://localhost:8000/admin/)

### 2. Start the Frontend (Vite + React)
Open another terminal and run:
// turbo
```powershell
cd H:\protfile\frontend
npm run dev
```
- **Website**: [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal)

### 3. (Optional) Re-seed Data
If you need to reset the data or update images:
// turbo
```powershell
cd H:\protfile\backend
python manage.py seed_data
```
