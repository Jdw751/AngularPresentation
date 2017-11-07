@echo off
rem create restore point before updates.
cmd.exe /k "Wmic.exe /Namespace:\\root\default Path SystemRestore Call CreateRestorePoint "%DATE%", 100, 7"

rem runs a check for updates. 
%windir%\explorer.exe ms-settings:windowsupdate-action

echo.
echo ###########################################################
echo.
echo Updates installed
echo press any key to close
pause >NUL
