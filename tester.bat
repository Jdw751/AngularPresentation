@echo off


start /b cmd.exe /k "Wmic.exe /Namespace:\\root\default Path SystemRestore Call CreateRestorePoint "%DATE% ", 100, 7" 


if %ERRORLEVEL% EQU 0 ( 
	%windir%\explorer.exe ms-settings:windowsupdate-action
	
) else ( 
	rem run a quick trouble shoot cleaning
	net stop wuauserv
	pause
	net start wuauserv
)


rem %windir%\explorer.exe ms-settings:windowsupdate-action
ECHO "Installation Complete."
pause >NUL
