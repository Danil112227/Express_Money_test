<template>
  <div class="exchange__block__wrapper">
    <WarningBlock 
      :content="this.warningBlock"
    />
    <div class="exchange__list">
      <div class="notice__message">
        <div class="list__title mb-5">
          <span>Ввод данных</span>
        </div>
        <div class="exchange">
          <div class="exchange__info">
            <div class="exchange__info__line pb-1">
              <span>
                Курс обмена
              </span>
              :
              <span>
                1 {{ selectedCurrency.title }} = {{ selectedCurrency.banks[selectedBankIndex].exchange }}
              </span>
            </div>
            <div class="exchange__info__line d-flex pb-5">
              <span>
                Резерв
              </span>
              :
              <span>
                {{ selectedCurrency.banks[selectedBankIndex].reserved }} {{ selectedCurrency.title }}
              </span>
              <a
                href="@/pages/MainPage.vue"
                class="window_join pl-1"
              >Не хватает?</a>
            </div>
          </div>
          <div class="bank__exchange">
            <ExchangeItem 
              :selected-currency="selectedCurrency"
            />
            <p class="mb-0">
              min.:{{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.min }} {{ selectedCurrency.title }} max.:{{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.max }} {{ selectedCurrency.title }}
            </p>
            <div class="exchange__input js__wrap__error">
              <AppInput 
                title="Сумма"
                @input="onCurrencyInput"
                :value="resultCurrencyExchange"
              />
              <div class="js__error js__min__cripto__error">
                <span data-id="sim1">
                  min.: {{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.min }}
                </span>
              </div>
              <div class="js__error js__max__cripto__error">
                <span data-id="sim1">
                  max.: {{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.max }}
                </span>
              </div>
            </div>
            <div class="arrow d-flex justify-center pb-7">
              <div class="arrow__bottom" />
            </div>
            <ExchangeBankItem 
              :selected-currency="selectedCurrency"
              :selected-bank-index="selectedBankIndex"
            />
            <p class="mb-0">
              min.:{{ selectedCurrency.banks[selectedBankIndex].calculatorData.curencyLimit.min }} {{ selectedCurrency.currency }} max.:{{ selectedCurrency.banks[selectedBankIndex].calculatorData.curencyLimit.max }} {{ selectedCurrency.currency }}
            </p>
            <div class="exchange__input js__wrap__error">
              <AppInput 
                title="Сумма"
                @input="onBankInput"
                :value="resultBankExchange"
              />
              <div class="js__error js__min__bank__error">
                <span data-id="sim1">
                  min.: {{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.min }}
                </span>
              </div>
              <div class="js__error js__max__bank__error">
                <span data-id="sim1">
                  max.: {{ selectedCurrency.banks[selectedBankIndex].calculatorData.criptoCurencyLimit.max }}
                </span>
              </div>
            </div>
            <AppInput 
              title="на карту"
            />
            <AppInput 
              title="ФИО получателя"
            />
            <div class="list__title mb-5">
              <span>Личные данные</span>
            </div>
            <AppInput 
              title="E-mail"
            />
            <AppInput 
              title="Телефон"
            />
            <div class="login__buttom pb-3">
              <input
                @click="onclick"
                type="submit"
                formtarget="_top"
                name="submit"
                class="rb_submit"
                value="Обменять"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import ExchangeItem from "@/components/ExchangeItem.vue"
    import WarningBlock from "@/components/WarningBlock.vue"
    import AppInput from "@/components/AppInput.vue"
    import ExchangeBankItem from "@/components/ExchangeBankItem.vue"
    
    export default {
        components: {
            ExchangeItem,
            WarningBlock,
            AppInput,
            ExchangeBankItem
        },
        props: {
          selectedCurrency: {
            type: Object,
            required: true
          },
          selectedBankIndex: {
            type: Number,
            required: true
          }
        },
        methods: {
          onCurrencyInput (input) {
            this.resultBankExchange = input * this.selectedCurrency.banks[this.selectedBankIndex].exchange

            let maxError = document.querySelector('.js__min__cripto__error')
            let minError = document.querySelector('.js__max__cripto__error')
            
            
            if (input < this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.min) {
              minError.style.display = "block" 
            } else {
              if (input > this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.min) {
                minError.style.display = "none"
              }
            if (input > this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.curencyLimit.max) {
              maxError.style.display = "block" 
            } else {
              if (input < this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.curencyLimit.max) {
                maxError.style.display = "none"
              }
            }
            }
            
          },
          onBankInput (input) {
            this.resultCurrencyExchange = input / this.selectedCurrency.banks[this.selectedBankIndex].exchange

            let maxError = document.querySelector('.js__min__bank__error')
            let minError = document.querySelector('.js__max__bank__error')
            if (input < this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.min) {
              minError.style.display = "block" 
            } else {
              if (input > this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.min) {
                minError.style.display = "none"
              }
            if (input > this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.max) {
              maxError.style.display = "block" 
            } else {
              if (input < this.selectedCurrency.banks[this.selectedBankIndex].calculatorData.criptoCurencyLimit.max) {
                maxError.style.display = "none"
              }
            }
            }
          },
          onclick () {
            console.log("it works!")
          },
        },
        computed: {
          banks () {
            return this.selectedCurrency.banks
          },
          calculatorData () {
            return this.banks[this.selectedBankIndex].calculatorData
          },
          warningBlock () {
            const alertName = this.banks[this.selectedBankIndex].alert
            return this.alerts[alertName]
          }
        },
        data(vm) {
          return {
            resultBankExchange: vm.selectedCurrency.banks[vm.selectedBankIndex].calculatorData.curencyLimit.min,
            resultCurrencyExchange: vm.selectedCurrency.banks[vm.selectedBankIndex].calculatorData.criptoCurencyLimit.min,
            sum: '',
            numberCard:'',
            name:'',
            comission:'',
            wallet:'',
            email:'',
            phoneNumber:'',
            alerts: {
              bigAlert: [
                {
                    content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                },
                {
                    accent: false,
                    content:"Оплата заявки происходит после зачисления средств на наш счет биржи Binance. Зачисление происходит при достижении транзакцией необходимого количества подтверждений сети. Количество подтверждений варьируется в зависимости от используемой валюты.",
                },
                {
                    accent: false,
                    content:"Оплата может быть произведена путем осуществления внутрибанковского перевода, курьером путем внесения наличных средств в кассу банка, а так же при помощи оплаты со стороннего банка. Для уточнения информации, обращайтесь к операторам на сайте.",
                },
                {
                    accent: false,
                    content:"Как правило, средства поступают в течение 2-15 минут после оплаты.",
                },
                {
                    accent: false,
                    content:"В редких случаях зачисление банковского перевода может проходить до 24 часов с момента произведения оплаты.",
                },
                {
                    accent: false,
                    content:"При пополнении через кассу банка зачисление может занять до 3 (трех) часов с момента внесения средств.",
                },
                {
                    accent: false,
                    content:"Зачисление средств на кредитные карты может происходить дольше обычного. Сроки зависят от Вашего банка.",
                },
                {
                    accent: false,
                    content:"Курс фиксируется по бирже Binance.",
                },
                {
                    accent: false,
                    content:"В целях противодействия легализации доходов, полученных преступным путем, и финансированию терроризма обменные пункты проводят AML-проверки поступающих от клиентов транзакций.",
                },
                {
                    accent: false,
                    content:"В случае, если транзакция будет идентифицирована как высокорискованная (суммарный объем активов с высоким риском 50% и более,), обменный пункт может приостановить обменную операцию до проведения проверки в соответствии со стандартами FATF. Данные транзакции обрабатываются согласно п. 5.25.-5.25.4 правил ОП.",
                },
              ],
              simpleAlert: [
                {
                    content:"Данная операция производится администратором в ручном режиме и занимает от 5 до 60 минут в рабочее время.",
                },
                {
                    accent: false,
                    content:"Оплата заявки происходит после зачисления средств на наш счет биржи Binance. Зачисление происходит при достижении транзакцией необходимого количества подтверждений сети. Количество подтверждений варьируется в зависимости от используемой валюты.",
                },
                {
                    accent: false,
                    content:"Оплата может быть произведена путем осуществления внутрибанковского перевода, курьером путем внесения наличных средств в кассу банка, а так же при помощи оплаты со стороннего банка. Для уточнения информации, обращайтесь к операторам на сайте.",
                },
                {
                    accent: false,
                    content:"Как правило, средства поступают в течение 2-15 минут после оплаты.",
                },
                {
                    accent: false,
                    content:"В редких случаях зачисление банковского перевода может проходить до 24 часов с момента произведения оплаты.",
                },
                {
                    accent: false,
                    content:"При пополнении через кассу банка зачисление может занять до 3 (трех) часов с момента внесения средств.",
                },
                {
                    accent: false,
                    content:"Зачисление средств на кредитные карты может происходить дольше обычного. Сроки зависят от Вашего банка.",
                },
                {
                    accent: false,
                    content:"Курс фиксируется по бирже Binance.",
                },
              ],
            },
          }
        }
    }
