module.exports = {
  menu: {
    services: 'Usługi',
    fees: 'Opłaty',
    contactUs: 'Kontakt',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Zarządzanie kontem',
    bankTransfers: 'Przelewy bankowe',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'Karty debetowe',
    affiliatePayouts: 'Wypłaty w programach afiliacyjnych',
    payrollSolutions: 'Rozwiązania płacowe',
    virtualCards: 'Karty wirtualne',
    localPayments: 'Lokalny przelew bankowy',
    sendMoneyToCard: 'Przelewy na karty',
    cashRemittance: 'Płatności gotówkowe'
  },

  footer: {
    information: 'Informacje',
    contactUs: 'Kontakt',
    signIn: 'Logowanie',
    affiliateProgram: 'Program partnerski',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Aktualności',
    terms: 'Zasady',
    userAgreement: 'Umowa z użytkownikiem',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Dołącz do nas',
    twitter: 'Twitter',
    copyRight: '© Copyright MTACC Inc. DBA ePayService 2007–<span></span>, <br>wszelkie prawa zastrzeżone.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Kierunek',
      fee: 'Opłata',
      minFee: 'Opłata minimalna',
      deposit: 'Dodawanie',
      withdraw: 'Wypłacanie',
      toWallet: 'środków do Twojego portfela za pomocą usługi ePayService',
      toBankAccount: 'środków na Twoje konto bankowe',
      toCompanyBankAccount: 'środków na konto bankowe firmy',
      toIndividualBankAccount: 'na rachunek bankowy osoby fizycznej'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, przelew środków wewnątrz kraju',
      title: 'Przelewy pieniężne w Stanach Zjednoczonych (ACH & DirectDeposit, transfer wewnętrzny)',
      linkText: 'Więcej o ACH i przelewach bezpośrednich',
      direction: 'Kierunek',
      fee: 'Opłata',
      item1title: 'Przychodzące ACH/DirectDeposit',
      item2title: 'Przychodzący transfer wewnętrzny',
      item3title: 'Wychodzące ACH & DirectDeposit',
      item4title: 'Wychodzący transfer wewnętrzny',
      toWallet: 'do Twojego portfela za pomocą usługi ePayService',
      toAccount: 'na konto osobiste lub konto firmowe w banku amerykańskim'
    },

    sepa: {
      title: 'Przelewy pieniężne w Euro',
      linkText: 'Więcej na temat SEPA',
    },

    localPayments: {
      forAllCurrencies: 'dla wszystkich walut są dostępne poniżej',
      max: 'do {{value}}'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Brak',
    betweenEpayCustomers: 'Opłaty za przelewy między klientami ePayService',
    posFree: 'BEZPŁATNE',
    pos: 'Transakcje w punktach sprzedaży',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Przelewy bankowe od twoich pracodawców i partnerów biznesowych',
    posLimit: 'Do {{value}} limit w punktach sprzedaży',
    atmLimit: 'Do {{value}} limit w bankomatach',
    cardLoadingFeesFree: 'Brak!',
    cardLoadingFees: 'Opłat za doładowanie karty',
    atnWithdrawalFeesValue: 'Tylko {{value}}',
    atnWithdrawalFeesDescr: 'Opłata za wypłatę z bankomatu (za każdą transakcję)'
  },

  payments: 'Przelewy',
  cards: 'Karty przedpłacony',

  cardsList: {
    standart: {
      title: 'ePayService Card Standard',
      descr: 'Mastercard® Debit',
      tabName: 'Karta debetowa ePayService Mastercard® Standard',
      moreAbout: 'Więcej o kartach ePayService'
    },

    premium: {
      title: 'ePayService Card Premium',
      descr: 'Karta przedpłacona Mastercard®'
    },

    single: {
      title: 'ePayService Virtual Single',
      descr: 'Karta przedpłacona Mastercard®'
    },

    multi: {
      title: 'ePayService Virtual',
      descr: 'Mastercard® Debit',
      tabName: 'Karta debetowa ePayService Mastercard® Virtual',
      moreAbout: 'Więcej o kartach wirtualnych ePayService'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Wydanie i aktywacja karty ePayService Mastercard® Standard w {{ value }}',
    cardIssuanceAndActivationVirtual: 'Wydanie i aktywacja karty ePayService Mastercard® Virtual w {{ value }}',
    monthlyMaintenance: 'Miesięczna opłata eksploatacyjna',
    minimumLoadLimit: 'Minimalny dzienny limit doładowania',
    maximumDailyLoadLimit: 'Maksymalny dzienny limit doładowania',
    currencyExchange: 'Opłata za przewalutowanie',
    ATMWithdrawalFeePerTransaction: 'Opłata za wypłatę z bankomatu (za każdą transakcję)',
    maximumNumberOfLoadsPerDay: 'Maksymalna liczba doładowań dziennie',
    maximumBalance: 'Maksymalne saldo',
    ATMBalanceInquiry: 'Sprawdzenie salda w bankomacie',
    regularMail: 'Przesyłka pocztowa',
    expressDelivery: 'Przesyłka ekspresowa',
    maximumCumulativeLoadValuePerYear: 'Maksymalna łączna suma doładowań rocznie',
    onlinePurchases: 'Zakupy w punktach sprzedaży/w Internecie',
    maximumAmountOfActiveCards: 'Maksymalna liczba aktywnych kart'
  },

  important: 'Ważne!',
  cardValidPeriod: 'Karta będzie ważna przez 3 lata',

  deliveryMethod: 'SPOSÓB DOSTAWY',

  free: 'BEZ OPŁAT',

  virtual: {
    controlPurchases: 'Kontroluj swoje wydatki',
    useCard: 'Użyj karty wirtualnej z możliwością doładowania',
    dailyPurchaseLimit: 'Dzienny limit wydatków do {{ sum }} EUR',
    instantLoad: 'Natychmiastowe, bezpłatne doładowania',
    freeUnload: 'Darmowe przeniesienie salda karty na konto ePayService',
    noMonthlyFee: 'Bez opłat miesięcznych'
  },

  appDownload: {
    title: 'Prawdziwa elastyczność',
    text: 'Zarządzaj swoim portfelem ePayService za pośrednictwem ulubionego urządzenia',
    downloadText: 'Zasilaj ją przy pomocy systemu płatności Online.ePayServices',
    openFreeAccount: 'Załóż darmowe konto'
  }
}
