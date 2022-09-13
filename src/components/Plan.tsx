import 'preact'
import type { JSX } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { currency } from 'src/utils'

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

const Plan = ({ children }: { children: JSX.Element }) => {
  const init = globalThis.location
    ? Number(globalThis.location.search.split('=').at(-1))
    : 0

  const [value, setValue] = useState<Input>(init as Input)

  useEffect(() => {
    globalThis.history.pushState(null, '', `?turnover=${value}`)
  }, [value])

  return (
    <>
      {children}
      <label for="turnover">
        <dl>
          <dt>Monatlicher Gaston-Umsatz / Betrieb {value != 3 && 'bis zu'}</dt>
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
            <a class="button-link" href="individuell/">
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
            <a class="button-link" href={`order-pay/${value}`}>
              Order|Pay anfragen
            </a>
          </div>
        </>
      )}
    </>
  )
}

export default Plan
