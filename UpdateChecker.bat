@echo off
rem runs a check for updates and when important ones are found, update. 
rem remove showwuautoscan and "press to close" and pause>NUL once confirmed working.
C:\Windows\System32\wuauclt.exe /a /ResetAuthorization /detectnow /showwuautoscan /updatenow
echo.
echo ###########################################################
echo.
echo Updates installed
echo press any key to close
pause >NUL
