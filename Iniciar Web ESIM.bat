@echo off
cd /d "%~dp0"
title Web ESIM - servidor local
where node >nul 2>nul || (echo Falta Node.js: descargalo de https://nodejs.org & pause & exit /b 1)
node scripts\iniciar-local.mjs %*
pause
