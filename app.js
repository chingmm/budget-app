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

    $incomeAmountItem.children().eq(0).addClass('amount').addClass('green')
    $('.income-items').append($incomeAmountItem)

    $incomeTextItem.children().eq(1).addClass('text').addClass('green')
    $('.income-items').append($incomeTextItem)

}

const renderExpense = () => {

    // Expense submissions
    let $expenseDiv = $('<div>').addClass('expense-transaction')
    
    let $expenseAmountItem = $expenseDiv.append($("<div>" + "$" + transactionExpenseAmounts[transactionExpenseAmounts.length - 1] + "</div>"))
    let $expenseTextItem = $expenseDiv.append($("<div>" + transactionExpenseTexts[transactionExpenseTexts.length - 1] + "</div>"))

    $expenseAmountItem.children().eq(0).addClass('amount').addClass('red')
    $('.expense-items').append($expenseAmountItem)

    $expenseTextItem.children().eq(1).addClass('text').addClass('red')
    $('.expense-items').append($expenseTextItem)

}


// Event Handler for Income Submission
const incomeSubmit = (event) => {
    event.preventDefault()
    transactionIncomeAmounts.push($('#income-amount').val())
    transactionIncomeTexts.push($('#income-text').val())
    $('#income-total').text($incomeTotal += parseInt($('#income-amount').val())).addClass('green')
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
    $('#expense-total').text($expenseTotal -= parseInt($('#expense-amount').val())).addClass('red')
    $('#balance-total').text($balanceTotal -= parseInt($('#expense-amount').val()))
    $(event.currentTarget).trigger('reset')
    renderExpense()
}

$('#expense').on('submit', expenseSubmit)

//////////////////////////////////////////////////////////////////////////////////////////

// Median Mortgage Information Modal
$( () => {
    const $openBtn = $('#openModal')
    const $modal = $('#modal')
    const $closeBtn = $('#close')
  
      // same as show() function
    const openModal = () => {
      $modal.css('display', 'block')
    }
  
      // same as hide() function
    const closeModal = () => {
      $modal.css('display', 'none')
    }
  
    $openBtn.on('click', openModal)
    $closeBtn.on('click', closeModal)
  
    // setTimeout(openModal, 5000)
  });



  // Median Rent Information Modal
$( () => {
    const $openBtn2 = $('#openModal2')
    const $modal2 = $('#modal2')
    const $closeBtn2 = $('#close2')
  
      // same as show() function
    const openModal = () => {
      $modal2.css('display', 'block')
    }
  
      // same as hide() function
    const closeModal = () => {
      $modal2.css('display', 'none')
    }
  
    $openBtn2.on('click', openModal)
    $closeBtn2.on('click', closeModal)

    console.log(closeModal)
  
    // setTimeout(openModal, 5000)
  });


///////////////////////////////////////////////////////////////////////////////////////////


// Median Housing Cost and Distribution of Housing Prices

// Pulls costs by state search
let state

$('#state-section').on('submit', (event) => {
    event.preventDefault()
    console.log('hello')
    console.log($('#state').val())
    // Pulls state from search
    $.ajax({
        url:`https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME&for=state:*&key=89452c179f005fd7873c90db6fca27e755ee3466`
    }).then(
        data => {
            for (let i = 1; i < data.length; i++){
                if (data[i][0] === $('#state').val()){
                console.log(data[i][0])
                state = data[i][1]
                console.log(state)
                }
            }

            // Pulls mortgage cost data based on state
            $.ajax({
                url: `https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME,CP04_2014_2018_094E,CP04_2014_2018_095E,CP04_2014_2018_096E,CP04_2014_2018_097E,CP04_2014_2018_098E,CP04_2014_2018_099E,CP04_2014_2018_100E,CP04_2014_2018_101E&for=state:${state}&key=89452c179f005fd7873c90db6fca27e755ee3466`
            }).then(
                (data2) => {
                    console.log(data2[1])
                    $('#mortgage-amount').text(data2[1][8])
                    $('#1m').text(data2[1][1])
                    $('#2m').text(data2[1][2])
                    $('#3m').text(data2[1][3])
                    $('#4m').text(data2[1][4])
                    $('#5m').text(data2[1][5])
                    $('#6m').text(data2[1][6])
                    $('#mortgage').children().eq(1).addClass('red')
                },
                () => {
                    console.log("bad request")
                }
            )


            // Pulls rent cost data based on state
            $.ajax({
                url: `https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME,CP04_2014_2018_127E,CP04_2014_2018_128E,CP04_2014_2018_129E,CP04_2014_2018_130E,CP04_2014_2018_131E,CP04_2014_2018_132E,CP04_2014_2018_133E,CP04_2014_2018_134E&for=state:${state}&key=89452c179f005fd7873c90db6fca27e755ee3466`
            }).then(
                (data3) => {
                    console.log(data3[1])
                    $('#rent-amount').text(data3[1][8])
                    $('#1r').text(data3[1][1])
                    $('#2r').text(data3[1][2])
                    $('#3r').text(data3[1][3])
                    $('#4r').text(data3[1][4])
                    $('#5r').text(data3[1][5])
                    $('#6r').text(data3[1][6])
                    $('#rent').children().eq(1).addClass('red')
                },
                () => {
                    console.log("bad request")
                }
            )
            

        },
        () => {
            console.log("bad request")
        }
    )
})


// API urls

// County and State
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME&for=county:*&in=state:*&key=89452c179f005fd7873c90db6fca27e755ee3466

// State
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME&for=state:*&key=89452c179f005fd7873c90db6fca27e755ee3466

// Housing cost distribution and median cost
// < 500
// 500 - $999
// 1000 - 1499
// 1500 - 1999
// 2000 - 2499
// 2500 - 2999
// > 3000
// Median
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME,CP04_2014_2018_094E,CP04_2014_2018_095E,CP04_2014_2018_096E,CP04_2014_2018_097E,CP04_2014_2018_098E,CP04_2014_2018_099E,CP04_2014_2018_100E,CP04_2014_2018_101E&for=state:17&key=89452c179f005fd7873c90db6fca27e755ee3466

// Rent cost distribution and median cost
// < 500
// 500 - $999
// 1000 - 1499
// 1500 - 1999
// 2000 - 2499
// 2500 - 2999
// > 3000
// Median
// https://api.census.gov/data/2018/acs/acs5/cprofile/?get=NAME,CP04_2014_2018_127E,CP04_2014_2018_128E,CP04_2014_2018_129E,CP04_2014_2018_130E,CP04_2014_2018_131E,CP04_2014_2018_132E,CP04_2014_2018_133E,CP04_2014_2018_134E&for=state:17&key=89452c179f005fd7873c90db6fca27e755ee3466




