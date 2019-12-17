export const iPadRentPrice = 29
export const androidRentPrice = 19
export const proPlanPrice = 39
export const licensePrice = 3

export const totalProPrice = (tabletCount, tabletPrice = 0) =>
  Math.max(0, tabletCount - 10) * licensePrice +
  tabletCount * tabletPrice +
  proPlanPrice

export const tabletPrice = rent => {
  switch (rent) {
    case 'ipad':
      return iPadRentPrice

    case 'android':
      return androidRentPrice

    default:
      return 0
  }
}
