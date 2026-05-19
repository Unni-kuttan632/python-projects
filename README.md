# Simple Django Portfolio Website

A minimal Django portfolio website with frontend HTML, CSS, and JavaScript.

## Run locally

1. Open a terminal and go to the project folder:

   ```powershell
   cd "c:\Users\User\Desktop\codex\portfolio_site"
   ```

2. Install requirements (optional if Django is already installed):

   ```powershell
   C:/Users/User/AppData/Local/Programs/Python/Python312/python.exe -m pip install -r requirements.txt
   ```

3. Apply migrations:

   ```powershell
   C:/Users/User/AppData/Local/Programs/Python/Python312/python.exe manage.py migrate
   ```

4. Start the development server:

   ```powershell
   C:/Users/User/AppData/Local/Programs/Python/Python312/python.exe manage.py runserver
   ```

5. Open http://127.0.0.1:8000/ in your browser.

## Login and signup with WampServer

This project uses WampServer MariaDB/MySQL by default:

- Database: `portfolio_site`
- User: `root`
- Password: blank
- Host: `127.0.0.1`
- Port: `3307`

Create the database in phpMyAdmin or with:

```sql
CREATE DATABASE IF NOT EXISTS portfolio_site CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Then run:

```powershell
C:/Users/User/AppData/Local/Programs/Python/Python312/python.exe manage.py migrate
```

Signup records are stored in the `auth_user` table. Open http://127.0.0.1:8000/signup/ to create a user, then view the saved row in phpMyAdmin under `portfolio_site`.
