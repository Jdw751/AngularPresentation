@echo off
rem runs a check for updates and when important ones are found, update. 
rem remove showwuautoscan and "press to close" and pause>NUL once confirmed working.
rem C:\Windows\System32\wuauclt.exe /a /ResetAuthorization /detectnow /showwuautoscan /updatenow
 C:\Windows\System32\usoclient.exe StartScan
echo.
echo ###########################################################
echo.
echo Updates installed
echo press any key to close
pause >NUL
