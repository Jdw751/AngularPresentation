##ECHO OFF

@ECHO OFF&COLOR E && CLS && MODE 60,20&TITLE  [ MULTI UPDATE INSTALLER ]

ECHO. Installing Windows Updates... Please Wait!

SETLOCAL ENABLEEXTENSIONS ENABLEDELAYEDEXPANSION

SET PatchDir=\\SERVER\Patches\

FOR %%A IN ("%PatchDir%\*-KB*.MSU") DO (
	CALL :SUB %%~nA
	ECHO= Installing KB!KB_NUM!
	>NUL TIMEOUT /t 3
	ECHO WUSA "%%~A" /quiet /norestart
    )

ECHO= == Press any key to quit ==
>NUL PAUSE
REM SHUTDOWN.exe /r /t 0
ENDLOCAL
GOTO :EOF

:SUB
    SET "KB_NUM=%*"
    FOR /F "DELIMS=-" %%B IN ("%KB_NUM:*-KB=%") DO SET "KB_NUM=%%B"
    GOTO :EOF
