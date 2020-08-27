// Transactions List
const transactionIncomeAmounts = []
const transactionIncomeTexts = []

const transactionExpenseAmounts = []
const transactionExpenseTexts = []

// Render portions
const renderIncome = () => {
    
    // Income submissions
    let $incomeDiv = $('<div>').addClass('income-transaction')
    
    let $incomeAmountItem = $incomeDiv.append($("<div>" + "$" + transactionIncomeAmounts[transactionIncomeAmounts.length - 1] + "</div>"))
    let $incomeTextItem = $incomeDiv.append($("<div>" + transactionIncomeTexts[transactionIncomeTexts.length - 1] + "</div>"))

    $incomeAmountItem.children().eq(0).addClass('amount')
    $('.income-items').append($incomeAmountItem)

    $incomeTextItem.children().eq(1).addClass('text')
    $('.income-items').append($incomeTextItem)

}

const renderExpense = () => {

    // Expense submissions
    let $expenseDiv = $('<div>').addClass('expense-transaction')
    
    let $expenseAmountItem = $expenseDiv.append($("<div>" + "$" + transactionExpenseAmounts[transactionExpenseAmounts.length - 1] + "</div>"))
    let $expenseTextItem = $expenseDiv.append($("<div>" + transactionExpenseTexts[transactionExpenseTexts.length - 1] + "</div>"))

    $expenseAmountItem.children().eq(0).addClass('amount')
    $('.expense-items').append($expenseAmountItem)

    $expenseTextItem.children().eq(1).addClass('text')
    $('.expense-items').append($expenseTextItem)

}


// Event Handler for Income Submission
const incomeSubmit = (event) => {
    event.preventDefault()
    transactionIncomeAmounts.push($('#income-amount').val())
    transactionIncomeTexts.push($('#income-text').val())
    $(event.currentTarget).trigger('reset')
    renderIncome()

}

$('#income').on('submit', incomeSubmit)


// Event Handler for Expense Submission
const expenseSubmit = (event) => {
    event.preventDefault()
    transactionExpenseAmounts.push($('#expense-amount').val())
    transactionExpenseTexts.push($('#expense-text').val())
    $(event.currentTarget).trigger('reset')
    renderExpense()
}

$('#expense').on('submit', expenseSubmit)





