// Generated by LiveScript 1.6.0
(function(){
  var react, filter, whitebox, ref$, cut, money, naming, seed, refreshAccount, useNetwork, web3, check, getContainer, generateWallet, state;
  react = require('react');
  filter = require('prelude-ls').filter;
  whitebox = require('whitebox');
  ref$ = require('./tools.ls'), cut = ref$.cut, money = ref$.money;
  naming = require('./naming.ls');
  seed = require('./seed.ls');
  refreshAccount = require('./refresh-account.ls');
  useNetwork = require('./use-network.ls');
  web3 = require('./web3.ls');
  check = require('./pin.ls').check;
  getContainer = whitebox.getContainer, generateWallet = whitebox.generateWallet;
  state = {
    timeout: null
  };
  module.exports = function(arg$){
    var store, current, accounts, refresh, activePage, chooseAccount, manageAccounts, selectPage, pages, changeSeed, saveSeed, editSeed, cancelTry, enterPin, generate, activeMainnet, activeTestnet, use, useMainnet, useTestnet, children;
    store = arg$.store;
    if (store == null) {
      return null;
    }
    current = store.current, accounts = store.accounts;
    refresh = function(){
      return refreshAccount(web3(store), store, function(){});
    };
    activePage = function(page){
      if (current.page === page) {
        return 'active';
      }
    };
    chooseAccount = curry$(function(selected, event){
      return import$(current.account, selected);
    });
    manageAccounts = function(event){
      return current.page = 'accounts';
    };
    selectPage = curry$(function(name, event){
      return current.page = name;
    });
    pages = ['wallets', 'history'];
    changeSeed = function(event){
      state.timeout = clearTimeout(state.timeout);
      current.seed = event.target.value;
      return state.timeout = setTimeout(refresh, 2000);
    };
    saveSeed = function(){
      seed.set(current.seed);
      return current.savedSeed = true;
    };
    editSeed = function(){
      store.current.pin = "";
      return current.tryEditSeed = true;
    };
    cancelTry = function(){
      return current.tryEditSeed = false;
    };
    enterPin = function(e){
      store.current.pin = e.target.value;
      if (!check(store.current.pin)) {
        return;
      }
      cancelTry();
      return current.savedSeed = false;
    };
    generate = function(){
      if (!confirm("Are you sure you want to override the current seed?")) {
        return;
      }
      current.seed = generateWallet().mnemonic;
      return createAccount();
    };
    activeMainnet = store.current.network === 'mainnet' ? 'active' : '';
    activeTestnet = store.current.network === 'testnet' ? 'active' : '';
    use = curry$(function(network, event){
      return useNetwork(web3(store), store, network, function(){});
    });
    useMainnet = use('mainnet');
    useTestnet = use('testnet');
    return react.createElement('aside', {
      className: 'menu menu-1821002069'
    }, children = [
      react.createElement('div', {
        className: 'box-container'
      }, children = (function(){
        switch (false) {
        case current.tryEditSeed !== true:
          return react.createElement('div', {
            className: 'box'
          }, children = [
            react.createElement('div', {}, children = react.createElement('input', {
              onChange: enterPin,
              value: current.pin + "",
              placeholder: "Enter PIN"
            })), react.createElement('div', {}, '    '), react.createElement('button', {
              onClick: cancelTry
            }, ' Cancel')
          ]);
        case current.savedSeed !== false:
          return react.createElement('div', {
            className: 'box'
          }, children = [
            react.createElement('div', {
              className: 'title'
            }, children = [
              react.createElement('span', {}, ' Secret Text'), react.createElement('a', {
                onClick: generate,
                className: 'generate'
              }, ' (generate)')
            ]), react.createElement('textarea', {
              onChange: changeSeed,
              value: current.seed + "",
              placeholder: "Secret words"
            }), react.createElement('div', {}, children = react.createElement('button', {
              onClick: saveSeed
            }, ' Save'))
          ]);
        case current.savedSeed !== true:
          return react.createElement('div', {
            className: 'box'
          }, children = react.createElement('div', {}, children = react.createElement('button', {
            onClick: editSeed
          }, ' Edit seed')));
        }
      }())), store.current.network === 'mainnet' ? naming({
        store: store
      }) : void 8, react.createElement('div', {
        className: 'network'
      }, children = [
        react.createElement('span', {
          onClick: useMainnet,
          className: activeMainnet + ""
        }, ' MAINNET'), react.createElement('span', {}, ' |'), react.createElement('span', {
          onClick: useTestnet,
          className: activeTestnet + ""
        }, ' TESTNET')
      ]), react.createElement('div', {
        className: 'box-container'
      }, children = store.current.refreshing === false
        ? react.createElement('div', {
          className: 'box'
        }, children = [
          react.createElement('div', {
            className: 'title'
          }, ' Balance'), react.createElement('div', {
            className: 'balance'
          }, ' $ ' + money(current.balanceUsd)), react.createElement('button', {
            onClick: refresh
          }, ' Refresh')
        ])
        : react.createElement('div', {
          className: 'box'
        }, children = [
          react.createElement('div', {
            className: 'title'
          }, ' Loading...'), react.createElement('div', {
            className: 'balance'
          }, ' $ ' + money(current.balanceUsd))
        ]))
    ]);
  };
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
}).call(this);