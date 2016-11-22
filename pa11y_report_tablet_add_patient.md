# Welcome to Pa11y

## Results for Add patient:
* __Warning:__ Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H49.I
 * #wrapper > div > div > div > ul > li > ul > li > a > i
 * `<i class="fa fa-btn fa-sign-out"></i>`

* __Warning:__ If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H71.SameName
 * #content > div > div > form
 * `<form action="/patient/add" method="POST"> <input type="h...</form>`

* __Error:__ This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of 4:1. Recommendation: change text colour to #e00.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail
 * #content > div > div > form > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > label > span
 * `<span style="color:red;">*</span>`

* __Warning:__ Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.
 * WCAG2AA.Principle1.Guideline1_4.1_4_3_F24.F24.FGColour
 * #content > div > div > form > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > label > span
 * `<span style="color:red;">*</span>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #cmv_dropdown
 * `<select class="form-control" id="cmv_dropdown" name="cmv_status"> ...</select>`

* __Warning:__ This select element does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
 * #ethnicity_dropdown
 * `<select class="form-control" id="ethnicity_dropdown" name="ethnicity"> ...</select>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #ethnicity_dropdown
 * `<select class="form-control" id="ethnicity_dropdown" name="ethnicity"> ...</select>`

* __Warning:__ This select element does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.
 * WCAG2AA.Principle4.Guideline4_1.4_1_2.H91.Select.Value
 * #diagnosis_dropdown
 * `<select class="form-control" id="diagnosis_dropdown" name="diagnosis"> ...</select>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #diagnosis_dropdown
 * `<select class="form-control" id="diagnosis_dropdown" name="diagnosis"> ...</select>`

* __Warning:__ This label's "for" attribute contains an ID that does not exist in the document fragment.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
 * #content > div > div > form > div:nth-child(3) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(5) > label
 * `<label class="control-label col-sm-3">Urgent</label>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #blood_group_dropdown
 * `<select class="form-control" id="blood_group_dropdown" name="blood_group"> ...</select>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #rhs_dropdown
 * `<select class="form-control" id="rhs_dropdown" name="rhs"> ...</select>`

* __Warning:__ If this selection list contains groups of related options, they should be grouped with optgroup.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H85.2
 * #gender_dropdown
 * `<select class="form-control" id="gender_dropdown" name="gender"> ...</select>`

* __Warning:__ This label's "for" attribute contains an ID that does not exist in the document fragment.
 * WCAG2AA.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment
 * #content > div > div > form > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(1) > label
 * `<label class="control-label">Run a cord search?</label>`


## Summary:
* 1 Errors
* 13 Warnings
* 0 Notices
