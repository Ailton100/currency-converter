
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectMoney = document.getElementById("select-money")


// (INICIO)  TROCANDO O VALOR PARA CONVERTER.

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")

    const dolarToday = 5.58
    const euroToday = 6.49
    const realToday = 1
    const libraToday = 7.49
    const bitcoinToday = 0.00000001
    const francoToday = 7.98

    const convertedValue = inputCurrency / dolarToday


    if (selectMoney.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrency)
    }

    if (selectMoney.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency)
    }

    if (selectMoney.value == "euro") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency)
    }

    if (selectMoney.value == "libra") {

        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrency)
    }

    if (selectMoney.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrency)
    }


    if (selectMoney.value == "franco suiço") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("fr-FS", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrency)
    }

    // (FIM)  TROANCO O VALOR PARA CONVERTER.




    // (INICIO)  VALOR CONVERTIDO.

    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue / euroToday)
    }

    if (currencySelect.value == "real") {
        currencyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue / realToday)
    }

    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(convertedValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(convertedValue / bitcoinToday)
    }

    if (currencySelect.value == "franco suiço") {
        currencyValue.innerHTML = new Intl.NumberFormat("fr-FS", {
            style: "currency",
            currency: "CHF"
        }).format(convertedValue / francoToday)
    }

    // (FIM)  VALOR CONVERTIDO

    console.log(convertedValue)
}



// (INICIO)  TROCANDO A IMAGEM, TEXTO, PARA CONVERTER.

function changeMoney() {
    const nomeDaMoeda = document.querySelector(".nome-da-moeda")
    const convertImg = document.querySelector(".convert-img")
    const option = selectMoney.options[selectMoney.selectedIndex]


    nomeDaMoeda.innerHTML = option.text
    convertImg.src = option.getAttribute("data-img")
    setBackground(selectMoney)

    if (selectMoney.value == "real") {
        nomeDaMoeda.innerHTML = "Real brasileiro"
        convertImg.src = "./assets/real.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }

    if (selectMoney.value == "dolar") {
        nomeDaMoeda.innerHTML = "Dólar americano"
        convertImg.src = "./assets/dolar.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }

    if (selectMoney.value == "euro") {
        nomeDaMoeda.innerHTML = "Euro"
        convertImg.src = "./assets/euro.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }

    if (selectMoney.value == "libra") {
        nomeDaMoeda.innerHTML = "Libra"
        convertImg.src = "./assets/libra.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }


    if (selectMoney.value == "bitcoin") {
        nomeDaMoeda.innerHTML = "Bitcoin"
        convertImg.src = "./assets/bitcoin.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }

    if (selectMoney.value == "franco suiço") {
        nomeDaMoeda.innerHTML = "Franco suiço"
        convertImg.src = "./assets/franco.png"
        convertImg.src = option.getAttribute("data-img")
        setBackground(selectMoney)
    }

    // (FIM)  TROCANDO A IMAGEM, TEXTO, PARA CONVERTER.

}


// (INICIO)  VALOR IMAGEM, TEXTO, CONVERTIDO.

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const option = currencySelect.options[currencySelect.selectedIndex]




    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)

    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)
        currencyName.innerHTML = option.text
    }


    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real brasileiro"
        currencyImage.src = "./assets/real.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)
    }


    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)
    }


    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)
    }


    if (currencySelect.value == "franco suiço") {
        currencyName.innerHTML = "Franco suiço"
        currencyImage.src = "./assets/franco.png"
        currencyImage.src = option.getAttribute("data-img")
        setBackground(currencySelect)

    }

    // (FIM) VALOR IMAGEM, TEXTO, CONVERTIDO.


}


function setBackground(selectElement) {
    const option = selectElement.options[selectElement.selectedIndex]
    const img = option.getAttribute("data-img")
    selectElement.style.backgroundImage = `url(${img})`
    selectElement.style.backgroundRepeat = "no-repeat"
    selectElement.style.backgroundSize = "cover"
    selectElement.style.backgroundPosition = "center"
     
    convertValues()
}



selectMoney.addEventListener("change", changeMoney)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)