# StudyFlowNote - Start All (Backend + Frontend)
$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Write-Host "========================================"
Write-Host "Starting StudyFlowNote"
Write-Host "========================================"
Write-Host ""

# Start Backend
Write-Host "Starting Backend (NestJS)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$ProjectRoot\backend'; pnpm run start:dev"

# Start Frontend
Write-Host "Starting Frontend (Vite)..."
Start-Process powershell -ArgumentList "-NoExit", "-Command", "Set-Location '$ProjectRoot\frontend'; pnpm run dev"

Write-Host ""
Write-Host "Two terminal windows are starting:"
Write-Host "  1. Backend (NestJS) - http://localhost:3001"
Write-Host "  2. Frontend (Vite) - http://localhost:5173"
Write-Host ""
Write-Host "Press Ctrl+C to stop all processes"
Write-Host ""

# Wait for user interrupt
try {
    while ($true) { Start-Sleep -Seconds 1 }
} finally {
    Write-Host "Stopping..."
}
