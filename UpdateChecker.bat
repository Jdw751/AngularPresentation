@echo off
rem create restore point before updates.
rem start /b cmd.exe /k "Wmic.exe /Namespace:\\root\default Path SystemRestore Call CreateRestorePoint "%DATE%", 100, 7"

rem if update success, runs a check for updates. 

if %ERRORLEVEL% EQU 0 (
	cmd /c %windir%\explorer.exe ms-settings:windowsupdate-action
) 

timeout 2>NUL
