

rem C:\Windows\System32\systeminfo.exe
set theOne = C:\Windows\System32\systeminfo.exe | findstr KB4041676
pause
if exist %theOne%(
	echo Found it 
	echo %theOne% )
pause

rem C:\Windows\System32\wuauclt.exe  /detectnow /showwuautoscan /updatenow
rem pause
