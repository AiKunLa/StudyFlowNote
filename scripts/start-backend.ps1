# StudyFlowNote Backend Startup Script
$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $PSScriptRoot

Write-Host "========================================"
Write-Host "Starting Backend (NestJS)..."
Write-Host "========================================"

Set-Location "$ProjectRoot\backend"
pnpm run start:dev
