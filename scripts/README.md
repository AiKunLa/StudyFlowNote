# StudyFlowNote 启动脚本

## 快速启动（同时启动前端 + 后端）

### Windows CMD
```cmd
scripts\start-all.cmd
```

### Windows PowerShell
```powershell
powershell -ExecutionPolicy Bypass -File scripts\start-all.ps1
```

## 单独启动

### 启动后端 (NestJS - http://localhost:3001)
```cmd
scripts\start-backend.cmd
```

### 启动前端 (Vite - http://localhost:5173)
```cmd
scripts\start-frontend.cmd
```

## 前置要求

1. **Node.js** 已安装
2. **pnpm** 已安装 (`npm install -g pnpm`)
3. **Redis** 已启动 (`docker run -d --name redis -p 6379:6379 redis:alpine`)
4. **PostgreSQL** 已运行

## 端口说明

| 服务 | 端口 | 地址 |
|------|------|------|
| 后端 API | 3001 | http://localhost:3001 |
| Swagger 文档 | 3001 | http://localhost:3001/api |
| 前端 | 5173 | http://localhost:5173 |
| Redis | 6379 | localhost:6379 |
| PostgreSQL | 5432 | localhost:5432 |
