MKDIR C:\WinUpdater

COPY C:\Users\%USERNAME%\Desktop\UpdateChecker.bat C:\WinUpdater
SchTask /Create /SC ONLOGON /TN "Shutdown WinUpdate" / TR "C:\WinUpdater\UpdateChecker.bat"

ECHO "Installation Complete."
pause
