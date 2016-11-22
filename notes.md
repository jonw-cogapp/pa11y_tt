# Accessibility testing with pa11y

## What is pa11y

- Automated accessibility testing

Under the hood, pa11y uses phantom (headless web browsers) to look at the structure of a page. It can help identify accessibilty shortfalls against standards we specify

- Comes in three flavours:
  - Pa11y CLI
  - Pa11y Dashboard
  - Pa11y Webservice

CLI is the most basic invokational approach, can be used to run tests on demand and get reports
Dashboard uses the core pa11y features but provides a nice interface for longer term tracking. It uses graphs, can export csv's etc.
Webservice can run schedueld reporting and could either be used to generate reports like the CLI or could be used to build a custom dashboard or integrate elsewhere


## Where have we used it

- Rockhall
- Kimbell
- BMDW

Rockhall and Kimbell both used CLI pa11y directly from the command line. We wrote scripts and [developer documentation](http://techteam.office.cogapp.com/techwiki/index.php/Accessibility_testing#Automated_report_generation_procedure) that would use pivotal story ID's to create a set of reports for a given URL

BMDW was a bit different and invoked pa11y via a node script, which is in anoter option for using it. There were project specific reasons for this which I'll show you later.


## Why it's good

- Provides documented and evidence based testing
- Unbiased, it shows some ugly truths and forces us consider why a particular error/warning exists
- Highly configurable. In the case of Rockhall we ran tests against WCAGAA and Section 508 both at mobile and desktop screensizes


## How can you use it

2 quick run throughs:

- Command line interface
- nodejs script


