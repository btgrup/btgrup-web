@echo off
title Btgrup Web Platformu
cd /d "%~dp0"
echo ===================================================
echo  BTGRUP WEB PLATFORMU & YONETIM PANELI BASLATILIYOR
echo ===================================================
echo.
echo Tarayici aciliyor: http://localhost:3000
start http://localhost:3000
echo.
npm run dev
pause
