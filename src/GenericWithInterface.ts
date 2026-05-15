interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: number;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWtach {
  heartRate: string;
  stopWatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

const poorDeveloper: Developer<
  BrandCharaWtach,
  {
    brand: "Yamaha";
    enginee: "200c";
  }
> = {
  name: "Mr. Poor",
  salary: 20000,
  device: {
    brand: "Lenovo",
    model: "A21",
    releasedYear: 2010,
  },
  smartWatch: {
    heartRate: "2000",
    stopWatch: true,
  },
};
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 25000,
  device: {
    brand: "Hp",
    model: "x321",
    releasedYear: 2020,
  },
  smartWatch: {
    heartRate: "5000",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
};