</script>

<style>
    .notice__message {
        margin-bottom: 20px;
        padding: 20px 20px 20px 20px;
        max-width: 1130px;
        background: #fff;
        box-shadow: 0 0 5px #e1e9f2;
        border-radius: 4px;
    }

    .exchange__block__wrapper {
        width: 34%;
    }

    .exchange__list__title {
        margin: 0 0 10px 0;
        font: 600 20px/20px 'IBM Plex Sans', sans-serif !important;
        color: #000;
        padding: 2px 0 2px 10px;
        border-left: 3px solid #f1c613;
    }

    .bank__exchange {
      font: 14px/1.3em 'IBM Plex Sans', sans-serif;
    }

    .list__title {
        font: 600 20px/20px 'IBM Plex Sans', sans-serif !important;

    }

    .notice__message ul li {
        display: block;
        background: url(@/assets/liarr.png) no-repeat 0 4px;
        padding: 0 0 5px 12px;
        font-size: 14px;
    }
    .notice__message ul li p {
        margin-bottom: 0;
    }

    .exchange__info__line {
        font: 14px/1.3em 'IBM Plex Sans', sans-serif;
        color: #000000;
    }

    .js__wrap__error {
      position: relative;
    }

    .js__error {
      display: none;
      position: absolute;
      z-index: 10;
      top: 85%;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      height: auto;
      color: #dd5b5b;
      background: #f8dfdf;
      border-radius: 3px;
      padding: 5px;
      font: 12px 'IBM Plex Sans', sans-serif;
    }

    .arrow__bottom {
      background: url(@/assets/b_arr.png) no-repeat center top;
      padding: 30px 0 0 0;
  }  
</style>