@echo off
rem create restore point before updates.
rem start /b cmd.exe /k "Wmic.exe /Namespace:\\root\default Path SystemRestore Call CreateRestorePoint "%DATE%", 100, 7"

rem if update success, runs a check for updates. 

if %ERRORLEVEL% EQU 0 (
	%windir%\explorer.exe ms-settings:windowsupdate-action
) 

rem runs a check for updates. 
rem %windir%\explorer.exe ms-settings:windowsupdate-action

echo.
echo ###########################################################
echo.
echo Updates installed
echo press any key to close
pause >NUL
