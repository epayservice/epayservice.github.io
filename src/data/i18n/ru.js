module.exports = {
  menu: {
    services: 'Услуги',
    fees: 'Тарифы',
    contactUs: 'Обратная связь',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Управление счетом',
    bankTransfers: 'Денежные переводы',
    personalIBAN: 'Персональный IBAN',
    personalUSAccount: 'Персональный US счет',
    debitCards: 'Банковские карты',
    affiliatePayouts: 'Выплаты партнерских програм',
    payrollSolutions: 'Зарплатные проекты',
    virtualCards: 'Виртуальные карты',
    localPayments: 'Локальные переводы',
    sendMoneyToCard: 'Денежные переводы на карты',
    cashRemittance: 'Выплаты наличными'
  },

  footer: {
    information: 'Общая информация',
    contactUs: 'Обратная связь',
    signIn: 'Вход в личный кабинет',
    affiliateProgram: 'Партнерская программа',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Новости',
    terms: 'Юридическая информация',
    userAgreement: 'Пользовательское соглашение',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Социальные сети',
    twitter: 'Twitter',
    copyRight: '© Copyright ePayService 2007–<span></span>, <br>Все права защищены.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Направление',
      fee: 'Комиссия',
      minFee: 'Мин. комиссия',
      deposit: 'Входящий',
      withdraw: 'Исходящий',
      toWallet: 'на кошелек в ePayService',
      toBankAccount: 'на собственный счет в банке',
      toCompanyBankAccount: 'на счет юрлица в банке',
      toIndividualBankAccount: 'на счёт физического лица в банке'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, Domestic Wire',
      title: 'Денежные переводы по США (ACH & DirectDeposit, Domestic Wire)',
      linkText: 'Подробнее о ACH & DirectDeposit',
      direction: 'Направление',
      fee: 'Комиссия',
      item1title: 'Входящий ACH/DirectDeposit',
      item2title: 'Входящий Domestic Wire',
      item3title: 'Исходящий ACH/DirectDeposit',
      item4title: 'Исходящий Domestic Wire',
      toWallet: 'на кошелек в ePayService',
      toAccount: 'на счет физлица или юрлица в банке US'
    },

    sepa: {
      title: 'Денежные переводы в Евро',
      linkText: 'Что такое SEPA?',
    },

    localPayments: {
      forAllCurrencies: 'Для всех валют ниже',
      max: 'до {{value}}'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Бесплатно!',
    betweenEpayCustomers: 'Переводы между пользователями ePayService без комиссий',
    posFree: 'Бесплатно!',
    pos: 'Комиссия на оплату покупок и услуг в интернет и офлайн(POS)',
    bankTransfersFee: '{{value}}, минимум {{min}}',
    bankTransfersDescr: 'Входящий банковский платеж на ваш кошелек ePayService от ваших партнеров и нанимателей',
    posLimit: 'До {{value}} лимит на покупки POS',
    atmLimit: 'До {{value}} лимит на транзакции в ATM',
    cardLoadingFeesFree: 'Бесплатно!',
    cardLoadingFees: 'Перевод средств с вашего кошелька на вашу карту ePayService',
    atnWithdrawalFeesValue: 'Всего {{value}}',
    atnWithdrawalFeesDescr: 'За транзакцию снятия через банкоматы по всему миру'
  },

  payments: 'Платежи',
  cards: 'Карты',

  cardsList: {
    standart: {
      title: 'Дебетовая карта Standart',
      descr: 'Mastercard® Debit',
      tabName: 'Дебетовая карта ePayService Mastercard® Standart',
      moreAbout: 'Подробнее про карты ePayService'
    },

    premium: {
      title: 'Дебетовая карта Premium',
      descr: 'Mastercard® Prepaid'
    },

    single: {
      title: 'Виртуальная карта Single',
      descr: 'Mastercard® Virtual'
    },

    multi: {
      title: 'Виртуальная карта',
      descr: 'Mastercard® Debit',
      tabName: 'Виртуальная карта ePayService Mastercard® Virtual',
      moreAbout: 'Подробнее про карты ePayService Virtual'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Выпуск карты ePayService Mastercard® Standart в {{ value }}',
    cardIssuanceAndActivationVirtual: 'Выпуск карты ePayService Mastercard® Virtual в {{ value }}',
    monthlyMaintenance: 'Месячная абонентская плата за обслуживание',
    minimumLoadLimit: 'Минимальная сумма пополнения',
    maximumDailyLoadLimit: 'Максимальная сумма пополнения',
    currencyExchange: 'Конвертация валюты (FX) для платежей в локальных валютах',
    ATMWithdrawalFeePerTransaction: 'Комиссия за снятие средств через банкомат',
    maximumNumberOfLoadsPerDay: 'Максимальное количество транзакций пополнения (день)',
    maximumBalance: 'Максимальный доступный баланс',
    ATMBalanceInquiry: 'Запрос состояния баланса через банкомат',
    regularMail: 'Обычная почта',
    expressDelivery: 'Курьерская доставка',
    maximumCumulativeLoadValuePerYear: 'Максимальное значение кумулятивной нагрузки в год',
    onlinePurchases: 'Комиссия за покупки в сети',
    maximumAmountOfActiveCards: 'Максимальное количество активных карт'
  },

  important: 'Внимание!',
  cardValidPeriod: 'Срок действия карты составляет 3 года',

  deliveryMethod: 'Способ доставки карты',

  free: 'БЕСПЛАТНО',

  virtual: {
    controlPurchases: 'Покупки под вашим контролем',
    useCard: 'Пополняемая виртуальная карта',
    dailyPurchaseLimit: 'Покупки на сумму до {{ sum }} USD в день',
    instantLoad: 'Моментальное бесплатное пополнение',
    freeUnload: 'Бесплатный вывод средств обратно на счет',
    noMonthlyFee: 'Без абонентской платы'
  },

  appDownload: {
    title: 'Настоящая мобильность',
    text: 'Управляйте своим кошельком в ePayService с вашего любимого устройства',
    downloadText: 'Вся мощь расчетной системы Online.ePayServices в ваших руках',
    openFreeAccount: 'Бесплатная регистрация'
  }
}
