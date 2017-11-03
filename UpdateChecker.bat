@echo off

C:\Windows\System32\wuauclt.exe /resetauthorization /detectnow /updatenow
echo.
echo ###########################################################
echo.
echo Updates installed

pause >NUL
