@echo off

C:\Windows\System32\wuauclt.exe /detectnow /showwuautoscan /updatenow
echo.
echo ###########################################################
echo.
echo Updates installed
echo press any key to close
pause >NUL
