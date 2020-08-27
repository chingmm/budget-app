// Transactions List
const transactionAmounts = []
const transactionTexts = []

const render = () => {
    let $incomeDiv = $('<div>').addClass('income-transaction')
    
    let $incomeAmountItem = $incomeDiv.append($("<div>" + transactionAmounts[transactionAmounts.length - 1] + "</div>"))
    let $incomeTextItem = $incomeDiv.append($("<div>" + transactionTexts[transactionTexts.length - 1] + "</div>"))

    $incomeAmountItem.children().eq(0).addClass('amount')
    $('.income-items').children().eq(0).append($incomeAmountItem)

    $incomeTextItem.children().eq(1).addClass('text')
    $('.income-items').children().eq(0).append($incomeTextItem)


}


// Event Handler for Income Submission
const incomeSubmit = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log($(event.currentTarget))
    // console.log($('#income-amount').val())
    // console.log($('#income-text').val())
    // console.log($('.income-items'))

    transactionAmounts.push($('#income-amount').val())
    transactionTexts.push($('#income-text').val())
    $(event.currentTarget).trigger('reset')
    render()
    
    // let $incomeItem = $('.income-items').children().append($('<div>')).addClass('income-transaction')
    // $incomeItem.text($('#income-amount').val())
    // // .append('#income-text').val().addClass('income-transaction')
}

$('#income').on('submit', incomeSubmit)


// Event Handler for Expense Submission
const expenseSubmit = (event) => {
    event.preventDefault()
    // console.log(event)
    // console.log($(event.currentTarget))
    console.log($('#expense-amount').val())
    console.log($('#expense-text').val())

    // render()
}

$('#expense').on('submit', expenseSubmit)





