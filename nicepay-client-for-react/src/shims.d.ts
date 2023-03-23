interface IAuthNice {
  requestPay(param: {
    amount: number
    buyerName?: string
    buyerTel?: string
    buyerEmail?: string
    clientId: string
    currency?: 'KRW' | 'USD' | 'CNY'
    disableEdgeChk?: boolean
    disableScroll?: boolean
    goodsName: string
    language?: 'KO' | 'EN' | 'CN'
    logoImgUrl?: string
    mallReserved?: string
    method:
      | 'card'
      | 'bank'
      | 'directCard'
      | 'vbank'
      | 'cellphone'
      | 'naverpayCard'
      | 'kakaopay'
      | 'kakaopayCard'
      | 'kakaopayMoney'
      | 'samsungpayCard'
      | 'payco'
      | 'ssgpay'
      | 'cardAndEasyPay'
    orderId: string
    returnCharSet?: 'utf-8' | 'euc-kr'
    returnUrl: string
    skinType?: 'red' | 'green' | 'purple' | 'gray' | 'dark'
    useEscrow?: boolean
    fnError?: (result: { errorMsg: string }) => any
  })
}

declare global {
  export const AUTHNICE: IAuthNice
}

interface Window {
  AUTHNICE: IAuthNice
}
