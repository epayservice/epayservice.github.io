module.exports = {
  menu: {
    services: 'Services',
    fees: 'Frais',
    contactUs: 'Contactez-nous',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Gestion de compte',
    bankTransfers: 'Virements bancaires',
    personalIBAN: 'IBAN personnel',
    personalUSAccount: 'Compte américain personnel',
    debitCards: 'Cartes de débit',
    affiliatePayouts: 'Paiements d’affiliation',
    payrollSolutions: 'Solutions salariales',
    virtualCards: 'Cartes virtuelles',
    localPayments: 'Virement bancaire local',
    sendMoneyToCard: 'Transferts vers les cartes',
    cashRemittance: 'Transferts d’argent'
  },

  footer: {
    information: 'Informations',
    contactUs: 'Contactez-nous',
    signIn: 'Connexion',
    affiliateProgram: 'Programme d’affiliation',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Nouvelles',
    terms: 'Conditions',
    userAgreement: 'Accord de l’utilisat{{ value }}',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Suivez-nous',
    twitter: 'Twitter',
    copyRight: '© Copyright ePayService 2007–<span></span>, <br>Tous droits réservés.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Direction',
      fee: 'Frais',
      minFee: 'Frais minimum',
      deposit: 'Dépôts',
      withdraw: 'Retraits',
      toWallet: 'sur votre portefeuille avec ePayService',
      toBankAccount: 'sur votre compte en banque',
      toCompanyBankAccount: 'sur votre compte en banque professionnel',
      toIndividualBankAccount: "sur le compte bancaire d'un particulier"
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, virements bancaires domestiques ',
      title: 'Virement de fonds américain (ACH & DirectDeposit^ virements bancaires domestiques)',
      linkText: 'Plus d’infos sur ACH & DirectDeposit',
      direction: 'Direction',
      fee: 'Frais',
      item1title: 'ACH entrant/Dépôt direct',
      item2title: 'Virements bancaires domestiques entrant',
      item3title: 'Sortant ACH/Dépôt direct',
      item4title: 'Sortant virements bancaires domestiques',
      toWallet: 'нsur votre portefeuille avec ePayService',
      toAccount: 'sur un compte personnel ou professionnel avec une banque américaine'
    },

    sepa: {
      title: 'Transfert de fonds en euros',
      linkText: 'Plus d’infos sur le SEPA',
    },

    localPayments: {
      forAllCurrencies: 'pour toutes les devises ci-dessous',
      max: 'jusqu’à {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Aucun',
    betweenEpayCustomers: 'Frais de commission pour transfert entre clients ePayService',
    posFree: 'GRATUIT',
    pos: 'Frais de transaction POS',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Virements bancaires de vos employeurs et partenaires d’affaires',
    posLimit: "Jusqu'à {{value}} limites quotidiennes POS",
    atmLimit: "Jusqu'à {{value}} limites quotidiennes GAB",
    cardLoadingFeesFree: 'Aucun!',
    cardLoadingFees: 'Frais de rechargement de carte',
    atnWithdrawalFeesValue: 'Seulement {{value}}',
    atnWithdrawalFeesDescr: 'Frais de retrait GAB (par transaction)'
  },

  payments: 'Transferts',
  cards: 'Prepaid Cards',

  cardsList: {
    standart: {
      title: 'ePayService Card Standard',
      descr: 'Mastercard® Débit',
      tabName: 'Débit ePayService Mastercard® Standard',
      moreAbout: 'Plus d’infos sur les cartes ePayServices'
    },

    premium: {
      title: 'ePayService Card Premium',
      descr: 'Mastercard® Prépayée'
    },

    single: {
      title: 'ePayService Virtual Single',
      descr: 'Mastercard® Prépayée'
    },

    multi: {
      title: 'ePayService Virtual',
      descr: 'Mastercard® Débit',
      tabName: 'Débit ePayService Mastercard® virtuel',
      moreAbout: 'Plus d’infos sur ePayService virtuelle'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Émission & activation de carte Mastercard® ePayService standard {{ value }}',
    cardIssuanceAndActivationVirtual: 'Émission & activation de carte Mastercard® ePayService virtual {{ value }}',
    monthlyMaintenance: 'Frais d’entretien mensuels',
    minimumLoadLimit: 'Limite de charge minimale quotidienne',
    maximumDailyLoadLimit: 'Limite de charge maximale quotidienne',
    currencyExchange: 'Change de devise (Frais FX)',
    ATMWithdrawalFeePerTransaction: 'Frais de retrait GAB, par transaction',
    maximumNumberOfLoadsPerDay: 'Nombre maximum de chargements par jour',
    maximumBalance: 'Solde maximal',
    ATMBalanceInquiry: 'Demande de solde GAB',
    regularMail: 'Courrier simple',
    expressDelivery: 'Livraison express',
    maximumCumulativeLoadValuePerYear: 'Valeur maximale de charge cumulée par an',
    onlinePurchases: 'Achats en ligne / POS',
    maximumAmountOfActiveCards: 'Quantité maximale de cartes actives'
  },

  important: 'Important!',
  cardValidPeriod: 'La carte sera valable pendant 3 ans',

  deliveryMethod: 'Mode de livraison',

  free: 'GRATUIT',

  virtual: {
    controlPurchases: 'Contrôlez vos achats',
    useCard: 'Utiliser une carte virtuelle rechargeable',
    dailyPurchaseLimit: 'Limite d’achat quotidienne {{ sum }} EUR',
    instantLoad: 'Charge instantanée gratuite',
    freeUnload: 'Décharge gratuite sur compte ePayService',
    noMonthlyFee: 'Pas de frais mensuels'
  },

  appDownload: {
    title: 'Une vraie flexibilité',
    text: 'Gérez votre portefeuille ePayService avec votre appareil préféré',
    downloadText: 'Recevez-le équipé du système de paiement Online.ePayServices',
    openFreeAccount: 'Ouvrez un compte gratuit'
  }
}
