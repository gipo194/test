# TO DO list for development of MDL

Annotate each with Priority and Severity by using "[P1 S1]" notation, as follows:
P1 - Must fix in this build
P2 - Fix it if time
P3 - Put off til the next release

S1 - Crashes and burns, There is NO workaround
S2 - Fails, but there is a workaround
S3 - Appears wonky (color/misspelling/font/layout)
S4 - Nice to have

## Things Shaun needs help with accomplishing
### For the project
* [P1] Must make an estimate of this work ASAP.

### In Sencha
* [P2 S3] The Search button is all the way to the bottom of the MeterForm.  Please move it up to where it is easier to click.
* [P2 S2] and click it after keying in a meter number and pressing Enter.

* [P1 S3] Rename the entire app to MDL instead of "test".

* [P1 S3] Column widths in MeterReadsGrid should be automatically sized to the greatest width of either the header or the column content.
  It's okay to leave unused space on the right side.

* [P2 S4] I want to use MeterReadsGrid as a class which I can inherit from, because it is column-header agnostic and I will re-use it for every grid of data.

* [P1S1] Add the information panels.  Figure out how they can appear in the UI the best.
  Display them right after searching for a meter:
  * Billing Address
  * Service Address
  * Meter Information
  * Acronyms

## Things Shaun can/should do by himself

### In Sencha
* [P1 S1] There are five search types in MeterForm.  Make these call five differing web methods per MDL specs.
  Some of the types just look up what meter number should be used, then do a MeterID search.
  At least outline it first with pseudocode comments.

* [P1 S1] Split the Reads tab up into three reads types
  * Normal reads grid
  * Complete the Skeleton reads grid (currently hidden)
  * Complete the Raw reads grid (currently hidden)

* [P1 S1] Complete the Meter Info tab (example U005168857)

* [P1 S1] Complete the Flags tab

* [P1 S1] Complete the On Demand Reads tab

### In C# webservice
* [P1 S1] Put the MetaData into every method.
* [P2 S4] use datatypes and talk about them in the MetaData.

### in Oracle
* [P2 S4] Use datatypes instead of making everything a string column.



## Unassigned/new Items

* 
