// Generated by LiveScript 1.6.0
(function(){
  var ethNet, config, current, mainnet, ethnamed, ropsten, testnet, type, enabled, token, image, usdInfo, out$ = typeof exports != 'undefined' && exports || this;
  ethNet = require('../../config.json').ethNet;
  config = require('../../blockchain/config.json');
  current = config[ethNet];
  out$.mainnet = mainnet = {
    decimals: 18,
    txFee: '0.0014',
    messagePrefix: 'Ethereum',
    mask: '0x0000000000000000000000000000000000000000',
    api: {
      provider: 'eth',
      web3Provider: 'https://mainnet.infura.io/UoCkF4efTrbEGU8Qpcs0',
      url: 'https://etherscan.io',
      apiUrl: 'https://api.etherscan.io/api'
    }
  };
  out$.ethnamed = ethnamed = {
    decimals: 18,
    txFee: '0.0014',
    messagePrefix: 'Ethereum',
    mask: '0x0000000000000000000000000000000000000000',
    api: {
      provider: 'eth',
      web3Provider: 'http://ethnamed.io:9000',
      url: 'http://ethnamed.io:8000',
      apiUrl: 'http://ethnamed.io:8000/api'
    }
  };
  out$.ropsten = ropsten = {
    decimals: 18,
    txFee: '0.0014',
    messagePrefix: 'Ethereum',
    mask: '0x0000000000000000000000000000000000000000',
    api: {
      provider: 'eth',
      web3Provider: current.web3Provider,
      url: current.etherscanBaseUrl,
      apiUrl: current.apiUrl
    }
  };
  out$.testnet = testnet = ropsten;
  out$.type = type = 'coin';
  out$.enabled = enabled = true;
  out$.token = token = 'eth';
  out$.image = image = './res/eth-ethnamed.png';
  out$.usdInfo = usdInfo = "url(https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,DASH,XEM&tsyms=USD).ETH.USD";
}).call(this);