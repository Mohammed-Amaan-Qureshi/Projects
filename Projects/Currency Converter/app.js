const dropDown = document.querySelectorAll(".dropDown select")

let fromCurr = document.querySelector(".from select")
let toCurr = document.querySelector(".to select")

let fromCurrency = document.querySelector("#fromCurrency")
let toCurrency = document.querySelector("#toCurrency")

let message = document.querySelector(".msg")

const btn = document.querySelector("button")
// for(code in countryList){
    //     console.log(code,countryList[code])
    // }
    
    for(let select of dropDown){
        for(currCode in countryList){
            let newOption = document.createElement("option") 
            newOption.innerText = currCode 
            newOption.value = currCode
            if(select.name === "from" && currCode === "USD"){
                newOption.selected = "selected"
            }
            if(select.name === "to" && currCode === "AUD"){
                newOption.selected = "selected"
            }
            select.appendChild(newOption)
        }
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target)
        })
    }
    
    let updateFlag = (element)=>{
        let currCode = element.value
        let countryCode = countryList[currCode]
        
        let newImgSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
        
        let img = element.parentElement.querySelector("img")
        img.src = newImgSrc
    }
    
    btn.addEventListener("click", async (evt)=>{
        evt.preventDefault()
        
        let amount = document.querySelector(".amount input")
        let amountValue = amount.value
        if(amountValue === "" || amountValue < 1){
            amountValue = 1
            amount.value = "1"
        }
        console.log(amountValue)
        console.log(fromCurr.value,toCurr.value)
        
        const apiURL = `https://api.frankfurter.dev/v1/1999-01-04?base=${fromCurr.value}&symbols=${toCurr.value}`

        let response = await fetch(apiURL)

        let data = await response.json()
        // console.log(toCurrency.value)

        let finalData = data.rates[toCurrency.value]
        console.log(finalData)
        let finalAmount = amountValue * finalData

        message.textContent = `${amountValue} ${fromCurrency.value} = ${finalAmount} ${toCurrency.value}`
        console.log(finalAmount)
    })