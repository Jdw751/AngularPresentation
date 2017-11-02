@echo off
echo C:\Windows\System32\wuauclt.exe /detectnow
C:\Windows\System32\wuauclt.exe /resetauthorization /detectnow /updatenow
echo.
echo ###########################################################
echo.
echo Updates installed
echo Press any key to restart
pause >NUL
rem shutdown -r -t 0
