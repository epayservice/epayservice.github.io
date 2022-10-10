module.exports = {
  menu: {
    services: '服务',
    fees: '费用',
    contactUs: '联系我们',
    faq: 'FAQ'
  },

  services: {
    accountManagement: '账户管理',
    bankTransfers: '银行转账',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'Debit Cards',
    affiliatePayouts: '联盟支付',
    payrollSolutions: '工资方案',
    virtualCards: 'Virtual Cards',
    localPayments: '本地银行转账',
    sendMoneyToCard: '匯款',
    cashRemittance: '现金支付'
  },

  footer: {
    information: '信息',
    contactUs: '联系我们',
    signIn: '注册',
    affiliateProgram: '联盟计划',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: '新聞',
    terms: '条款',
    userAgreement: '用户协议',
    cardholdersAgreement: 'ePayService Mastercard®持卡人协议',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: '关注我们',
    twitter: 'Twitter',
    copyRight: '©版权所有MTACC Inc. DBA ePayService 2007–<span></span>',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: '方向',
      fee: '費用',
      minFee: '最低费用',
      deposit: '使用',
      withdraw: '提现至',
      toWallet: 'ePayService存款至您的钱包',
      toBankAccount: '您的银行账户',
      toCompanyBankAccount: '公司银行账户',
      toIndividualBankAccount: '到個人的銀行賬戶'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit，国内电汇',
      title: '转账US (ACH & DirectDeposit，国内电汇)',
      linkText: 'ACH和DirectDeposit的更多详情',
      direction: '方向',
      fee: '費用',
      item1title: 'ACH / DirectDeposit 使用',
      item2title: '国内电汇使用',
      item3title: '提现至 ACH / DirectDeposit',
      item4title: '提现至国内电汇',
      toWallet: 'ePayService存款至您的钱包',
      toAccount: '美国的个人或公司银行账户'
    },

    sepa: {
      title: '欧元转账',
      linkText: '有关SEPA的更多内容',
    },

    localPayments: {
      forAllCurrencies: '对于以下所有货币',
      max: '最高 {{value}}'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'None',
    betweenEpayCustomers: 'Commission fee to transfer between ePayService customers',
    posFree: 'None',
    pos: 'POS transaction fee',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Bank transfers from your employers and business partners',
    posLimit: 'Up to {{value}} POS spend limit',
    atmLimit: 'Up to {{value}} ATM spend limit',
    cardLoadingFeesFree: 'None!',
    cardLoadingFees: 'Card loading fees',
    atnWithdrawalFeesValue: 'Just {{value}}',
    atnWithdrawalFeesDescr: 'ATM withdrawal fees (per transaction)'
  },

  payments: '转账',
  cards: 'Prepaid Cards',

  cardsList: {
    standart: {
      title: 'ePayService Card Standard',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Standard',
      moreAbout: 'More about ePayService cards'
    },

    premium: {
      title: 'ePayService Card Premium',
      descr: 'Mastercard® Prepaid'
    },

    single: {
      title: 'ePayService Virtual Single',
      descr: 'Mastercard® Prepaid'
    },

    multi: {
      title: 'ePayService Virtual',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Virtual',
      moreAbout: 'More about ePayService Virtual'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Card Issuance & Activation of the ePayService Mastercard® Standard {{ value }}',
    cardIssuanceAndActivationVirtual: 'Card Issuance & Activation of the ePayService Mastercard® Virtual {{ value }}',
    monthlyMaintenance: 'Monthly Maintenance Fee',
    minimumLoadLimit: 'Minimum Load Limit',
    maximumDailyLoadLimit: 'Maximum Daily Load Limit',
    currencyExchange: 'Currency Exchange (FX fee)',
    ATMWithdrawalFeePerTransaction: 'ATM Withdrawal Fee Per Transaction',
    maximumNumberOfLoadsPerDay: 'Maximum number of loads per day',
    maximumBalance: 'Maximum balance',
    ATMBalanceInquiry: 'ATM Balance Inquiry',
    regularMail: 'Regular Mail',
    expressDelivery: 'Express Delivery',
    maximumCumulativeLoadValuePerYear: 'Maximum cumulative load value per year',
    onlinePurchases: 'POS /Online Purchases',
    maximumAmountOfActiveCards: 'Maximum amount of active cards'
  },

  important: 'Important!',
  cardValidPeriod: '卡的有效期为3年',

  deliveryMethod: 'Delivery method',

  free: 'FREE',

  virtual: {
    controlPurchases: 'Control your purchases',
    useCard: '使用可重复充值的虚拟卡',
    dailyPurchaseLimit: 'Daily purchase limit {{ sum }} USD',
    instantLoad: 'Instant free-of-charge load',
    freeUnload: 'Free unload back to ePayService account',
    noMonthlyFee: 'No monthly fee'
  },

  appDownload: {
    title: '真正的灵活性',
    text: '通过您喜爱的设备管理您的ePayService钱包',
    downloadText: '用Online.ePayServices付款系统提供动力支持',
    openFreeAccount: '开立一个免费账户'
  }
}
