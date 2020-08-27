console.log("Hello")

// const transactions = []

// let incomeAmount = 0

// console.log($("#income-amount").val())

// $("#income-amount").on("submit", (event) => {
//     event.preventDefault()

//     incomeAmount = $("#income-amount").val()
// })

// console.log(incomeAmount)

const incomeSubmit = (event) => {
    console.log(event)
    event.preventDefault()
}

$('#income').on('submit', incomeSubmit())
