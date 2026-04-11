@echo off
echo ========================================
echo Starting Frontend (Vite)...
echo ========================================
cd /d "%~dp0..\frontend"
call pnpm run dev
