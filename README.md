# node-horseman-test-cases
TestCases for node-horseman

# Instructions

* $>npm install
* $>export PATH=$PATH:node_modules/phantomjs/bin 
* $>DEBUG=horseman node test1.js

# Test Scenario

* Opens http://rohitghatol.github.io/pdf-print-server/login.html and puts in Username and Password there. 
* Opens http://rohitghatol.github.io/pdf-print-server/print.html, waits for the page's title to change to 'done', before issuing a PDF Print

The Print.html page take in between 10 to 15 seconds to load (picks up a random number between 10 to 15). This is to simulate, page loading up data from backend and rendering things.

# Test Cases

|#   | Name | Description | Number of Parallel Prints   | Use of WaitFor (fn,value)   | Use of Wait (milliseconds) | Status | Description |
|---|---|---|---|---|---|---|---|
| 1 |test1.js   |Prints 1 PDF uses WaitFor(fn,value) and setTimeout  | 1  | Yes  |  No | Pass | Prints the 1 PDF File |
| 2 |test2.js   |Prints 2 PDFs in parallel uses WaitFor(fn,value) and setTimeout  | 2  | Yes  | No  | Fail | Code Hangs after printing 1st PDF File |
| 3 |test3.js   |Prints 1 PDF uses WaitFor(fn,value) and Async.parallel  | 1  | Yes  |  No | Pass | Prints the 1 PDF File |
| 4 |test4.js   |Prints 2 PDFs in parallel uses WaitFor(fn,value) and Async.parallel  | 2  | Yes  | No  | Fail | Code Hangs after printing 1st PDF File |
| 5 |test5.js   |Prints 1 PDF uses Wait(milliseconds) and setTimeout  | 1  | No | Yes  | Pass | Prints the 1 PDF File |
| 6 |test6.js   |Prints 2 PDFs uses Wait(milliseconds) and setTimeout  | 2  | No | Yes  | Fail |  Code Hangs after printing 1st PDF File |
| 7 |test7.js   |Prints 1 PDF uses Wait(milliseconds) and Async.parallel  | 1  | No | Yes  | Pass | Prints the 1 PDF File |
| 8 |test8.js   |Prints 2 PDFs uses Wait(milliseconds) and Async.parallel  | 2  | No | Yes  | Pass | Prints 2 PDF Files but doesn't exit |
