// Login and run the pa11y tests

'use strict';

let fs = require('fs');
let pa11y = require('pa11y');
let async = require('async');
let markdownReporter = require('pa11y/reporter/markdown');

let optionsDesktop = {
  viewport: {
    width: 1280,
    height: 1024
  }
}

let optionsTablet = {
  viewport: {
    width: 1024,
    height: 768
  }
}

// Create a pa11y instance for tablet
let test_tablet = pa11y({
  ignore: ['notice'],
  // Log what's happening to the console
  log: {
    debug: console.log.bind(console),
    error: console.error.bind(console),
    info: console.log.bind(console)
  },
  allowedStandards: ['WCAG2AA'],
  page: optionsDesktop,

  // A script to be run on the inital page before Pa11y is run.
  // beforeScript accepts three parameters, the page object, the pa11y options and a callback
  beforeScript: doLogin
});

// Create a pa11y instance for desktop
let test_desktop = pa11y({
  ignore: ['notice'],
  // Log what's happening to the console
  log: {
    debug: console.log.bind(console),
    error: console.error.bind(console),
    info: console.log.bind(console)
  },
  allowedStandards: ['WCAG2AA'],
  page: optionsTablet,

  // A script to be run on the inital page before Pa11y is run.
  // beforeScript accepts three parameters, the page object, the pa11y options and a callback
  beforeScript: doLogin
});




function doLogin(page, options, next) {
    // An example function that can be used to make sure changes have been confirmed before continuing to run Pa11y
    let waitUntil = function(condition, retries, waitOver) {
      page.evaluate(condition, function(error, result) {
        if (result || retries < 1) {
          // Once the changes have taken place continue with Pa11y testing
          waitOver();
        } else {
          retries -= 1;
          setTimeout(function() {
            waitUntil(condition, retries, waitOver);
          }, 200);
        }
      });
    };

    // The script to manipulate the page must be run with page.evaluate to be run within the context of the page
    page.evaluate(function() {
      let user = document.querySelector('#email');
      let password = document.querySelector('#password');
      let submit = document.querySelector('form');

      user.value = 'bmdw_test_user1@cogapp.com';
      password.value = 'password';

      submit.submit();

    }, function() {

      // Use the waitUntil function to set the condition, number of retries and the callback
      waitUntil(function() {
        return window.location.href !== 'http://bmdw.arnold.office.cogapp.com/login';
      }, 20, next);

    });
}

async.series({

  // Desktop tests
  desktop_dashboard: test_desktop.run.bind(test_desktop,'http://bmdw.arnold.office.cogapp.com/'),
  desktop_match_list: test_desktop.run.bind(test_desktop,'http://bmdw.arnold.office.cogapp.com/patient/5/matchdr'),
  desktop_add_patient: test_desktop.run.bind(test_desktop,'http://bmdw.arnold.office.cogapp.com/patient/add'),
  desktop_patient_list: test_desktop.run.bind(test_desktop,'http://bmdw.arnold.office.cogapp.com/patient/my/list'),
  desktop_edit_patient: test_desktop.run.bind(test_desktop,'http://bmdw.arnold.office.cogapp.com/patient/update/3'),

  // Tablet tests
  tablet_dashboard: test_tablet.run.bind(test_tablet,'http://bmdw.arnold.office.cogapp.com/'),
  tablet_match_list: test_tablet.run.bind(test_tablet,'http://bmdw.arnold.office.cogapp.com/patient/5/matchdr'),
  tablet_add_patient: test_tablet.run.bind(test_tablet,'http://bmdw.arnold.office.cogapp.com/patient/add'),
  tablet_patient_list: test_tablet.run.bind(test_tablet,'http://bmdw.arnold.office.cogapp.com/patient/my/list'),
  tablet_edit_patient: test_tablet.run.bind(test_tablet,'http://bmdw.arnold.office.cogapp.com/patient/update/3')
}, function(error, results) {
  if (error) {
    return console.error(error.message);
  }

  // Write out desktop reports

  fs.writeFile("pa11y_report_desktop_dashboard.md", markdownReporter.process(results.desktop_dashboard, 'Dashboard'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_desktop_match_list.md", markdownReporter.process(results.desktop_match_list, 'Match list'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_desktop_add_patient.md", markdownReporter.process(results.desktop_add_patient, 'Add patient'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_desktop_patient_list.md", markdownReporter.process(results.desktop_patient_list, 'Patient list'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_desktop_edit_patient.md", markdownReporter.process(results.desktop_edit_patient, 'Edit patient'), function(err) {
      if(err) {
          return console.log(err);
      }
  });

  // Write out tablet reports
  fs.writeFile("pa11y_report_tablet_dashboard.md", markdownReporter.process(results.tablet_dashboard, 'Dashboard'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_tablet_match_list.md", markdownReporter.process(results.tablet_match_list, 'Match list'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_tablet_add_patient.md", markdownReporter.process(results.tablet_add_patient, 'Add patient'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_tablet_patient_list.md", markdownReporter.process(results.tablet_patient_list, 'Patient list'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
  fs.writeFile("pa11y_report_tablet_edit_patient.md", markdownReporter.process(results.tablet_edit_patient, 'Edit patient'), function(err) {
      if(err) {
          return console.log(err);
      }
  });
});


