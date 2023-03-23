import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import { NICEPAY } from './nicepay.constants'

const { VITE_APP_NICEPAY_CLIENTID, VITE_APP_NICEPAY_RETURNURL } = import.meta
  .env

function App() {
  const [amount, setAmount] = useState(1000)
  const [method, setMethod] = useState(NICEPAY.METHOD.CARD)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    nicepaySubmit()
  }

  const nicepaySubmit = () => {
    window.AUTHNICE.requestPay({
      clientId: VITE_APP_NICEPAY_CLIENTID,
      method,
      orderId: uuid(),
      amount,
      goodsName: '나이스페이-상품',
      returnUrl: VITE_APP_NICEPAY_RETURNURL,
      fnError: result => {
        console.warn(result)
        console.warn(result.errorMsg)
      },
    })
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="amount">가격</label>
          <input
            type="number"
            id="amount"
            value={amount}
            min={1000}
            step={100}
            onChange={e => setAmount(+e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="method">결제방식</label>
          <select
            id="method"
            value={method}
            onChange={e => setMethod(e.target.value as NICEPAY.METHOD)}
          >
            {Object.values(NICEPAY.METHOD).map(value => {
              return (
                <option value={value} key={value}>
                  {value}
                </option>
              )
            })}
          </select>
        </div>
        <button type="submit">Nicepay 로 결제하기</button>
      </form>
    </div>
  )
}

export default App
