// Calculation portion for totals
let $incomeTotal = parseInt($('#income-total').text())
let $expenseTotal = parseInt($('#expense-total').text())
let $balanceTotal = parseInt($('#balance-total').text())


console.log(parseInt($('#income-total').text()))

console.log($incomeTotal + 4.7)
console.log($expenseTotal + 7)
console.log($balanceTotal)

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
    $('#income-total').text($incomeTotal += parseInt($('#income-amount').val()))
    $('#balance-total').text($balanceTotal += parseInt($('#income-amount').val()))
    $(event.currentTarget).trigger('reset')
    renderIncome()

}

$('#income').on('submit', incomeSubmit)


// Event Handler for Expense Submission
const expenseSubmit = (event) => {
    event.preventDefault()
    transactionExpenseAmounts.push($('#expense-amount').val())
    transactionExpenseTexts.push($('#expense-text').val())
    $('#expense-total').text($expenseTotal -= parseInt($('#expense-amount').val()))
    $('#balance-total').text($balanceTotal -= parseInt($('#expense-amount').val()))
    $(event.currentTarget).trigger('reset')
    renderExpense()
}

$('#expense').on('submit', expenseSubmit)


// API urls

// County and State
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME&for=county:*&in=state:*&key=89452c179f005fd7873c90db6fca27e755ee3466

// State
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME&for=state:*&key=89452c179f005fd7873c90db6fca27e755ee3466

// Housing cost distribution and median cost
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME,CP04_2014_2018_094E,CP04_2014_2018_095E,CP04_2014_2018_096E,CP04_2014_2018_097E,CP04_2014_2018_098E,CP04_2014_2018_099E,CP04_2014_2018_100E,CP04_2014_2018_101E&for=state:17&key=89452c179f005fd7873c90db6fca27e755ee3466




