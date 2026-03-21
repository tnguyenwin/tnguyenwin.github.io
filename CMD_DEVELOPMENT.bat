@ECHO off

ECHO ----
ECHO 1 - [ dev ]
@REM ECHO 2 - [ optimize-glb ]
ECHO 2 - [ build ]
ECHO 3 - [ serve ]
ECHO 7 - [ wrangler-dev ]
ECHO 8 - [ wrangler-deploy ]
ECHO 9 - [ git reset --soft HEAD~1 ]
ECHO 0 - [ upgrade-interactive --latest ]
ECHO ----

SET /P input="ENTER: "

IF %input% == 1 (
    CALL yarn run dev
)

@REM IF %input% == 2 (
@REM     CALL yarn run optimize-glb
@REM )

IF %input% == 2 (
    CALL yarn run build
)

IF %input% == 3 (
    CALL yarn run serve
)

IF %input% == 7 (
    CALL yarn run wrangler-dev
)

IF %input% == 8 (
    CALL yarn run wrangler-deploy
)

IF %input% == 9 (
    CALL git reset --soft HEAD~1
)

IF %input% == 0 (
    CALL yarn upgrade-interactive --latest
)

ECHO ----
ECHO FINISHED

PAUSE
