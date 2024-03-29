module.exports = {
  menu: {
    services: 'Dienstleistungen',
    fees: 'Gebühren',
    contactUs: 'Kontaktieren Sie uns',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Kontoführung',
    bankTransfers: 'Banküberweisungen',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'Debitkarten',
    affiliatePayouts: 'Partnerauszahlungen',
    payrollSolutions: 'Lösungen für Gehaltsabrechnungen',
    virtualCards: 'Virtuelle Karten',
    localPayments: 'Banküberweisung',
    sendMoneyToCard: 'Überweisungen an Karten',
    cashRemittance: 'Barüberweisungen'
  },

  footer: {
    information: 'Informationen',
    contactUs: 'Kontaktieren Sie uns',
    signIn: 'Anmelden',
    affiliateProgram: 'Partnerprogramm',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Nachrichten',
    terms: 'Geschäftsbedingungen',
    userAgreement: 'Nutzervereinbarung',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Folgen Sie uns',
    twitter: 'Twitter',
    copyRight: '© Copyright ePayService 2007–<span></span>, <br>Alle Rechte vorbehalten.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Richtung',
      fee: 'Gebühr',
      minFee: 'Mindestgebühr',
      deposit: 'Einzahlungen',
      withdraw: 'Auszahlungen',
      toWallet: 'in Ihre Brieftasche mit ePayService',
      toBankAccount: 'auf Ihr Bankkonto',
      toCompanyBankAccount: 'auf ein Firmenkonto',
      toIndividualBankAccount: 'auf das Bankkonto einer Person'
    },

    moneyTransfersUS: {
      navText: 'ACH & Direktübertragun, Interne Übertragungen',
      title: 'Geldtransfer USA (ACH & Direktübertragung, Interne Übertragungen)',
      linkText: 'Mehr über ACH & Direktübertragung',
      direction: 'Richtung',
      fee: 'Gebühr',
      item1title: 'Eingehende  ACH/Direktübertragun',
      item2title: 'Eingehende Interne Übertragungen',
      item3title: 'Abbuchung ACH/Direktübertragun',
      item4title: 'Abbuchung  Interne Übertragungen',
      toWallet: 'in Ihre Brieftasche mit ePayService',
      toAccount: 'an ein persönliches Konto oder Firmenkonto bei einer US-Bank'
    },

    sepa: {
      title: 'Überweisung in Euro',
      linkText: 'Weitere Informationen zu SEPA',
    },

    localPayments: {
      forAllCurrencies: 'Für alle nachstehenden Währungen',
      max: 'bis zu {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Keine',
    betweenEpayCustomers: 'Kommissionsgebühr für den Transfer zwischen ePayService Kunden',
    posFree: 'KOSTENLOS',
    pos: 'POS-Transaktion',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Überweisungen von Ihren Arbeitgebern und Geschäftspartnern',
    posLimit: 'Bis zu {{value}} Limit für POS-Zahlungen',
    atmLimit: 'Bis zu {{value}} Limit für Abhebungen am Bankautomaten',
    cardLoadingFeesFree: 'Keine!',
    cardLoadingFees: 'Gebühren für die Kartenaufladung',
    atnWithdrawalFeesValue: 'Nur {{value}}',
    atnWithdrawalFeesDescr: 'Gebühren für Abhebungen an Bankautomaten (pro Transaktion)'
  },

  payments: 'Transfers',
  cards: 'Prepaidkarten',

  cardsList: {
    standart: {
      title: 'ePayService Card Standard',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Standard',
      moreAbout: 'Mehr über Epayservice karten'
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
      tabName: 'Debit ePayService Mastercard® Virtuell',
      moreAbout: 'Mehr über Epayservice Virtual'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Kartenausstellung & Aktivierung der ePayService Mastercard® Standard {{ value }}',
    cardIssuanceAndActivationVirtual: 'Kartenausstellung & Aktivierung der ePayService Mastercard® Virtual {{ value }}',
    monthlyMaintenance: 'Monatliche Wartungsgebühr',
    minimumLoadLimit: 'Tägliche Mindestbelastungsgrenze',
    maximumDailyLoadLimit: 'Tägliche maximale Belastungsgrenze',
    currencyExchange: 'Währungstausch (FX-Gebühr)',
    ATMWithdrawalFeePerTransaction: 'Geldautomaten-Gebühr pro Transaktion',
    maximumNumberOfLoadsPerDay: 'Maximale Anzahl Aufladungen pro Tag',
    maximumBalance: 'Höchstbetrag',
    ATMBalanceInquiry: 'Geldautomaten Saldoabfrage',
    regularMail: 'Regulärer Postversand',
    expressDelivery: 'Expresslieferung',
    maximumCumulativeLoadValuePerYear: 'Maximale kumulative Belastung pro Jahr',
    onlinePurchases: 'POS/Online-Käufe',
    maximumAmountOfActiveCards: 'Maximale Anzahl der aktiven Karten'
  },

  important: 'WICHTIG!',
  cardValidPeriod: 'Die Karte ist 3 Jahre lang gültig',

  deliveryMethod: 'Übertragungsmethode',

  free: 'KOSTENLOS',

  virtual: {
    controlPurchases: 'Kontrollieren Sie Ihre Einkäufe',
    useCard: 'Wiederaufladbare virtuelle Karte verwenden',
    dailyPurchaseLimit: 'Karte Tägliches Limit {{ sum }} EUR',
    instantLoad: 'Sofort kostenlos aufladbar',
    freeUnload: 'Kostenlos entladen auf ePayService Konto',
    noMonthlyFee: 'Keine monatliche Grundgebühr'
  },

  appDownload: {
    title: 'Echte Flexibilität',
    text: 'Verwalten Sie Ihr ePayService-Portemonnaie über Ihr bevorzugtes Gerät',
    downloadText: 'Starten Sie mit dem Online.ePayServices Bezahlsystem',
    openFreeAccount: 'Ein kostenloses Konto eröffnen'
  }
}
