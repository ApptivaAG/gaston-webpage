import 'preact'
import type { JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'

type PricePerTurnover = {
  turnover: number
  price: number
}
type Input = 0 | 1 | 2 | 3
type InputToPrice = [
  PricePerTurnover,
  PricePerTurnover,
  PricePerTurnover,
  'more'
]
const inputToPricePerTurnover: InputToPrice = [
  { turnover: 1_000, price: 39 },
  { turnover: 5_000, price: 89 },
  { turnover: 20_000, price: 179 },
  'more',
]
const number = Intl.NumberFormat('de-CH')
const currency = Intl.NumberFormat('de-CH', {
  style: 'currency',
  currency: 'CHF',
  notation: 'compact',
  compactDisplay: 'short',
})

const Plan = ({ children }: { children: JSX.Element }) => {
  const [value, setValue] = useState<Input>(0)
  useEffect(() => console.log(value))

  return (
    <>
      {children}
      <label for="turnover">
        <dl>
          <dt>Monatlicher Transaktionsumsatz / Betrieb bis zu </dt>
          <dd>
            {value == 3
              ? `grösser als ${currency.format(
                  inputToPricePerTurnover[2].turnover
                )}.-`
              : `${currency.format(inputToPricePerTurnover[value].turnover)}.-`}
          </dd>
        </dl>
      </label>
      <input
        type="range"
        name="turnover"
        id="turnover"
        style="width: 80%;"
        min="0"
        max="3"
        value={value}
        onInput={({ target }) => setValue(target.value)}
      />
      {value == 3 ? (
        <>
          <dl>
            <dt>Monatliche Grundgebühr / Betrieb ٭ </dt>
            <dd class="price">Auf Anfrage</dd>
          </dl>
          <div>
            <a class="button-link" href="enterprise/">
              Individuell anfragen
            </a>
          </div>
        </>
      ) : (
        <>
          <dl>
            <dt>Monatliche Grundgebühr / Betrieb ٭ </dt>
            <dd class="price">CHF {inputToPricePerTurnover[value].price}.-</dd>
          </dl>
          <div>
            <a class="button-link" href={`pro/${value}`}>
              Bestell App anfragen
            </a>
          </div>
        </>
      )}
    </>
  )
}

export default Plan
