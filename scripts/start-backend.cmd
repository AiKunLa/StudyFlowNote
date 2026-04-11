@echo off
echo ========================================
echo Starting Backend (NestJS)...
echo ========================================
cd /d "%~dp0..\backend"
call pnpm run start:dev
