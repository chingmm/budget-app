const incomeSubmit = (event) => {
    console.log(event)
    console.log($(event.currentTarget))
    console.log($('#income-amount').val())
    console.log($('#income-text').val())
    event.preventDefault()
}

$('#income').on('submit', incomeSubmit)
