export interface Updates {
    date: string;
    totalCases: number;
    casesToday: number;
    totalDeaths: number;
    deathsToday: number;
    activeCases: number;
    totalRecovered: number;
    testsToday: number;
    totalTested: number;
    positivePercentage: string;
    peopleTested: number;
  }
  

export interface CovidStatus {
    Total: number;
    Resolved: number;
    Deaths: number;
    hospitalized: number;
    ICU: number;
    ICU_ventilator: number;
  }
  