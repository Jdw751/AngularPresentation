MKDIR C:\WinUpdater
Rem COPY C:\Users\%USERPROFILE%\Desktop\UpdateChecker.bat C:\WinUpdater
COPY C:\Users\EHGDI9E\Desktop\UpdateChecker.bat C:\WinUpdater
SchTask /Create /SC ONLOGON /TN "Shutdown WinUpdate" / TR "C:\WinUpdater\UpdateChecker.bat"

ECHO "Installation Complete."
pause
