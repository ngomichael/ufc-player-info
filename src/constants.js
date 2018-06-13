import _ from "lodash";

export const ROUTES = {
  frontPage: "/",
  fighterInfo: "/fighterInfo",
  //Colon in react router means this path will match anything that starts with
  main: "/channels/:chanName"
};

export const fighterData = {
  Demetrious: {
    firstName: "Demetrious",
    lastName: "Johnson",
    country: "United States",
    record: "16-2-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Conor: {
    firstName: "Conor",
    lastName: "McGregor",
    country: "Ireland",
    record: "9-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Stipe: {
    firstName: "Stipe",
    lastName: "Miocic",
    country: "United States",
    record: "11-2",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Max: {
    firstName: "Max",
    lastName: "Holloway",
    country: "United States",
    record: "14-3",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Daniel: {
    firstName: "Daniel",
    lastName: "Cormier",
    country: "United States",
    record: "12-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Cody: {
    firstName: "Cody",
    lastName: "Garbrandt",
    country: "United States",
    record: "6-0",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Joanna: {
    firstName: "Joanna",
    lastName: "Jedrzejczyk",
    country: "Poland",
    record: "8-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Tyron: {
    firstName: "Tyron",
    lastName: "Woodley",
    country: "United States",
    record: "8-0",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Jose: {
    firstName: "Jose",
    lastName: "Aldo",
    country: "Brazil",
    record: "8-2",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  },

  Dominick: {
    firstName: "Dominick",
    lastName: "Cruz",
    country: "United States",
    record: "8-1",
    headerOpacity: "1",
    strikesLandedPerMinute: _.random(0, 100),
    strikeDifferential: _.random(0, 100),
    knockdownsLanded: _.random(0, 100),
    submissionAttempts: _.random(0, 100),
    submissions: _.random(0, 100),
    totalStrikesLanded: _.random(0, 100)
  }
};
