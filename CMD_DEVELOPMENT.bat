@ECHO OFF

ECHO ----
ECHO 1 - [ dev ]
ECHO 2 - [ build ]
ECHO 3 - [ serve ]
ECHO 0 - [ upgrade-interactive --latest ]
ECHO ----

SET /P input="ENTER: "

IF %input% == 1 (
    CALL yarn run dev
)

IF %input% == 2 (
    CALL yarn run build
)

IF %input% == 3 (
    CALL yarn run serve
)

IF %input% == 0 (
    CALL yarn upgrade-interactive --latest
)

ECHO ----
ECHO FINISHED

PAUSE
