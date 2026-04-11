# StudyFlowNote Frontend Startup Script
$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Write-Host "========================================"
Write-Host "Starting Frontend (Vite)..."
Write-Host "========================================"

Set-Location "$ProjectRoot\frontend"
pnpm run dev
