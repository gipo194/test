Ext.define("Test.store.Acronyms", {
  extend: "Ext.data.Store",
  alias: "store.acronyms",
  data: {
    items: [
      {
        name: "tbReadSource",
        column: 0,
        columnSpan: 2,
        fontWeight: "Bold",
        text: "Read Source",
      },
      {
        name: "tb2",
        column: 0,
        text: "2",
      },
      {
        name: "tbAMR",
        column: 1,
        text: "AMR",
      },
      {
        name: "tb5",
        column: 0,
        text: "5",
      },
      {
        name: "tbMetertek",
        column: 1,
        text: "Metretek",
      },
      {
        name: "tb11",
        column: 0,
        text: "11",
      },
      {
        name: "tbMobile",
        column: 1,
        text: "Mobile",
      },
      {
        name: "tb17",
        column: 0,
        text: "17",
      },
      {
        name: "tbTurtle",
        column: 1,
        text: "Turtle",
      },
      {
        name: "tb52",
        column: 0,
        text: "52",
      },
      {
        name: "tbManual",
        column: 1,
        text: "Manual",
      },
      {
        name: "tbAMI1",
        column: 1,
        text: "AMI",
      },
      {
        name: "tbAMI2",
        column: 0,
        text: "62",
      },
      {
        name: "TbAmiFlags1",
        column: 1,
        text: "AMI Flags",
      },
      {
        name: "TbAmiFlags2",
        column: 0,
        text: "63",
      },
      {
        name: "TbAmiInterval1",
        column: 1,
        text: "AMI Interval",
      },
      {
        name: "TbAmiInterval2",
        column: 0,
        text: "64",
      },
      {
        name: "Tb131",
        column: 0,
        text: "131",
      },
      {
        name: "TbMv90",
        column: 1,
        text: "MV90",
      },
      {
        name: "tbEstimationRules",
        column: 0,
        columnSpan: 2,
        fontWeight: "Bold",
        text: "Estimation Rules",
      },
      {
        tooltip:
          "Bins Did not Advance. An increase in consumption was reported as a change in the CUM read yet no change in the bin values was reported; all bin values are exactly the same as yesterday but CUM advanced.)",
        name: "tbBDA",
        column: 0,
        text: "BDA",
      },
      {
        name: "tbBDADef",
        column: 1,
        text: "Bins Did Not Advance",
      },
      {
        tooltip:
          "Cannot Calculate Usage. When a potential data error is identified by WAVE, the suspected values are not to be used in any future estimation calculations. Consumption calculations that normally require use of this questionable data are flagged CCU. (I.e. when today's read is Good and yesterday's read was Reset OR today is the first day a reading was received, today's usage is null.)",
        name: "tbCCU",
        column: 0,
        text: "CCU",
      },
      {
        name: "tbCCUDef",
        column: 1,
        text: "Can't Calculate Usage",
      },
      {
        tooltip:
          "Current Good Read. The VEE process will attempt to estimate energy usage for up to the number of days in the CGR threshold. The estimation process starts with the last good AMI read and uses previous usage patterns to determine the absolute energy usage for each time period to estimate the current CUM and Bin values. If within the estimation window is within which a valid AMI read is received, the VEE process will re-estimate the previous estimated reads. The re-estimation process uses a set of actual reads to bracket or bound the estimates. The previous usage patterns are then used to allocate the true energy usage over the period of time where no AMI data was available. These new CUM and Bin values based on percent allocation calculations are tagged as CGR.",
        name: "tbCGR",
        column: 0,
        text: "CGR",
      },
      {
        name: "tbCGRDef",
        column: 1,
        text: "Current Good Read",
      },
      {
        tooltip:
          "Change In Offset. When the difference in consumption values for two successive reads does not agree with the difference in TOU Bin values, a new offset is calculated. A determination is made by the VEE process to determine the cause for the offset change. If the cause is due to a reset, some sort of billing adjustment is probably necessary in the near future and the discrepancy is flagged in MDW as CIO.",
        name: "tbCIO",
        column: 0,
        text: "CIO",
      },
      {
        name: "tbCIODef",
        column: 1,
        text: "Change in Offset",
      },
      {
        tooltip: "",
        name: "tbDNR",
        column: 0,
        text: "DNR",
      },
      {
        name: "tbDNRDef",
        column: 1,
        text: "Demand did not Reset",
      },
      {
        tooltip: "Wave demand validation",
        name: "tbDRM",
        column: 0,
        text: "DRM",
      },
      {
        name: "tbDRMDef",
        column: 1,
        text: "Demand Read Missing",
      },
      {
        tooltip:
          "Use the week-old daily good read for the same customer, location, and daytype.",
        name: "tbE01",
        column: 0,
        text: "E01",
      },
      {
        name: "tbE01Def",
        column: 1,
        text: "Estimation based on 1 week old read",
      },
      {
        tooltip:
          "Use the two-week-old daily good read for the same customer, location, and daytype.",
        name: "tbE02",
        column: 0,
        text: "E02",
      },
      {
        name: "tbE02Def",
        column: 1,
        text: "Estimation based on 2 week old read",
      },
      {
        tooltip:
          "Use the three-week-old daily good read for the same customer, location, and daytype.",
        name: "tbE03",
        column: 0,
        text: "E03",
      },
      {
        name: "tbE03Def",
        column: 1,
        text: "Estimation based on 3 week old read",
      },
      {
        tooltip:
          "Use the four-week-old daily good read for the same customer, location, and daytype.",
        name: "tbE04",
        column: 0,
        text: "E04",
      },
      {
        name: "tbE04Def",
        column: 1,
        text: "Estimation based on 4 week old read",
      },
      {
        tooltip:
          "Use the eight-week-old daily good read for the same customer, location, and daytype.",
        name: "tbE05",
        column: 0,
        text: "E05",
      },
      {
        name: "tbE05Def",
        column: 1,
        text: "Eight-day-old daily good read",
      },
      {
        tooltip:
          "Use the week-old daily good read for the same customer, location, and daytype.",
        name: "tbE06",
        column: 0,
        text: "E06",
      },
      {
        name: "tbE06Def",
        column: 1,
        text: "Week-old estimated daily read",
      },
      {
        tooltip:
          "Missing demand reads that would otherwise be flagged with an estimation rule of DRM, but where the number of missing demand reads in a billing cycle equals or exceeds the value specified in the Excessive Carry Forward (ECF) threshold (OPTION_ID 214) for the DAILY_DEMAND_EST_ONLY estimation rule",
        name: "tbECF",
        column: 0,
        text: "ECF",
      },
      {
        name: "tbECFDef",
        column: 1,
        text: "Excessive Carry Forward",
      },
      {
        tooltip:
          "Estimated Partial Bins. Only a partial read was available today. The time stamp of the TOU read was prior to 9:00 pm. The consumption from the time stamp to midnight is estimated using a 7-day or 14 day old read as the proxy.",
        name: "tbEPB",
        column: 0,
        text: "EPB",
      },
      {
        name: "tbEPBDef",
        column: 1,
        text: "Estimated Partial Bins",
      },
      {
        tooltip:
          "Estimation Threshold overflow Estimation. This setting allows WAVE to continue to estimate all readings irrespective of the ETO threshold if so desired. This functionality is governed by a threshold defined as ESTIMATION THRESHOLD OVERFLOW ESTIMATION (ETE) which will limit the number of consecutive days of estimation is performed on meters exceeding the ETO limit. These records are tagged with estimation rule ETE rather than with the rule used to perform the estimation.",
        name: "tbETE",
        column: 0,
        text: "ETE",
      },
      {
        name: "tbETEDef",
        column: 1,
        text: "Estimation Threshold Overflow Estimation",
      },
      {
        tooltip:
          "Estimation Threshold Overflow (read status = G). If the number of days between the current good read and the last good read is greater than the CGR threshold limit, then the last good read is tagged ETO.",
        name: "tbETO",
        column: 0,
        text: "ETO",
      },
      {
        name: "tbIARDef",
        column: 1,
        text: "Interval Adjusted Read",
      },
      {
        tooltip:
          "Estimation Threshold Overflow (read status = G). If the number of days between the current good read and the last good read is greater than the CGR threshold limit, then the last good read is tagged ETO.",
        name: "tbIAR",
        column: 0,
        _Width: 50,
        _HorizontalAlignment: "Right",
        text: "IAR",
      },
      {
        name: "tbETODef",
        column: 1,
        text: "Estimation Threshold Overflow",
      },
      {
        tooltip:
          "InComplete Read. The ICR flag occurs when a read is incomplete (i.e., one or more bins is missing) and the next day a partial read is received with all four bins being populated. WAVE cannot estimate the partial bins since yesterday had one or more null values; it then tags the current day's reads as an ICR.",
        name: "tbICR",
        column: 0,
        text: "ICR",
      },
      {
        name: "tbICRDef",
        column: 1,
        text: "Incomplete Read",
      },
      {
        tooltip:
          "Meter and/or TOU Bins have Reset. The cumulative energy value as well as the TOU values reported by the AMI system indicates negative energy consumption. For this to take place the AMI module has been either partially or fully reset due to a hardware failure and a software failure has taken place causing the bins to decrement. Normally, replacement of the meter is necessary.",
        name: "tbMBR",
        column: 0,
        text: "MBR",
      },
      {
        name: "tbMBRDef",
        column: 1,
        text: "MBR-Meter Bins Reset",
      },
      {
        tooltip:
          "Meter reset in the past 30 days and billing day the read is tagged MRP (Meter Reset Pending)",
        name: "tbMRP",
        column: 0,
        text: "MRP",
      },
      {
        name: "tbMRPDef",
        column: 1,
        text: "Meter Reset Pending",
      },
      {
        tooltip:
          "Meter ReSet. The cumulative energy value reported by the AMI system indicates negative energy consumption. For this to take place the AMI module has been reset due to a hardware failure and replacement of the meter is necessary.",
        name: "tbMRS",
        column: 0,
        text: "MRS",
      },
      {
        name: "tbMRSDef",
        column: 1,
        text: "Meter Reset",
      },
      {
        tooltip:
          "No Historic Data. An allocate/estimate could not be made since the historical data was not available or did not meet strict rules to allow it to be used for estimating purposes.",
        name: "tbNHD",
        column: 0,
        text: "NHD",
      },
      {
        name: "tbNHDDef",
        column: 1,
        text: "No Historical Data",
      },
      {
        tooltip:
          "Zero usage estimation on an outage day. When the Outage Flag parameter is on and a meter is de-energized for the entire day due to an outage, WAVE estimates usage as zero, sets the register read equal to the preceding day's register read, and uses the OUT estimation rule.",
        name: "tOUT",
        column: 0,
        text: "OUT",
      },
      {
        name: "tOUTDef",
        column: 1,
        text: "Zero Estimated Usage on Outage Day",
      },
      {
        tooltip:
          "Partial Bin Reset. AMI reads have been reported but the TOU values indicate negative energy consumption for one or more bins but are compensated by one of the other bins; there is no offset change.",
        name: "tbPBR",
        column: 0,
        text: "PBR",
      },
      {
        name: "tbPBRDef",
        column: 1,
        text: "Partial Bin Reset",
      },
      {
        tooltip:
          "Partial Did not Estimate. A bin allocation/estimate could not be made since the historical data was not available or did not meet strict rules to allow it to be used for estimating purposes.",
        name: "tbPDE",
        column: 0,
        text: "PDE",
      },
      {
        name: "tbPDEDef",
        column: 1,
        text: "PDE-Partial, Did Not Estimate",
      },
      {
        tooltip: "Previous Good Read.",
        name: "tbPGR",
        column: 0,
        text: "PGR",
      },
      {
        name: "tbPGRDef",
        column: 1,
        text: "Previous Good Read",
      },
      {
        tooltip:
          "Power Status No zero estimation. Usage is estimated as zero and the register read is ser equal to the preceding day's register read. If USAGE_STATUS and POWER_STATUS are both equal to N, then WAVE uses the USN estimation rule.",
        name: "tbPSN",
        column: 0,
        text: "PSN",
      },
      {
        name: "tbPSNDef",
        column: 1,
        text: "Power Status No",
      },
      {
        tooltip:
          "Rollover Not Validated. Any time the CUM value or Bin value decrements from the previous day, a test for rollover must be made. The test is made by determining historical energy usage and comparing that usage with calculated usage for the current day assuming a rollover. If the current usage is less than X times the historical usage, a rollover is assumed (where X is the global parameter set for Rollover Value). Historical energy is evaluated by calculating a single day's usage for the last 7, 8, 14, 21, or 28 days (or other time frame dictated by the WAVE options applicable to this meter). If this historical usage can not be determined and a rollover may have taken place, the current reads are tagged RNV.",
        name: "tbRNV",
        column: 0,
        text: "RNV",
      },
      {
        name: "tbRNVDef",
        column: 1,
        text: "Rollover not Validated",
      },
      {
        tooltip:
          "Rounding With Offset. An initial offset value was established. The AMI CUM read may have required nominal adjustment to account for rounding.",
        name: "tbRWO",
        column: 0,
        text: "RWO",
      },
      {
        name: "tbRWODef",
        column: 1,
        text: "Rollover With Offset",
      },
      {
        tooltip:
          "Rounding With Rollover. The AMI read may have required nominal adjustment to account for rounding but because of a register rollover, a new offset value was established.",
        name: "tbRWR",
        column: 0,
        text: "RWR",
      },
      {
        name: "tbRWRDef",
        column: 1,
        text: "Rounding With Rollover",
      },
      {
        tooltip:
          "Rounding Within Threshold. The AMI CUM read required nominal adjustment to of the Cumulative Consumption account for rounding of the TOU Bins.",
        name: "tbRWT",
        column: 0,
        text: "RWT",
      },
      {
        name: "tbRWTDef",
        column: 1,
        text: "Rounding Within Threshold",
      },
      {
        tooltip:
          "Sunday Bins Advance. On Sunday or Holiday, if usage found in non-expected bin then push back the bin read to previous day read.",
        name: "tbSBA",
        column: 0,
        text: "SBA",
      },
      {
        name: "tbSBADef",
        column: 1,
        text: "Sunday Bins Advance",
      },
      {
        tooltip: "Wave validation",
        name: "tbUIA",
        column: 0,
        text: "UIA",
      },
      {
        name: "tbUIADef",
        column: 1,
        text: "Usage for Inactive Meters",
      },
      {
        tooltip:
          "Usage Status No zero estimation. Usage is estimated as zero and the register read is set equal to the preceding day's register read.",
        name: "tbUSN",
        column: 0,
        text: "USN",
      },
      {
        name: "tbUSNDef",
        column: 1,
        text: "Usage Status No",
      },
      {
        tooltip:
          "Virtual Meter Reset. AMI reads have been reported but the TOU values indicate negative energy consumption and the offset calculation results in an offset change. For this to take place, a software failure has taken place causing the bins to decrement or reset to zero.",
        name: "tbVME",
        column: 0,
        text: "VME",
      },
      {
        name: "tbVMEDef",
        column: 1,
        text: "Virtual Meter Exchange",
      },
      {
        name: "tbReadFlags",
        column: 0,
        columnSpan: 2,
        fontWeight: "Bold",
        text: "Read Flags",
      },
      {
        name: "tbA",
        column: 0,
        text: "A",
        "Ext.ToolTip": "Adjusted",
      },
      {
        name: "tbADef",
        column: 1,
        text: "Adjusted",
      },
      {
        name: "tbG",
        column: 0,
        text: "G",
        "Ext.ToolTip": "Good Read.",
      },
      {
        name: "tbGDef",
        column: 1,
        text: "Good",
      },
      {
        name: "tbE",
        column: 0,
        text: "E",
        "Ext.ToolTip": "Estimated.",
      },
      {
        name: "tbEDef",
        column: 1,
        text: "Estimated",
      },
      {
        name: "tbM",
        column: 0,
        text: "M",
        "Ext.ToolTip": "Missing",
      },
      {
        name: "tbMDef",
        column: 1,
        text: "Missing",
      },
      {
        name: "tbN",
        column: 0,
        text: "N",
        "Ext.ToolTip": "No Read Available.",
      },
      {
        name: "tbNDef",
        column: 1,
        text: "No Read",
      },
      {
        name: "tbP",
        column: 0,
        text: "P",
        "Ext.ToolTip": "Partial, time of read was prior to 9 AM.",
      },
      {
        name: "tbPDef",
        column: 1,
        text: "Partial Read",
      },
      {
        name: "tbR",
        column: 0,
        text: "R",
        "Ext.ToolTip": "Reset.",
      },
      {
        name: "tbRDef",
        column: 1,
        text: "Reset",
      },
      {
        name: "tbS",
        column: 0,
        text: "S",
        "Ext.ToolTip": "Stale.",
      },
      {
        name: "tbSDef",
        column: 1,
        text: "Stale",
      },
      {
        name: "tbI",
        column: 0,
        text: "I",
        "Ext.ToolTip": "Incomplete Read.",
      },
      {
        name: "tbIDef",
        column: 1,
        text: "Incomplete Read.",
      },
    ],
  },
  proxy: {
    type: "memory",
    reader: {
      type: "json",
      rootProperty: "items",
    },
  },
});
