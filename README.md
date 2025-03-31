Application Automation with Playwright Technology

-- Commands --

To Install playwright - npm init playwright@latest
To Excecute tests - npx playwright test
To Verify the playwright version installed - npm playwright -v
To Verify the playwright report - npx playwright show-report
To runs tests in parallel - npx playwright test --workers 3
To run specific file - npx playwright test .\tests\example.spec.js
To run 2 specific files npx playwright test .\tests\example.spec.js .\tests\example.spec.js
To run 1 specific files which has 'example' - npx playwright test example
To run tests with title - npx playwright test -g "has title"
To run on a specific browser - npx playwright test --project=firefox
To run on headed/physical browser - npx playwright test --project=firefox --headed
To debug - npx playwright test --project=firefox --debug
To debug specific test file - npx playwright test --project=firefox --debug
Report structure ![image](https://github.com- user-attachments/assets/ee770660-2faa-4446-a195-b4c16cf507cc)