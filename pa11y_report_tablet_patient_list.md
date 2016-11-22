# Welcome to Pa11y

## Results for Patient list:
* __Warning:__ Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.I
 * #wrapper > div > div > div > ul > li > ul > li > a > i
 * `<i class="fa fa-btn fa-sign-out"></i>`

* __Warning:__ This label's "for" attribute contains an ID that does not exist in the document fragment.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
 * #active_patients > div > div > div:nth-child(1) > div:nth-child(1) > div > div > label:nth-child(2)
 * `<label class="radio-inline"> ...</label>`

* __Error:__ This text input element does not have a name available to an accessibility API. Valid names are: label element, title attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
 * #active_patients > div > div > div:nth-child(1) > div:nth-child(2) > div > input
 * `<input type="text" class="form-control filter-pid" placeholder="Search by patient ID">`

* __Error:__ This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.F68
 * #active_patients > div > div > div:nth-child(1) > div:nth-child(2) > div > input
 * `<input type="text" class="form-control filter-pid" placeholder="Search by patient ID">`

* __Warning:__ If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary
 * #active_patients > div > div > div:nth-child(4) > div > table
 * `<table class="table fixed-head table-striped table-fixed-header patients_table floatThead-table" style="border-collapse: collapse; border: 0px none rgb(128, 128, 128); display: table; width: 1108px; margin: 0px; table-layout: fixed;"><colgroup><col s...`

* __Warning:__ If this table is a data table, consider using a caption element to the table element to identify this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption
 * #active_patients > div > div > div:nth-child(4) > div > table
 * `<table class="table fixed-head table-striped table-fixed-header patients_table floatThead-table" style="border-collapse: collapse; border: 0px none rgb(128, 128, 128); display: table; width: 1108px; margin: 0px; table-layout: fixed;"><colgroup><col s...`

* __Warning:__ If this table is a data table, consider using a caption element to the table element to identify this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption
 * #active_patients > div > div > div:nth-child(4) > table
 * `<table class="table fixed-head table-striped table-fixed-header patients_table" summary="List of active patients" style="table-layout: fixed; min-width: 1108px;"><colgroup><col style="width: 65...</table>`

* __Warning:__ This label's "for" attribute contains an ID that does not exist in the document fragment.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
 * #inactive_patients > div > div > div:nth-child(1) > div:nth-child(1) > div > div > label:nth-child(2)
 * `<label class="radio-inline"> ...</label>`

* __Error:__ This text input element does not have a name available to an accessibility API. Valid names are: label element, title attribute.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.InputText.Name
 * #inactive_patients > div > div > div:nth-child(1) > div:nth-child(2) > div > input
 * `<input type="text" class="form-control filter-pid" placeholder="Search by patient ID">`

* __Error:__ This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.F68
 * #inactive_patients > div > div > div:nth-child(1) > div:nth-child(2) > div > input
 * `<input type="text" class="form-control filter-pid" placeholder="Search by patient ID">`

* __Warning:__ If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary
 * #inactive_patients > div > div > div:nth-child(4) > div > table
 * `<table class="table table-responsive fixed-head table-striped table-fixed-header patients_table floatThead-table" style="border-collapse: collapse; border: 0px none rgb(128, 128, 128); display: table; width: 100px; margin: 0px; table-layout: auto;"><...`

* __Warning:__ If this table is a data table, consider using a caption element to the table element to identify this table.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption
 * #inactive_patients > div > div > div:nth-child(4) > div > table
 * `<table class="table table-responsive fixed-head table-striped table-fixed-header patients_table floatThead-table" style="border-collapse: collapse; border: 0px none rgb(128, 128, 128); display: table; width: 100px; margin: 0px; table-layout: auto;"><...`

* __Error:__ This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H73.3.LayoutTable
 * #inactive_patients > div > div > div:nth-child(4) > table
 * `<table class="table table-responsive fixed-head table-striped table-fixed-header patients_table" summary="List of inactive patients" style="table-layout: auto;"><colgroup></colgroup> ...</table>`


## Summary:
* 5 Errors
* 8 Warnings
* 0 Notices
