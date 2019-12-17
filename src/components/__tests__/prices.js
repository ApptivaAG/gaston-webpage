import { totalProPrice, tabletPrice } from '../prices'

describe('Calc pro prices without devices', () => {
  it('Normal case', () => {
    expect(totalProPrice(15)).toBe(54)
  })

  it('0 tablets', () => {
    expect(totalProPrice(0)).toBe(39)
  })

  it('1 tablet', () => {
    expect(totalProPrice(1)).toBe(39)
  })

  it('10 tablets', () => {
    expect(totalProPrice(10)).toBe(39)
  })

  it('50 tablets', () => {
    expect(totalProPrice(50)).toBe(159)
  })
})

describe('Calc pro prices with devices', () => {
  it('Normal case', () => {
    expect(totalProPrice(15, 9)).toBe(189)
  })

  it('0 tablets', () => {
    expect(totalProPrice(0, 9)).toBe(39)
  })

  it('1 tablet', () => {
    expect(totalProPrice(1, 19)).toBe(58)
  })

  it('10 tablets', () => {
    expect(totalProPrice(10, 29)).toBe(329)
  })

  it('50 tablets', () => {
    expect(totalProPrice(50, 19)).toBe(1109)
  })
})

describe('Get tablet price', () => {
  it('iPad', () => {
    expect(tabletPrice('ipad')).toBe(29)
  })
  it('android', () => {
    expect(tabletPrice('android')).toBe(19)
  })
  it('other', () => {
    expect(tabletPrice('other')).toBe(0)
  })
})
