;(function (DOM) {
  'use strict'

  function app() {
    return {
      init: function () {
        console.log('app init')
        this.companyInfo()
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest()
        ajax.open('GET', '/company.json', true)
        ajax.send()
        ajax.addEventListener('readystatechange', this.getCompanyInfo, false)
      },

      getCompanyInfo: function getCompanyInfo() {
        if (!app().isReady.call(this)) return

        var data = JSON.parse(this.responseText)
        var $companyName = new DOM('[data-js="company-name"')
        var $companyPhone = new DOM('[data-js="company-phone"')
        $companyName.textContent = data.name
        $companyPhone.textContent = data.phone
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200
      }
    }
  }

  app().init()

  var $input = new DOM('input')
  console.log($input instanceof DOM)
})(window.DOM)
