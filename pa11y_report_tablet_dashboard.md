# Welcome to Pa11y

## Results for Dashboard:
* __Warning:__ Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.I
 * #wrapper > div > div > div > ul > li > ul > li > a > i
 * `<i class="fa fa-btn fa-sign-out"></i>`

* __Error:__ The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired
 * #content > div > div > section:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > table
 * `<table class="table"> ...</table>`

* __Warning:__ If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary
 * #content > div > div > section:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > table
 * `<table class="table"> ...</table>`

* __Warning:__ If this table is a data table, consider using a caption element to the table element to identify this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption
 * #content > div > div > section:nth-child(2) > div > div:nth-child(2) > div > div:nth-child(1) > table
 * `<table class="table"> ...</table>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.24:1. Recommendation: change background to #e32323.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #google-visualization-errors-0 > span > span
 * `<span style="font-size: 1.1em; color: black; font-weight: bold; cursor: pointer; padding-left: 10px; text-align: right; vertical-align: top;">×</span>`

* __Warning:__ Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
 * #google-visualization-errors-0 > span > span
 * `<span style="font-size: 1.1em; color: black; font-weight: bold; cursor: pointer; padding-left: 10px; text-align: right; vertical-align: top;">×</span>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 3.24:1. Recommendation: change background to #e32323.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #google-visualization-errors-2 > span > span
 * `<span style="font-size: 1.1em; color: black; font-weight: bold; cursor: pointer; padding-left: 10px; text-align: right; vertical-align: top;">×</span>`

* __Warning:__ Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
 * #google-visualization-errors-2 > span > span
 * `<span style="font-size: 1.1em; color: black; font-weight: bold; cursor: pointer; padding-left: 10px; text-align: right; vertical-align: top;">×</span>`


## Summary:
* 3 Errors
* 5 Warnings
* 0 Notices
