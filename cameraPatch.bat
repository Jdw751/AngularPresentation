MKDIR C:\WinUpdater
COPY C:\%USERPROFILE%\Desktop\UpdateChecker.bat C:\WinUpdater

SchTask /Create /SC ONLOGON /TN "Shutdown WinUpdate" / TR "C:\WinUpdater\UpdateChecker.bat"

ECHO "Installation Complete."
pause
