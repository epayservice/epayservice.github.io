module.exports = {
  menu: {
    services: 'Servicii',
    fees: 'Comisioane',
    contactUs: 'Contactați-ne',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Administrare cont',
    bankTransfers: 'Transferuri bancare',
    personalIBAN: 'IBAN personal',
    personalUSAccount: 'Cont personal SUA',
    debitCards: 'Carduri de debit',
    affiliatePayouts: 'Plăți afiliați',
    payrollSolutions: 'Soluții salarizare',
    virtualCards: 'Carduri virtuale',
    localPayments: 'Transfer bancar local',
    sendMoneyToCard: 'Transferuri pe carduri',
    cashRemittance: 'Plăţi în numerar'
  },

  footer: {
    information: 'Informații',
    contactUs: 'Contactați-ne',
    signIn: 'Autentificare',
    affiliateProgram: 'Programul de afiliere',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Știri',
    terms: 'Termeni',
    userAgreement: 'Termeni și condiții utilizatori',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Rețele sociale',
    twitter: 'Twitter',
    copyRight: '© Copyright ePayService 2007–<span></span>, <br>Toate drepturile rezervate.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Direcție',
      fee: 'Comision',
      minFee: 'Comision minima',
      deposit: 'Depozite',
      withdraw: 'Retrageri',
      toWallet: 'în portofelul tău cu ePayService',
      toBankAccount: 'din contul tău bancar',
      toCompanyBankAccount: 'din contul bancar al firmei',
      toIndividualBankAccount: 'în contul bancar al unei persoane fizice'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, transfer local',
      title: 'Transfer bancar SUA (ACH & DirectDeposit, transfer local​)',
      linkText: 'Mai multe despre ACH & DirectDeposit',
      direction: 'Direcție',
      fee: 'Comision',
      item1title: 'Depozit ACH/Depozit direct',
      item2title: 'Depozit prin transfer local',
      item3title: 'Retragere ACH/Depozit direct',
      item4title: 'Retragere prin transfer local',
      toWallet: 'în portofelul tău cu ePayService',
      toAccount: 'către un cont personal sau de firmă prin intermediul unei banci americane'
    },

    sepa: {
      title: 'Transfer bancar în Euro',
      linkText: 'Mai multe despre SEPA',
    },

    localPayments: {
      forAllCurrencies: 'pentru toate monedele de mai jos',
      max: 'până la {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Zero',
    betweenEpayCustomers: 'Comision de transfer între clienții ePayService',
    posFree: 'Zero',
    pos: 'Comision tranzacții la POS',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Transferuri bancare de la angajatorii și partenerii dvs. de afaceri',
    posLimit: 'Până la {{value}} limită de cheltuit la POS',
    atmLimit: 'Până la {{value}} limită de cheltuit la ATM',
    cardLoadingFeesFree: 'Zero!',
    cardLoadingFees: 'Comision de încărcare card',
    atnWithdrawalFeesValue: 'Doar {{value}}',
    atnWithdrawalFeesDescr: 'Comision de retragere la ATM (per tranzacție)'
  },

  payments: 'Transferuri',
  cards: 'Card Preplătit',

  cardsList: {
    standart: {
      title: 'ePayService Card Standard',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Standard',
      moreAbout: 'Mai multe despre cardurile ePayService'
    },

    premium: {
      title: 'ePayService Card Premium',
      descr: 'Mastercard® Preplătit'
    },

    single: {
      title: 'ePayService Virtual Single',
      descr: 'Mastercard® Preplătit'
    },

    multi: {
      title: 'ePayService Virtual',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Virtual',
      moreAbout: 'Mai multe despre ePayService Virtual'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Emitere & activare Card ePayService Mastercard® Standard în {{ value }}',
    cardIssuanceAndActivationVirtual: 'Emitere & activare Card ePayService Mastercard® Virtual în {{ value }}',
    monthlyMaintenance: 'Taxa lunară de întreținere',
    minimumLoadLimit: 'Limită minimă de încărcare zilnică',
    maximumDailyLoadLimit: 'Limită maximă de încărcare zilnică',
    currencyExchange: 'Schimb valutar (comision FX)',
    ATMWithdrawalFeePerTransaction: 'Comision retragere ATM per tranzacție',
    maximumNumberOfLoadsPerDay: 'Număr maxim de încărcări pe zi',
    maximumBalance: 'Sold maxim',
    ATMBalanceInquiry: 'Interogare sold la ATM',
    regularMail: 'Poștă',
    expressDelivery: 'Livrare expres',
    maximumCumulativeLoadValuePerYear: 'Maximum cumulative load value per year',
    onlinePurchases: 'Cumpărături POS / Online',
    maximumAmountOfActiveCards: 'Număril maxim de carduri active'
  },

  important: 'Atenție!',
  cardValidPeriod: 'Cardul va fi valabil timp de 3 ani',

  deliveryMethod: 'Metoda de livrare',

  free: 'GRATUIT',

  virtual: {
    controlPurchases: 'Controlați-vă cumpărăturile',
    useCard: 'Utilizați un card virtual reîncărcabil',
    dailyPurchaseLimit: 'Limită zilnică de cumpărături de {{ sum }} EUR',
    instantLoad: 'Încărcare imediată gratuită',
    freeUnload: 'Descărcare gratuită în contul ePayService',
    noMonthlyFee: 'Nici o taxă lunară'
  },

  appDownload: {
    title: 'Flexibilitate totală',
    text: 'Administrați Portofelul ePayService prin dispozitivul dvs. preferat',
    downloadText: 'Utilizați sistemul de plăți Online.ePayServices din aplicație',
    openFreeAccount: 'Deschideți cont gratuit'
  }
}
