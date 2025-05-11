@echo off
echo Building project for GitHub Pages...

cd frontend

REM Install dependencies if needed
if not exist "node_modules" (
    echo Installing dependencies...
    call yarn install
)

REM Build the project
echo Building project...
call yarn build

cd ..

echo.
echo Build complete! The static files are in frontend\dist\
echo.
echo To deploy to GitHub Pages:
echo 1. Commit and push your changes to GitHub
echo 2. The GitHub Actions workflow will automatically deploy your site
echo 3. Your site will be available at: https://YOUR_USERNAME.github.io/fitness-website/
echo.
pause 