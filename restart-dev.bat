@echo off
echo Limpiando cache y reiniciando servidor de desarrollo...
echo.

REM Detener cualquier proceso en el puerto 3000
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do taskkill /f /pid %%a 2>nul

REM Limpiar cache de npm
if exist node_modules\.cache rmdir /s /q node_modules\.cache

REM Limpiar dist
if exist dist rmdir /s /q dist

REM Reinstalar dependencias
echo Reinstalando dependencias...
npm install

REM Iniciar servidor de desarrollo
echo Iniciando servidor de desarrollo...
npm run dev

pause
