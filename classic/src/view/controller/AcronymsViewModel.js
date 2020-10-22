Ext.define("Test.view.AcronymsViewModel", {
  extend: "Ext.app.ViewModel",

  alias: "viewmodel.tree-list",
  
  formulas: {
    selectionText: function (get) {
      var selection = get("treelist.selection"),
        path;

      if (selection) {
        if (selection.raw.leaf) {
          path = selection.getPath("text");
          path = path.replace(/^\/Root/, "");
          meaning = selection.raw.Meaning;
          tooltip = selection.raw.Tooltip;
          text = selection.raw.text;
          ret = "";
          if (path.includes("Read Sources")) {
            ret = "Gateway " + text + "<br /><br />" + meaning;
          } else if (path.includes("Read Flags")) {
            ret = "Flag \"" + text + "\" stands for " + meaning;
          } else {
            ret = meaning + "<br /><br /><i>" + tooltip + "</i>";
          }
          return ret;
        }
      } else {
        return "No node selected";
      }
    },
  },

  stores: {
    navItems: {
      type: "tree",
      root: {
        expanded: true,
        children: [
          {
            text: "Read Sources",
            //iconCls: "x-fa fa-home",
            children: [
              { text: "2", Meaning: "AMR", leaf: true },
              { text: "5", Meaning: "Metretek", leaf: true },
              { text: "11", Meaning: "Mobile", leaf: true },
              { text: "17", Meaning: "Turtle", leaf: true },
              { text: "52", Meaning: "Manual", leaf: true },
              { text: "62", Meaning: "AMI", leaf: true },
              { text: "63", Meaning: "AMI Flags", leaf: true },
              { text: "64", Meaning: "AMI Interval", leaf: true },
              { text: "131", Meaning: "MV90", leaf: true },
            ],
          },
          {
            text: "Estimation Rules",
            //iconCls: "x-fa fa-home",
            children: [
              {
                text: "BDA",
                Meaning: "Bins Did Not Advance",
                Tooltip:
                  "Bins Did not Advance. An increase in consumption was reported as a change in the CUM read yet no change in the bin values was reported; all bin values are exactly the same as yesterday but CUM advanced.)",
                leaf: true,
              },
              {
                text: "CCU",
                Meaning: "Can't Calculate Usage",
                Tooltip:
                  "Cannot Calculate Usage. When a potential data error is identified by WAVE, the suspected values are not to be used in any future estimation calculations. Consumption calculations that normally require use of this questionable data are flagged CCU. (I.e. when today's read is Good and yesterday's read was Reset OR today is the first day a reading was received, today's usage is null.)",
                leaf: true,
              },
              {
                text: "CGR",
                Meaning: "Current Good Read",
                Tooltip:
                  "Current Good Read. The VEE process will attempt to estimate energy usage for up to the number of days in the CGR threshold. The estimation process starts with the last good AMI read and uses previous usage patterns to determine the absolute energy usage for each time period to estimate the current CUM and Bin values. If within the estimation window is within which a valid AMI read is received, the VEE process will re-estimate the previous estimated reads. The re-estimation process uses a set of actual reads to bracket or bound the estimates. The previous usage patterns are then used to allocate the true energy usage over the period of time where no AMI data was available. These new CUM and Bin values based on percent allocation calculations are tagged as CGR.",
                leaf: true,
              },
              {
                text: "CIO",
                Meaning: "Change in Offset",
                Tooltip:
                  "Change In Offset. When the difference in consumption values for two successive reads does not agree with the difference in TOU Bin values, a new offset is calculated. A determination is made by the VEE process to determine the cause for the offset change. If the cause is due to a reset, some sort of billing adjustment is probably necessary in the near future and the discrepancy is flagged in MDW as CIO.",
                leaf: true,
              },
              {
                text: "DNR",
                Meaning: "Demand did not Reset",
                Tooltip: "",
                leaf: true,
              },
              {
                text: "DRM",
                Meaning: "Demand Read Missing",
                Tooltip: "Wave demand validation",
                leaf: true,
              },
              {
                text: "E01",
                Meaning: "Estimation based on 1 week old read",
                Tooltip:
                  "Use the week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "E02",
                Meaning: "Estimation based on 2 week old read",
                Tooltip:
                  "Use the two-week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "E03",
                Meaning: "Estimation based on 3 week old read",
                Tooltip:
                  "Use the three-week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "E04",
                Meaning: "Estimation based on 4 week old read",
                Tooltip:
                  "Use the four-week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "E05",
                Meaning: "Eight-day-old daily good read",
                Tooltip:
                  "Use the eight-week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "E06",
                Meaning: "Week-old estimated daily read",
                Tooltip:
                  "Use the week-old daily good read for the same customer, location, and daytype.",
                leaf: true,
              },
              {
                text: "ECF",
                Meaning: "Excessive Carry Forward",
                Tooltip:
                  "Missing demand reads that would otherwise be flagged with an estimation rule of DRM, but where the number of missing demand reads in a billing cycle equals or exceeds the value specified in the Excessive Carry Forward (ECF) threshold (OPTION_ID 214) for the DAILY_DEMAND_EST_ONLY estimation rule",
                leaf: true,
              },
              {
                text: "EPB",
                Meaning: "Estimated Partial Bins",
                Tooltip:
                  "Estimated Partial Bins. Only a partial read was available today. The time stamp of the TOU read was prior to 9:00 pm. The consumption from the time stamp to midnight is estimated using a 7-day or 14 day old read as the proxy.",
                leaf: true,
              },
              {
                text: "ETE",
                Meaning: "Estimation Threshold Overflow Estimation",
                Tooltip:
                  "Estimation Threshold overflow Estimation. This setting allows WAVE to continue to estimate all readings irrespective of the ETO threshold if so desired. This functionality is governed by a threshold defined as ESTIMATION THRESHOLD OVERFLOW ESTIMATION (ETE) which will limit the number of consecutive days of estimation is performed on meters exceeding the ETO limit. These records are tagged with estimation rule ETE rather than with the rule used to perform the estimation.",
                leaf: true,
              },
              {
                text: "ETO",
                Meaning: "Estimation Threshold Overflow",
                Tooltip:
                  "Estimation Threshold Overflow (read status = G). If the number of days between the current good read and the last good read is greater than the CGR threshold limit, then the last good read is tagged ETO.",
                leaf: true,
              },
              {
                text: "IAR",
                Meaning: "Interval Adjusted Read",
                Tooltip:
                  "Estimation Threshold Overflow (read status = G). If the number of days between the current good read and the last good read is greater than the CGR threshold limit, then the last good read is tagged ETO.",
                leaf: true,
              },
              {
                text: "ICR",
                Meaning: "Incomplete Read",
                Tooltip:
                  "InComplete Read. The ICR flag occurs when a read is incomplete (i.e., one or more bins is missing) and the next day a partial read is received with all four bins being populated. WAVE cannot estimate the partial bins since yesterday had one or more null values; it then tags the current day's reads as an ICR.",
                leaf: true,
              },
              {
                text: "MBR",
                Meaning: "MBR-Meter Bins Reset",
                Tooltip:
                  "Meter and/or TOU Bins have Reset. The cumulative energy value as well as the TOU values reported by the AMI system indicates negative energy consumption. For this to take place the AMI module has been either partially or fully reset due to a hardware failure and a software failure has taken place causing the bins to decrement. Normally, replacement of the meter is necessary.",
                leaf: true,
              },
              {
                text: "MRP",
                Meaning: "Meter Reset Pending",
                Tooltip:
                  "Meter reset in the past 30 days and billing day the read is tagged MRP (Meter Reset Pending)",
                leaf: true,
              },
              {
                text: "MRS",
                Meaning: "Meter Reset",
                Tooltip:
                  "Meter ReSet. The cumulative energy value reported by the AMI system indicates negative energy consumption. For this to take place the AMI module has been reset due to a hardware failure and replacement of the meter is necessary.",
                leaf: true,
              },
              {
                text: "NHD",
                Meaning: "No Historical Data",
                Tooltip:
                  "No Historic Data. An allocate/estimate could not be made since the historical data was not available or did not meet strict rules to allow it to be used for estimating purposes.",
                leaf: true,
              },
              {
                text: "OUT",
                Meaning: "Zero Estimated Usage on Outage Day",
                Tooltip:
                  "Zero usage estimation on an outage day. When the Outage Flag parameter is on and a meter is de-energized for the entire day due to an outage, WAVE estimates usage as zero, sets the register read equal to the preceding day's register read, and uses the OUT estimation rule.",
                leaf: true,
              },
              {
                text: "PBR",
                Meaning: "Partial Bin Reset",
                Tooltip:
                  "Partial Bin Reset. AMI reads have been reported but the TOU values indicate negative energy consumption for one or more bins but are compensated by one of the other bins; there is no offset change.",
                leaf: true,
              },
              {
                text: "PDE",
                Meaning: "PDE-Partial, Did Not Estimate",
                Tooltip:
                  "Partial Did not Estimate. A bin allocation/estimate could not be made since the historical data was not available or did not meet strict rules to allow it to be used for estimating purposes.",
                leaf: true,
              },
              {
                text: "PGR",
                Meaning: "Previous Good Read",
                Tooltip: "Previous Good Read.",
                leaf: true,
              },
              {
                text: "PSN",
                Meaning: "Power Status No",
                Tooltip:
                  "Power Status No zero estimation. Usage is estimated as zero and the register read is ser equal to the preceding day's register read. If USAGE_STATUS and POWER_STATUS are both equal to N, then WAVE uses the USN estimation rule.",
                leaf: true,
              },
              {
                text: "RNV",
                Meaning: "Rollover not Validated",
                Tooltip:
                  "Rollover Not Validated. Any time the CUM value or Bin value decrements from the previous day, a test for rollover must be made. The test is made by determining historical energy usage and comparing that usage with calculated usage for the current day assuming a rollover. If the current usage is less than X times the historical usage, a rollover is assumed (where X is the global parameter set for Rollover Value). Historical energy is evaluated by calculating a single day's usage for the last 7, 8, 14, 21, or 28 days (or other time frame dictated by the WAVE options applicable to this meter). If this historical usage can not be determined and a rollover may have taken place, the current reads are tagged RNV.",
                leaf: true,
              },
              {
                text: "RWO",
                Meaning: "Rollover With Offset",
                Tooltip:
                  "Rounding With Offset. An initial offset value was established. The AMI CUM read may have required nominal adjustment to account for rounding.",
                leaf: true,
              },
              {
                text: "RWR",
                Meaning: "Rounding With Rollover",
                Tooltip:
                  "Rounding With Rollover. The AMI read may have required nominal adjustment to account for rounding but because of a register rollover, a new offset value was established.",
                leaf: true,
              },
              {
                text: "RWT",
                Meaning: "Rounding Within Threshold",
                Tooltip:
                  "Rounding Within Threshold. The AMI CUM read required nominal adjustment to of the Cumulative Consumption account for rounding of the TOU Bins.",
                leaf: true,
              },
              {
                text: "SBA",
                Meaning: "Sunday Bins Advance",
                Tooltip:
                  "Sunday Bins Advance. On Sunday or Holiday, if usage found in non-expected bin then push back the bin read to previous day read.",
                leaf: true,
              },
              {
                text: "UIA",
                Meaning: "Usage for Inactive Meters",
                Tooltip: "Wave validation",
                leaf: true,
              },
              {
                text: "USN",
                Meaning: "Usage Status No",
                Tooltip:
                  "Usage Status No zero estimation. Usage is estimated as zero and the register read is set equal to the preceding day's register read.",
                leaf: true,
              },
              {
                text: "VME",
                Meaning: "Virtual Meter Exchange",
                Tooltip:
                  "Virtual Meter Reset. AMI reads have been reported but the TOU values indicate negative energy consumption and the offset calculation results in an offset change. For this to take place, a software failure has taken place causing the bins to decrement or reset to zero.",
                leaf: true,
              },
            ],
          },
          {
            text: "Read Flags",
            //iconCls: "x-fa fa-home",
            children: [
              { text: "A", Meaning: "Adjusted", leaf: true },
              { text: "G", Meaning: "Good", leaf: true },
              { text: "E", Meaning: "Estimated", leaf: true },
              { text: "M", Meaning: "Missing", leaf: true },
              { text: "N", Meaning: "No Read", leaf: true },
              { text: "P", Meaning: "Partial Read", leaf: true },
              { text: "R", Meaning: "Reset", leaf: true },
              { text: "S", Meaning: "Stale", leaf: true },
              { text: "I", Meaning: "Incomplete Read.", leaf: true },
            ],
          },
        ],
      },
    },
  },
});
