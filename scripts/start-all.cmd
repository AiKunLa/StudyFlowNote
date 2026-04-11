@echo off
echo ========================================
echo Starting StudyFlowNote (Backend + Frontend)...
echo ========================================

start "StudyFlowNote-Backend" cmd /k "cd /d \"%~dp0..\backend\" && pnpm run start:dev"

start "StudyFlowNote-Frontend" cmd /k "cd /d \"%~dp0..\frontend\" && pnpm run dev"

echo.
echo Two terminal windows are starting:
echo   1. Backend (NestJS) - http://localhost:3001
echo   2. Frontend (Vite) - http://localhost:5173
echo.
