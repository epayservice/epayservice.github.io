module.exports = {
  menu: {
    services: 'Perkhidmatan',
    fees: 'Bayaran',
    contactUs: 'Hubungi Kami',
    faq: 'FAQ'
  },

  services: {
    accountManagement: 'Pengurusan Akaun',
    bankTransfers: 'Pindahan Wang',
    personalIBAN: 'Personal IBAN',
    personalUSAccount: 'Personal US Account',
    debitCards: 'Kad Debit',
    affiliatePayouts: 'Penyelesaian Penggajian',
    payrollSolutions: 'Pembayaran Ahli Gabungan',
    virtualCards: 'Kad Maya',
    localPayments: 'Pindahan Bank Tempatan',
    sendMoneyToCard: 'Pindahan ke kad',
    cashRemittance: 'Pembayaran tunai'
  },

  footer: {
    information: 'Maklumat',
    contactUs: 'Hubungi Kami',
    signIn: 'Daftar Masuk',
    affiliateProgram: 'Program Gabungan',
    openAPI: 'OpenAPI',
    developers: 'Developers',
    news: 'Berita',
    terms: 'Terma',
    userAgreement: 'Perjanjian Pengguna',
    cardholdersAgreement: 'ePayService Mastercard Cardholders Agreement',
    privacyPolicy: 'Privacy Policy',
    privacyNotice: 'Privacy Notice',
    legalAgreements: 'Legal Agreements',
    privacy: 'Privacy',
    followUs: 'Ikuti Kami',
    twitter: 'Twitter',
    copyRight: '© Hak milik MTACC Inc. DBA ePayService 2007–<span></span>, <br>Hak cipta terpelihara.',
    descr: '<p>ePayService is the trading name of MTACC Limited - Authorised and Regulated by the Malta Financial Services Authority under the Financial Institutions Act for the issuance of E-Money and the Provision of Payment Services</p><p>The ePayService Debit Card is issued by MTACC Ltd. pursuant to licence by Mastercard International.</p>'
  },

  fees: {
    common: {
      direction: 'Arah',
      fee: 'Yuran',
      minFee: 'Yuran minimum',
      deposit: 'Deposit',
      withdraw: 'Pengeluaran',
      toWallet: 'ke dompet anda dengan ePayService',
      toBankAccount: 'ke akaun bank anda',
      toCompanyBankAccount: 'ke akaun bank syarikat',
      toIndividualBankAccount: 'ke akaun bank individu'
    },

    moneyTransfersUS: {
      navText: 'ACH & DirectDeposit, Domestic Wire',
      title: 'Pindahan wang Amerika Syarikat (ACH & DirectDeposit, Domestic Wire)',
      linkText: 'Lebih lanjut mengenai ACH&DirectDeposit',
      direction: 'Arah',
      fee: 'Yuran',
      item1title: 'Deposit ACH/DirectDeposit',
      item2title: 'Deposit Domestic Wire',
      item3title: 'Pengeluaran ACH/DirectDeposit',
      item4title: 'Pengeluaran Domestic Wire',
      toWallet: 'ke dompet anda dengan ePayService',
      toAccount: 'ke akaun peribadi atau syarikat dengan bank AS'
    },

    sepa: {
      title: 'Pindahan Wang dalam Euro',
      linkText: 'Lebih lanjut mengenai SEPA',
    },

    localPayments: {
      forAllCurrencies: 'untuk semua mata wang di bawah',
      max: 'sehingga {{value}}'
    },

    crypto: {
      title: 'Crypto',
      descr: 'Currently we provide cryptocurrency exchange services only. This means that once you deposit cryptocurrency to the deposit address, we will exchange your cryptocurrency into USD, and credit USD to your ePayService wallet.'
    }
  },

  prepaidCards: {
    betweenEpayCustomersFree: 'Tiada',
    betweenEpayCustomers: 'Yuran komisen untuk pindahan antara pelanggan ePayService',
    posFree: 'PERCUMA',
    pos: 'Yuran transaksi POS',
    bankTransfersFee: '{{value}}, min {{min}}',
    bankTransfersDescr: 'Pindahan bank daripada majikan dan rakan kongsi perniagaan anda',
    posLimit: 'Sehingga {{value}} Had perbelanjaan POS',
    atmLimit: 'Sehingga {{value}} Had perbelanjaan ATM',
    cardLoadingFeesFree: 'Tiada!',
    cardLoadingFees: 'Yuran bebanan kad',
    atnWithdrawalFeesValue: 'Hanya {{value}}',
    atnWithdrawalFeesDescr: 'Yuran pengeluaran ATM (setiap transaksi)'
  },

  payments: 'Pindahan',
  cards: 'Kad Prabayar',

  cardsList: {
    standart: {
      title: 'kad ePayService Standard',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Standard',
      moreAbout: 'Lebih lanjut mengenai kad ePayService Standard'
    },

    premium: {
      title: 'Kad ePayService Premium',
      descr: 'Mastercard® Prabayar'
    },

    single: {
      title: 'Maya ePayService tunggal',
      descr: 'Mastercard® Prabayar'
    },

    multi: {
      title: 'Maya ePayService',
      descr: 'Mastercard® Debit',
      tabName: 'Debit ePayService Mastercard® Maya',
      moreAbout: 'Lebih lanjut mengenai maya ePayService'
    }
  },

  cardFeesTitles: {
    cardIssuanceAndActivationStandart: 'Pengeluaran Kad & Pengaktifan Mastercard® ePayService Standard {{ value }}',
    cardIssuanceAndActivationVirtual: 'Pengeluaran Kad & Pengaktifan ePayService Mastercard® Virtual {{ value }}',
    monthlyMaintenance: 'Yuran Penyelenggaraan Bulanan',
    minimumLoadLimit: 'Had Bebanan Harian Minimum',
    maximumDailyLoadLimit: 'Had Bebanan Harian Maksimum',
    currencyExchange: 'Pertukaran Mata Wang (Yuran FX)',
    ATMWithdrawalFeePerTransaction: 'Yuran Pengeluaran ATM setiap transaksi',
    maximumNumberOfLoadsPerDay: 'Bilangan Maksimum Bebanan setiap hari',
    maximumBalance: 'Baki Maksimum',
    ATMBalanceInquiry: 'Pertanyaan Baki',
    regularMail: 'Mel Biasa',
    expressDelivery: 'Penghantaran Ekspres',
    maximumCumulativeLoadValuePerYear: 'Nilai Bebanan Terkumpul Maksimum setiap tahun',
    onlinePurchases: 'POS/Pembelian Atas Talian',
    maximumAmountOfActiveCards: 'Jumlah maksimum kad aktif'
  },

  important: 'Penting!',
  cardValidPeriod: 'Kad akan sah selama 3 tahun',

  deliveryMethod: 'Pilih kaedah penghantaran anda',

  free: 'PERCUMA',

  virtual: {
    controlPurchases: 'Kawal pembelian anda',
    useCard: 'Gunakan Kad Maya Boleh Muat Semula',
    dailyPurchaseLimit: 'Had pembelian harian sehingga EUR {{ sum }}',
    instantLoad: 'Percuma isian segera',
    freeUnload: 'Percuma pengeluaran semula isian ke akaun ePayService',
    noMonthlyFee: 'Tiada yuran bulanan'
  },

  appDownload: {
    title: 'Fleksibiliti Sebenar',
    text: 'Urus Dompet ePayService Wallet anda melalui alat peranti kegemaran anda',
    downloadText: 'Dikuasakan oleh sistem pembayaran Online.ePayServices',
    openFreeAccount: 'Buka Akaun Percuma'
  }
}
