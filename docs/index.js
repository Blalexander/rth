async function initializeQuickbooks() {
  // const result = await fetch('https://rth-server.azurewebsites.net/getCompanyInfo', {
  const result = await fetch('https://rth-server.azurewebsites.net/authUri', {
    method: "GET",
    // body: JSON.stringify(formOptions),
    // body: bodyFiller,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => {
    console.log(res)
    let resurl2 = res.text()
    resurl2.then(res3 => {
      console.log(res3)
      window.open(res3, 'popup','width=600,height=600')

    })
    return("connected")
  })
	.catch(err=>{
		console.error(err);
	});
  return result
}

async function initializeClientCoords(arg) {
  // const result = await fetch('https://rth-server.azurewebsites.net/getCompanyInfo', {
  const result = await fetch(`http://api.positionstack.com/v1/forward?access_key=a627f58146067a79ccc486ba7dd1be39&query=${arg}`, {
    method: "GET",
    // body: JSON.stringify(formOptions),
    // body: bodyFiller,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(res => {
    console.log(res)
    return res
  })
	.catch(err=>{
		console.error(err);
	});
  return result
}


// function createEls(type, name, text) {
//   // console.log({type, name, text})
//   let newEl = document.createElement(type)
//   if(Array.isArray(name)) {
//     name.forEach(eachName => {
//       newEl.classList.add(eachName)
//     })
//   }
//   else {
//     newEl.classList.add(name)
//   }
//   newEl.innerText = text
//   return newEl
// }

// function capitalizeFirstLetter(string, second) {
//   // console.log(string, second)
//   if(string != undefined) {
//     if(second == true) {
//       if(string.indexOf(' ') > 0) {    
//         let n = string.indexOf(' ')
//         return string.charAt(0).toUpperCase() + string.slice(1, n) + ' ' + string.charAt(n+1).toUpperCase() + string.slice(n+2);
//       }
//       else {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//       }
//     }
//     else {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
//   }
// }

// function findNameFromId(names, ids, id) {
//   // console.log(names, ids, id)
//   return capitalizeFirstLetter(names[ids.indexOf(id)], true)
// }

// function findIdFromName(names, ids, name) {
//   console.log(names, ids, name)
//   name = name.replace('-', ' ')
//   let ret1 = ids[names.indexOf(name)] != undefined ? ids[names.indexOf(name)] : ids[names.indexOf(name.toLowerCase())]
//   // let ret2 = ret1 != undefined ? ret1 : ids[names.indexOf(normalizeName(name))]
//   // console.log(names, ids, name, ret1, ret2)
//   console.log(ret1)
//   return ret1
// }

// function normalizeName(n) {
//   n.replace('-', ' ')
//   n.toLowerCase()
//   console.log(n, typeof n)
//   return n
// }

// function findName(id) {
//   fetch(`http://localhost:3000/api/username?id=${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })
//   .then(res=>{
//     if (res.ok) {
//       res = res.json()
//       console.log(res)
//     }
//     else {
//       throw new Error(res.statusText);
//     }
//     return res
//   })
//   .catch(err=>{
//     console.error(err);
//   });
// }


function submitTemplate() {
  console.log(formOptions)
  fetch(`http://localhost:3000/api/templates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formOptions)
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });
}

async function getSalesTax(loc, nex) {
  // let taxAddress = `9036 winnetka ave&city=northridge&zip=91324`
  // if(nex === false) {
  //   searchAddress = `https://services.maps.cdtfa.ca.gov/api/taxrate/GetRateByAddress?address=9036 winnetka ave&city=northridge&zip=91324`
  // }
  let search = await fetch(`http://localhost:3000/api/tax`, {
    method: 'GET',
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      res.then(newRes => {
        // console.log(newRes)
        return newRes
      })
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  // .then(parsedRes => {
  //   console.log(parsedRes)
  //   return parsedRes
  // })
  .catch(err=>{
    console.error(err);
  });
  return search
}

async function getItemCost(prodName) {
  if(typeof prodName === "object") {
    prodName = prodName.value
  }
  // console.log("HERE'S THE SEARCH: ", prodName, typeof prodName)
  let search = await fetch(`http://localhost:3000/api/catalogitem`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({product: prodName})
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      res.then(newRes => {
        // console.log(newRes)
        return newRes
      })
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  // .then(parsedRes => {
  //   console.log(parsedRes)
  //   return parsedRes
  // })
  .catch(err=>{
    console.error(err);
  });
  return search
}


// document.querySelector('.user-container').addEventListener('click', () => {
  // localStorage.username = ""
  // localStorage.user_id = ""
  // localStorage.user_preferences = ""
  // localStorage.clear()
  // location.reload()
// })



// if(localStorage.devButton != undefined) {
//   switch(localStorage.devButton) {
//     case('owner'): {
//       changeToOwner()
//       break;
//     }
//     case('admin'): {
//       changeToAdmin()
//       break;
//     }
//     case('sales'): {
//       changeToSales()
//       break;
//     }
//     case('driver'): {
//       changeToDriver()
//       break;
//     }
//   }
// }

// function changeToOwner(e) {
//   let classesToRemove = document.querySelector('.nav-container').classList
//   classesToRemove.forEach(eachClass => {
//     if(eachClass != "nav-container") {
//       classesToRemove.remove(eachClass)
//     }
//   })
//   document.querySelector('.nav-container').classList.add('owner-view')
//   localStorage.setItem('devButton', 'owner')
// }

// function changeToAdmin(e) {
//   let classesToRemove = document.querySelector('.nav-container').classList
//   classesToRemove.forEach(eachClass => {
//     if(eachClass != "nav-container") {
//       classesToRemove.remove(eachClass)
//     }
//   })
//   document.querySelector('.nav-container').classList.add('admin-view')
//   localStorage.setItem('devButton', 'admin')
// }

// function changeToSales(e) {
//   let classesToRemove = document.querySelector('.nav-container').classList
//   classesToRemove.forEach(eachClass => {
//     if(eachClass != "nav-container") {
//       classesToRemove.remove(eachClass)
//     }
//   })
//   document.querySelector('.nav-container').classList.add('sales-view')
//   localStorage.setItem('devButton', 'sales')
//   localStorage.username = "Sarah"
// }

// function changeToDriver(e) {
//   let classesToRemove = document.querySelector('.nav-container').classList
//   classesToRemove.forEach(eachClass => {
//     if(eachClass != "nav-container") {
//       classesToRemove.remove(eachClass)
//     }
//   })
//   document.querySelector('.nav-container').classList.add('driver-view')
//   localStorage.setItem('devButton', 'driver')
//   localStorage.username = "Joe Smith"
//   document.querySelector('.user-name').innerText = localStorage.username
//   if(localStorage.assigned == "yes") {
//     setTimeout(() => localStorage.assigned = "no", 500)
//     document.querySelector('.routes-alert-container').style.display = "flex"
//     document.querySelector('.routes-alert-container').classList.add('pending-alerts')
//     document.querySelector('.routes-alert-container').addEventListener('mouseover', removeFlash)
//     document.querySelector('.routes-alert-container').addEventListener('click', removeAlert)
//   }
// }

function removeFlash() {
  document.querySelector('.routes-alert-container').classList.remove('pending-alerts')
}

function removeAlert(e) {
  e.target.style.display = "none"
}


if(document.getElementById('initialize-quickbooks')) {
  document.getElementById('initialize-quickbooks').innerText = "Connect to Quickbooks"
}

function showAllMessages() {
  document.querySelector('.show-messages').classList.remove('show-messages')
  document.querySelector('.all-messages-button').classList.add('show-messages')
  let allMessages = document.querySelectorAll('.message')
  allMessages.forEach(eachMessage => {
    eachMessage.classList.remove('hidden')
  })
}

function showSalesMessages() {
  document.querySelector('.show-messages').classList.remove('show-messages')
  document.querySelector('.sales-messages-button').classList.add('show-messages')
  let allMessages = document.querySelectorAll('.message')
  allMessages.forEach(eachMessage => {
    eachMessage.classList.add('hidden')
    if(eachMessage.classList[1] == 'sales-messages-filter') {
      eachMessage.classList.remove('hidden')
    }
  })
}

function showDriversMessages() {
  document.querySelector('.show-messages').classList.remove('show-messages')
  document.querySelector('.drivers-messages-button').classList.add('show-messages')
  let allMessages = document.querySelectorAll('.message')
  allMessages.forEach(eachMessage => {
    eachMessage.classList.add('hidden')
    if(eachMessage.classList[1] == 'drivers-messages-filter') {
      eachMessage.classList.remove('hidden')
    }
  })
}

function showDriverAlert() {
  localStorage.assigned = "yes"
}











// ---------------------------------------------------------------------------------------------------------------------------------
// REPORTS
// ---------------------------------------------------------------------------------------------------------------------------------
function displayReportsData(r) { 
  console.log(r) 
  let payments = r.paymentData[0]
  let carts  = r.cartData

  let credTitle = createEls('H3', ['credit-revenue-header', 'show-related'], 'Credit sales: ')
  let credTotal = createEls('DIV', ['credit-revenue-line', 'show-related'], `$${payments.creditRev.toFixed(2)}`)
  let webTitle = createEls('H3', ['web-revenue-header', 'show-related'], 'Web sales: ')
  let webTotal = createEls('DIV', ['web-revenue', 'show-related'], `$${payments.webRev.toFixed(2)}`)
  let cashTitle = createEls('H3', ['cash-revenue-header', 'show-related'], 'Cash sales: ')
  let cashTotal = createEls('DIV', ['cash-revenue', 'show-related'], `$${payments.cashRev.toFixed(2)}`)
  let checkTitle = createEls('H3', ['check-revenue-header', 'show-related'], 'Check sales: ')
  let checkTotal = createEls('DIV', ['check-revenue', 'show-related'], `$${payments.checkRev.toFixed(2)}`)
  let incomeTracker = 0
  let discTracker = 0
  let taxTracker = 0
  let costTracker = 0

  let totalRevBeforeTax = 0
  let totalTaxRev = 0
  let totalDiscountsGiven

  let totalIncomeTitle = createEls('H3', 'total-revenue-header', 'Total Revenue: ')
  let incomeTotal = createEls('DIV', 'total-revenue', `$${totalRevBeforeTax.toFixed(2)}`)
  let discTitle = createEls('H3', 'discount-amount-header', 'Total discounts given: ')
  let discTotal = createEls('DIV', 'discount-amount', `$${discTracker.toFixed(2)}`)
  let absoluteAmt = (payments.creditRev + payments.webRev + payments.cashRev + payments.checkRev).toFixed(2)
  let absoluteTitle = createEls('H3', 'absolute-total-income-header', 'Total Income: ')
  let absoluteTotal = createEls('DIV', 'absolute-total-income', `$${absoluteAmt}`)
  let taxTitle = createEls('H3', 'tax-revenue-header', 'Total Tax Income: ') 
  let taxTotal = createEls('DIV', 'tax-revenue', `$${totalTaxRev.toFixed(2)}`)
  let haircutIncomeTitle = createEls('H3', ['haircut-income-header', 'show-related'], 'Income Haircut: ')
  let haircutIncomeTotal = createEls('DIV', ['haircut-income-total', 'show-related'], '')
  let jewelryIncomeTitle = createEls('H3', ['jewelry-income-header', 'show-related'], 'Income Jewelry: ')
  let jewelryIncomeTotal = createEls('DIV', ['jewelry-income-total', 'show-related'], '')
  let dentalIncomeTitle = createEls('H3', ['dental-income-header', 'show-related'], 'Income Dental: ')
  let dentalIncomeTotal = createEls('DIV', ['dental-income-total', 'show-related'], '')
  let pawprintIncomeTitle = createEls('H3', ['pawprint-income-header', 'show-related'], 'Income Pawprint: ')
  let pawprintIncomeTotal = createEls('DIV', ['pawprint-income-total', 'show-related'], '')
  let bathsIncomeTitle = createEls('H3', ['baths-income-header', 'show-related'], 'Income Baths: ')
  let bathsIncomeTotal = createEls('DIV', ['baths-income-total', 'show-related'], '')
  document.querySelector('.reports-container').append(absoluteTitle, absoluteTotal, credTitle, credTotal, webTitle, webTotal, cashTitle, cashTotal, checkTitle, checkTotal)
  document.querySelector('.reports-container').append(totalIncomeTitle, incomeTotal, haircutIncomeTitle, haircutIncomeTotal, jewelryIncomeTitle, jewelryIncomeTotal, dentalIncomeTitle, dentalIncomeTotal, pawprintIncomeTitle, pawprintIncomeTotal, bathsIncomeTitle, bathsIncomeTotal, taxTitle, taxTotal, discTitle, discTotal)

  let totalCartContainer = createEls('DIV', 'reports-cart-total-container', 'Carts: ')
  let cartCategories = {}
  carts.forEach(async (eachCart, eachCartInd) => {
    // if(eachCart._id != "61b52ae385b3df09353d419c" || eachCart._id != "614bbdd7fe250b003407ba5b") {
    //   return null
    // }
    let eachCartId = eachCart._id
    let eachCartTotal = getCartTotal(eachCart)
    let eachCartContents = getCartContents(eachCart)
    let eachCartContentsCost = getCartContentsCost(eachCart)
    let eachCartContentModifiers = getCartContentsMods(eachCart)
    taxTracker += eachCartContentModifiers.tax
    discTracker += eachCartContentModifiers.discounts
    let eachCartPayments = getCartPayments(eachCart)
    // console.log({eachCartId, eachCartTotal, eachCartContentsCost, taxes: eachCartContentModifiers.tax,  discounts: eachCartContentModifiers.discounts, eachCartContents, eachCartPayments})
    let findAllTaxes = await getCartTaxes(eachCartContentModifiers) //function produces nothing- only staggers each loop correctly
    let findTotalPaidAllCategories = await totalPaidAllCategories(eachCartContents, eachCartPayments, eachCartTotal, eachCartContentModifiers.tax)
    let findTotalDueAllCategories = await totalDueAllCategories(eachCartContents, eachCartContentsCost)
    // console.log({eachCartContentModifiers, findAllTaxes, findTotalDueAllCategories, findTotalPaidAllCategories, taxTracker, discTracker})
    // console.log(findTotalPaidAllCategories)


    totalRevBeforeTax = findTotalPaidAllCategories.all
    totalTaxRev = findTotalPaidAllCategories.allTaxes
    incomeTotal.innerText = '$' + totalRevBeforeTax.toFixed(2)
    taxTotal.innerText = '$' + totalTaxRev.toFixed(2)
    discTotal.innerText = '$' + ((totalRevBeforeTax + totalTaxRev) - absoluteAmt).toFixed(2)
    // console.log(eachCartInd, carts.length)
    if((eachCartInd + 1) === carts.length) {
      // cremIncomeTotal.innerText = '$' + findTotalPaidAllCategories.cremation.toFixed(2)
      bathsIncomeTotal.innerText = '$' + findTotalPaidAllCategories.bath.toFixed(2)
      haircutIncomeTotal.innerText = '$' + findTotalPaidAllCategories.haircut.toFixed(2)
      dentalIncomeTotal.innerText = '$' + findTotalPaidAllCategories.dental.toFixed(2)
      jewelryIncomeTotal.innerText = '$' + findTotalPaidAllCategories.jewelry.toFixed(2)
      // noseprintIncomeTotal.innerText = '$' + findTotalPaidAllCategories.noseprint.toFixed(2)
      pawprintIncomeTotal.innerText = '$' + findTotalPaidAllCategories.pawprints.toFixed(2)
      // urnsIncomeTotal.innerText = '$' + findTotalPaidAllCategories.urns.toFixed(2)
      // deliveryIncomeTotal.innerText = '$' + findTotalPaidAllCategories.delivery.toFixed(2)
      // fuelIncomeTotal.innerText = '$' + findTotalPaidAllCategories.cremation.toFixed(2)
      // coordinationIncomeTotal.innerText = '$' + findTotalPaidAllCategories.cremation.toFixed(2)
    }
  })
  document.getElementById('download-report').addEventListener('click', downloadReport)
}


function downloadReport(ev) {
  // console.log(ev, ev.target)
  ev.preventDefault()
  let downloadReportData = []
  console.log(document.querySelector('.reports-container').children)
  let targChilds = document.querySelector('.reports-container').children
  for (let chld in targChilds) {
    // console.log(chld)
    if(parseInt(chld) % 2 === 0) {
      downloadReportData.push([targChilds[chld].innerText.replace(':', ''), targChilds[parseInt(chld)+1].innerText])
    }
  }
  
  let csvContent = "data:csv/xlsx;charset=utf-8," 
    + downloadReportData.map(e => e.join(",")).join("\n");

  var encodedUri = encodeURI(csvContent);
  // window.open(encodedUri);

  console.log(encodedUri)
  let newReportName = document.querySelector('.custom-report-name').value === "" ? "my_report" : document.querySelector('.custom-report-name').value
  var link = document.createElement("a");
  // let link = document.getElementById('download-report')
  link.setAttribute("href", encodedUri);
  link.setAttribute("target", "_blank")
  link.setAttribute("download", `${newReportName}.csv`);
  link.classList.add('download-report-link')
  if(document.querySelector('.download-report-link') != null) {
    document.body.appendChild(link); 
  }
  link.click();

  console.log(downloadReportData)
}



// switch
// ifNestedRows => unNestRows
// ifRowsUnNested => printRows
















// ---------------------------------------------------------------------------------------------------------------------------------
// DASHBOARD
// ---------------------------------------------------------------------------------------------------------------------------------
function displayDashboard(ev) {
  console.log(ev)
  displayMessages(ev.allMessages)
  displayWorking(ev.whosWorking, ev.userTypes)
  // displayCatalogUpdates(ev.catalog)
  displayTrackedOrders(ev.trackedOrders)
  displayLateOrders(ev.oldOrders)
  document.querySelectorAll('.dashboard-content h3').forEach(dashCon => {
    if(!dashCon.classList.contains('message-board')) {
      $(dashCon).on('touchstart click', function(event) {
        if (event.type == "touchstart") {
            $(this).off('click');
            console.log("Only touch event is fired");
            adjustDashboard(event)
        } else if (event.type == "click") {
            $(this).off('touchstart');
            console.log("Only click event is fired");
            adjustDashboard(event)
        }
      });
    }
  })
}

function adjustDashboard(ev) {
  console.log(ev)
  let dashTarg = ev.target.classList[0].substring(0, ev.target.classList[0].search('-title'))
  document.querySelector(`.${dashTarg}`).classList.toggle('minimize')
  document.querySelector(`.${dashTarg}`).classList.toggle('maximize')
}

async function submitMessage() {
  console.log("At submit message")
  let atRefiner = document.querySelector('.show-messages').classList[0].slice(0, document.querySelector('.show-messages').classList[0].indexOf('button')-1)

  let myMessage = {
    author: localStorage.user_id,
    content: document.querySelector('.text-input').value,
    at: atRefiner
  }

  let asyncDelivery = await fetch(`http://localhost:3000/api/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myMessage)
	})
	.then(res=>{
    if (res.ok) {
      res = res.json()
		}
    else {
		  throw new Error(res.statusText);
    }
    return res
	})


  displayMessages(asyncDelivery)
}

function displayMessages(m) {
  // console.log(m)
  let a = JSON.parse(localStorage.namemap)
  let b = JSON.parse(localStorage.idmap)

  // let messageBoardTitle = createEls('H3', 'message-board-title', 'Message Board')
  // document.querySelector('.message-board').append(messageBoardTitle)

  if(Array.isArray(m)) {
    m.forEach(eachMessage => {
      let newMessage = createEls('DIV', ['message', `${eachMessage.at}-filter`], '') //create Container
      let from = createEls('P', 'message-from', `${findNameFromId(a, b, eachMessage.author)}:`) // create From
      let messageContent = createEls('P', 'message-content', eachMessage.message) // create Content
      let timeStamp = createEls('P', 'timestamp', eachMessage.timestamp) // create Timestamp
      newMessage.append(from, messageContent, timeStamp) // append children to container
      document.querySelector('.all-messages').appendChild(newMessage) // static append so that All always has All
    })
  }
  else {
    let newMessage = createEls('DIV', ['message', `${m.at}-filter`], '') //create Container
    let from = createEls('P', 'message-from', `${[idTable.indexOf(m.author)]}:`) // create From
    let messageContent = createEls('P', 'message-content', m.message) // create Content
    let timeStamp = createEls('P', 'timestamp', m.timestamp) // create Timestamp
    newMessage.append(from, messageContent, timeStamp) // append children to container
    document.querySelector('.all-messages').appendChild(newMessage) // static append so that All always has All
  }
}

function displayWorking(ev1, ev2) {
  console.log(ev1)
  let date = new Date(); 
  let monthNum = date.getUTCMonth()+1
  let dayOfMonth = date.getDate()

  // let workingTodayTitle = createEls('H3', 'dashb1-title', 'Working Today')
  // document.querySelector('.dashb1').append(workingTodayTitle)
  ev1.forEach(workingToday => {
    console.log(workingToday)
    for(let findToday in workingToday.details) {
      // console.log(findToday, monthNum, dayOfMonth)
      if(`${monthNum-1}/${dayOfMonth}` == findToday) {
        let worker = createEls('DIV', 'working-today-container', '')
        let workerName = createEls('H4', 'working-today-name', findDataInUserTypes(workingToday.userId, "username"))
        let workerBG = createEls('IMG', ['working-today-bg'], '')
        workerBG.src = findDataInUserTypes(workingToday.userId, "background")
        worker.append(workerBG, workerName)
        document.querySelector('.dashb1').append(worker)
      }
    }
  })

  function findDataInUserTypes(idToFind, dataType) {
    console.log(idToFind, dataType)
    if(dataType === "username") {
      let userName = ""
      ev2.forEach(eachUserType => {
        let i = 0
        for(let userId in eachUserType.id) {
          if(idToFind === eachUserType.id[userId]) {
            userName = capitalizeFirstLetter(eachUserType.name[i], true)
          }
          i++
        }
      })
      return userName
    }
    else if(dataType === "background") {
      let background = ""
      ev2.forEach(eachUserType => {
        let i = 0
        for(let userId in eachUserType.id) {
          if(idToFind === eachUserType.id[userId]) {
            background = eachUserType.background[i]
          }
          i++
        }
      })
      return background
    }
  }
}

function displayCatalogUpdates(ev) {
  console.log(ev)

}

function displayTrackedOrders(ev) {
  console.log(ev)

  ev.forEach(eachTrackedOrder => {
    let trackedOrderContainer = createEls('DIV', ['dashboard-item', 'dash-tracked-order'], '')
    trackedOrderContainer.id = eachTrackedOrder._id
    let trackedOrderTitle = createEls('P', 'tracked-order-title', eachTrackedOrder.estimate["Pet Name"])
    trackedOrderContainer.append(trackedOrderTitle)
    $(trackedOrderContainer).on('touchstart click', function(event) {
      if (event.type == "touchstart") {
          $(this).off('click');
          showTrackedOrders(event)
      } else if (event.type == "click") {
          $(this).off('touchstart');
          showTrackedOrders(event)
      }
    });
    document.querySelector('.dashb3').append(trackedOrderContainer)
  })
}

function showTrackedOrders(ev) {
  console.log(ev.target.id)
  window.location.assign(`http://localhost:5500/orders.html?s=${ev.target.id}`)
}

function displayLateOrders(ev) {
  console.log(ev)

  ev.forEach(eachLateOrder => {
    let lateOrderContainer = createEls('DIV', ['dashboard-item', 'dash-late-order'], '')
    lateOrderContainer.id = eachLateOrder._id
    let lateOrderTitle = createEls('P', 'late-order-title', eachLateOrder.estimate["Pet Name"])
    lateOrderContainer.append(lateOrderTitle)
    $(lateOrderContainer).on('touchstart click', function(event) {
      if (event.type == "touchstart") {
          $(this).off('click');
          showLateOrders(event)
      } else if (event.type == "click") {
          $(this).off('touchstart');
          showLateOrders(event)
      }
    });
    document.querySelector('.dashb4').append(lateOrderContainer)
  })
}

function showLateOrders(ev) {
  console.log(ev.target)
  window.location.assign(`http://localhost:5500/orders.html?s=${ev.target.id}`)
}
















// ---------------------------------------------------------------------------------------------------------------------------------
// INVOICES
// ---------------------------------------------------------------------------------------------------------------------------------








// ---------------------------------------------------------------------------------------------------------------------------------
// EACH ORDER
// ---------------------------------------------------------------------------------------------------------------------------------
function showSpecificOrder(orderData) {
  console.log(orderData)
  //Two different views.  If customer, black and white theme with full logo and emphasis on pet.  if employee, standard display
  //could be a good section to reach out and show customer the human side of the business.  "we're sorry for your loss."
  //"[age] [type]"
  document.getElementById('name-me').innerText = orderData[0].estimate["Pet Name"]
  if(orderData[0].estimate.Stage.value != undefined) {
    document.getElementById('current-stage').innerText = orderData[0].estimate.Stage.value.replace("Stage", "Stage ")
  }
  document.querySelector('.close-stage-update').addEventListener('click', closeStageUpdate)
  document.querySelector('.confirm-stage-update').addEventListener('click', confirmStageUpdate)

  if(localStorage.user_id != undefined) {
    document.body.classList.add('show-update')
    let stageLineItem = document.querySelector('.stage-update-line')
    let hiddenStageLineItem = document.querySelector('.hidden-stage-update-line')
    switch(orderData[0].estimate.Stage.value) {
      case('Stage1'): {
        stageLineItem.innerText = `Confirm ${orderData[0].estimate["Pet Name"]} has been received?`
        hiddenStageLineItem.innerText = orderData[0]._id
        hiddenStageLineItem.id = orderData[0].estimate.Stage.value
        break;
      }
      case('Stage2'): {
        stageLineItem.innerText = `Confirm ${orderData[0].estimate["Pet Name"]} is en route to be cremated?`
        hiddenStageLineItem.innerText = orderData[0]._id
        hiddenStageLineItem.id = orderData[0].estimate.Stage.value
        break;
      }
      case('Stage3'): {
        stageLineItem.innerText = `Confirm ${orderData[0].estimate["Pet Name"]} is being picked up from cremation?`
        hiddenStageLineItem.innerText = orderData[0]._id
        hiddenStageLineItem.id = orderData[0].estimate.Stage.value
        break;
      }
      case('Stage4'): {
        stageLineItem.innerText = `Confirm ${orderData[0].estimate["Pet Name"]} is being returned to customer?`
        hiddenStageLineItem.innerText = orderData[0]._id
        hiddenStageLineItem.id = orderData[0].estimate.Stage.value
        break;
      }
      default:
        console.log("Something's amiss here...")
    }
  }
}

function closeStageUpdate(ev) {
  console.log(ev)
  document.body.classList.remove('show-update')
}

async function confirmStageUpdate(ev) {
  console.log(document.querySelector('.hidden-stage-update-line').innerText, document.querySelector('.hidden-stage-update-line').id)
  let stageIncrementer = document.querySelector('.hidden-stage-update-line').id.substring(5)
  stageIncrementer = parseInt(stageIncrementer) + 1
  console.log(stageIncrementer)
  bodyContent = {
    field: "Stage Update",
    id: document.querySelector('.hidden-stage-update-line').innerText, //target
    value: `confirmation page Stage${stageIncrementer}`, //ex. QRCode Stage1
    by: localStorage.user_id
  }
  fetch(`${baseUrl}/api/estimates`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
      document.body.classList.remove('show-update')
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });
}








// ---------------------------------------------------------------------------------------------------------------------------------
// ESTIMATES
// ---------------------------------------------------------------------------------------------------------------------------------
let idTable = []
let nameTable = []
let initData1 = {}
let filterTargets = []
// let initData2 = {}

function initializeTLFs() {
  if(window.location.pathname.includes('estimates') || window.location.pathname.includes('orders')) {
    document.querySelectorAll('.tlf').forEach(eachTLF => {
      eachTLF.addEventListener('click', sortTLFs)
    })
    document.querySelectorAll('.mlf').forEach(eachMLF => {
      eachMLF.addEventListener('click', sortMLFs)
    })
  }
}

function sortTLFs(ev) {
  // console.log(ev.target.classList)
  ev.target.classList.toggle('tlf-on')
  ev.target.classList.forEach(eachClass => {
    if(eachClass != "tlf" && eachClass != "tlf-on") {
      document.querySelector('.estimate-container').classList.toggle(eachClass.replace('tlf', 'filter'))
    }
  })
}

function sortMLFs(ev) {
  // console.log(ev.target.classList)
  ev.target.classList.toggle('mlf-on')
  ev.target.classList.forEach(eachClass => {
    if(eachClass != "mlf" && eachClass != "mlf-on") {
      document.querySelector('.estimate-container').classList.toggle(eachClass.replace('mlf', 'filter'))
      if(document.querySelector('.estimate-container').classList.length === 1) {
        document.querySelector('.estimate-container').classList.add('all-visible')
      }
      else {
        document.querySelector('.estimate-container').classList.remove('all-visible')
      }
    }
  })
}

// function getClassName(eachClass) {
  // if(eachClass != "tlf" && eachClass != "tlf-on") {
  //   return eachClass
  // }
  // return eachClass != "tlf" && eachClass != "tlf-on"
// }

async function displayInitialData(data) {
  console.log("Display Initial Data: ", data)
  initData1 = data
  // initData2 = dataToCheckAgainst

  initializeTLFs()

  if(data.userTypes) {  
    data.userTypes.forEach(eachGroup => {
      eachGroup.id.forEach(eachId => {
        idTable.push(eachId)
      })
      eachGroup.name.forEach(eachName => {
        nameTable.push(eachName)
      })
    })

    console.log(idTable, nameTable)
    // store this name and id mapping in localstorage (or session) so that it can be referenced by any other page
    localStorage.idmap = JSON.stringify(idTable)
    localStorage.namemap = JSON.stringify(nameTable)

    // displayMessages(data.allMessages)
  }
  let delayedArray = []
  let coordinateArray = []
  let whereToStore
  let showDO = false
  let showPU = false
  // let testPoint = data.userData ? true : false
  // console.log("TESTING PLEASE: ", testPoint)
  let dataToUse = data.userData ? data.userData : data //dataToUse always = data since this route is now unique from dashboard
  dataToUse.forEach(est => {
    let eachEst = createEls('DIV', 'each-estimate', '')
    let estLineItems = createEls('DIV', 'each-estimate-line-items', '')

    if(est.estimate.hasOwnProperty("Cart")) { //create Cart display
      // console.log(est.estimate["Pet Name"], est.estimate["Cart"])
      let cartProducts = createMyCart(est.estimate["Cart"])
      // console.log(cartProducts)
      // let cartContainer = 
      eachEst.append(cartProducts)
    }

    for(let item in est.estimate) { //makes all the estimate line items
      // console.log("ITEM: ", est.estimate["Pet Name"], item)
      let estimateDetails = createEls('DIV', 'estimate-details', '')
      let estimateDetailsKey = createEls('P', 'estimate-details-key', item)
      let estimateDetailsValue


      if(item === "Stage") {
        estimateDetailsValue = createEls('P', 'estimate-details-value', est.estimate[item].value.replace('Stage', ''))
      }
      else if(item === "Coords" || item === "QBEstimateId" || item === "QBCustomerId" || item === "Urn" || item === "Paw Print Options") {
        // console.log(est.estimate["Pet Name"], " failed :", item)
        break;
      }
      else {
        estimateDetailsValue = createEls('P', 'estimate-details-value', est.estimate[item])
      }


      if(item.includes("Return Cremains") || item.includes("Pick Up")) {
        showDO = item.includes("Return Cremains") ? true : showDO
        showPU = item.includes("Pick Up") ? true : showPU
        // console.log(item, showDO, showPU)
      }

      if(item.includes("PU") || item.includes("DO")) {
        if(showDO == true || showPU == true) {
          // console.log(item)
          estimateDetails.classList.add('hide-me')
        }
      }

      estimateDetails.classList.add(item.replace(/\s+/g, '-').toLowerCase())
      if(JSON.parse(localStorage.user_preferences).includes(item)) {
        delayedArray.push(item)
      }
      estimateDetails.appendChild(estimateDetailsKey)
      estimateDetails.appendChild(estimateDetailsValue)
      // eachEst.appendChild(estimateDetails)
      estLineItems.appendChild(estimateDetails)
      eachEst.appendChild(estLineItems)
      eachEst.classList.add('shut')
      eachEst.id = est._id
      eachEst.addEventListener('click', toggleEstimateDetails)
      // console.log(est.estimate.Stage.value)
      if(est.estimate.Stage.value != undefined) {
        eachEst.classList.add(est.estimate.Stage.value.toLowerCase())
      }
      else {
        eachEst.classList.add("stage0")
      }
      whereToStore = '.estimate-container'
    }

    let changelogContainer = createEls('DIV', 'changelog-container', '')
    let defaultLogEntry = createEls('P', 'changelog-line', '')
    let defaultLogEntryLine1 = createEls('P', ['changelog-line-item', 'cli-content'], `-Created by ${capitalizeFirstLetter(est.estimate['Created By'], true)}`)
    let defaultLogEntryLine2 = createEls('P', ['changelog-line-item', 'cli-time'], `${est.timestamp}`)
    defaultLogEntry.append(defaultLogEntryLine1, defaultLogEntryLine2)
    changelogContainer.appendChild(defaultLogEntry)
    est.changelog.forEach((eachLog, assignmentCheck) => {
      console.log(eachLog, Object.keys(eachLog)[0], est.changelog)
      // let es = eachLog["Assigned to"] != undefined ? eachLog["Assigned to"] : eachLog["Stage Update"]
      let es = Object.keys(eachLog)[0]
      let a = JSON.parse(localStorage.namemap)
      let b = JSON.parse(localStorage.idmap)
      // let c = es.value == null ? '-Assignment removed' : '-Assigned to'
      let c = `-${Object.keys(eachLog)[0]}`
      let d = findNameFromId(a, b, eachLog[es].value) != undefined ? findNameFromId(a, b, eachLog[es].value) : eachLog[es].value
      // console.log(findNameFromId(a, b, es.value))
      let e = eachLog[es].by == null ? 'Name Not Found' : findNameFromId(a, b, eachLog[es].by)
      let newLogEntry = createEls('P', 'changelog-line', '')
      let newLogEntryLine1 = createEls('P', ['changelog-line-item', 'cli-content'], `${c} ${d} by ${e}`)
      let newLogEntryLine2 = createEls('P', ['changelog-line-item', 'cli-time'], `${eachLog[es].time}`)
      newLogEntry.append(newLogEntryLine1, newLogEntryLine2)
      changelogContainer.appendChild(newLogEntry)
      if(est.changelog.length == (assignmentCheck+1) && eachLog[es].value != null) {
        eachEst.classList.add('has-driver')
        // whereToStore = '.estimate-container-open__has-driver'
      }
    })
    eachEst.appendChild(changelogContainer)

    // console.log(whereToStore)

    let estimateButtonsContainer = createEls('DIV', 'estimate-buttons-container', '')
    for(let i=1; i<5; i++) {
      let button = createEls('BUTTON', `estimate-button${i}`, i)
      button.addEventListener('click', stageUpdated)
      button.value = i
      estimateButtonsContainer.append(button)
    }
    let editButton = createEls('BUTTON', `edit-button`, 'Edit')
    editButton.addEventListener('click', editOrder)
    editButton.value = est._id
    eachEst.append(editButton)
    let pbContainer = createEls('FORM', ['pb-container', `pc${est._id}`, 'v'], '') //was h
    // pbContainer.addEventListener('submit', submitPayment)
    let payButton = createEls('BUTTON', ['estimate-button', 'payment-button'], 'Pay Now')
    payButton.value = est._id
    payButton.addEventListener('click', updatePayment)
    let pbCreditLabel = createEls('LABEL', ['pb-label', 'pb-credit'], 'Credit')
    let pbCredit = createEls('INPUT', ['payment-button', 'pb-credit', `pb${est._id}`], '')
    pbCredit.addEventListener('input', textInputChange)
    pbCredit.name = "credit"
    pbCredit.value = '$' + 0
    let pbWebLabel = createEls('LABEL', ['pb-label', 'pb-web'], 'Web')
    let pbWeb = createEls('INPUT', ['payment-button', 'pb-web', `pb${est._id}`], '')
    pbWeb.addEventListener('input', textInputChange)
    pbWeb.name = "web"
    pbWeb.value = '$' + 0
    let pbCashLabel = createEls('LABEL', ['pb-label', 'pb-cash'], 'Cash')
    let pbCash = createEls('INPUT', ['payment-button', 'pb-cash', `pb${est._id}`], '')
    pbCash.addEventListener('input', textInputChange)
    pbCash.name = "cash"
    pbCash.value = '$' + 0
    let pbCheckLabel = createEls('LABEL', ['pb-label', 'pb-check'], 'Check')
    let pbCheck = createEls('INPUT', ['payment-button', 'pb-check', `pb${est._id}`], '')
    pbCheck.addEventListener('input', textInputChange)
    pbCheck.name = "check"
    pbCheck.value = '$' + 0
    let apVal = 0.00
    let adVal = 0.00
    let findNestedPayment = est.estimate.Payment != undefined ? est.estimate.Payment : {}
    let findNestedTotal = est.estimate.Cart != undefined ? est.estimate.Cart : {}
    for(let eachPayment in findNestedPayment) {
      if(typeof findNestedPayment[eachPayment] === "string") {
        apVal += parseFloat(findNestedPayment[eachPayment].replace('$', ''))
        console.log(eachPayment, findNestedPayment[eachPayment], parseFloat(findNestedPayment[eachPayment].replace('$', '')), apVal, est.estimate["Pet Name"])
      }
      else {
        apVal += parseFloat(findNestedPayment[eachPayment])
        // console.log(eachPayment, findNestedPayment[eachPayment], parseFloat(findNestedPayment[eachPayment]), apVal, est.estimate["Pet Name"])
      }
    }
    for(let eachItemInCart in findNestedTotal) {
      if(eachItemInCart === "total") {
        // adVal += parseFloat(findNestedTotal[eachItemInCart].total)
        break;
      }
      else if(typeof findNestedTotal[eachItemInCart].total === "number") {
        adVal += parseFloat(findNestedTotal[eachItemInCart].total)
      }
      else if(findNestedTotal[eachItemInCart].total.includes('$')) {
        adVal += parseFloat(findNestedTotal[eachItemInCart].total.replace('$', ''))
      }
      else {
        adVal += parseFloat(findNestedTotal[eachItemInCart].total)
      }
    }
    // console.log(tdVal)
    let amountPaidLabel = createEls('LABEL', ['amount-paid-label'], 'Amount Paid')
    let amountPaid = createEls('INPUT', ['amount-paid'], '')
    amountPaid.value = '$' + apVal.toFixed(2)
    let amountDueLabel = createEls('LABEL', ['amount-due-label'], 'Amount Due')
    let amountDue = createEls('INPUT', ['amount-due'], '')
    amountDue.value = '$' + (adVal - apVal).toFixed(2)
    pbContainer.append(payButton, pbCreditLabel, pbCredit, pbWebLabel, pbWeb, pbCashLabel, pbCash, pbCheckLabel, pbCheck, amountPaidLabel, amountPaid, amountDueLabel, amountDue)

    let trackedText = est.estimate.Tracked == "tracked" ? "tracked" : "track"
    let trackedOrder = createEls('BUTTON', ['tracked-order', `to${est._id}`], trackedText)
    trackedOrder.value = est.estimate.Tracked == "tracked" ? "not tracked" : "tracked"
    $(trackedOrder).on('touchstart click', function(event) {
      if (event.type == "touchstart") {
          $(this).off('click');
          console.log("Only touch event is fired");
          trackThisOrder(event)
      } else if (event.type == "click") {
          $(this).off('touchstart');
          console.log("Only click event is fired");
          trackThisOrder(event)
      }
    });

    let estimateDocumentsContainer = createEls('DIV', 'estimate-documents-container', '')
    let estimateDocument1 = createEls('DIV', ['estimate-document', 'estimate-document1'], '')
    let estimateDocument2 = createEls('DIV', ['estimate-document', 'estimate-document2'], '')
    let estimateDocument3 = createEls('DIV', ['estimate-document', 'estimate-document3'], '')
    estimateDocumentsContainer.append(estimateDocument1, estimateDocument2, estimateDocument3)

    eachEst.append(trackedOrder, pbContainer, estimateButtonsContainer, estimateDocumentsContainer)
    // estimateButtonsContainer.append(pbContainer)
    // eachEst.appendChild(estimateButtonsContainer)

    document.querySelector(whereToStore).appendChild(eachEst)
    coordinateArray.push(`${est.estimate["Address"]}, ${est.estimate["City"]} ${est.estimate["State"]}`)
  })
  delayedSort(delayedArray)
}

async function trackThisOrder(ev) {
  console.log(ev.target)

  bodyContent = {
    field: "Tracking",
    id: ev.target.classList[1].substring(2), //target
    value: ev.target.value, //ex. QRCode Stage1
    by: localStorage.user_id
  }
  console.log(bodyContent)
  fetch(`${baseUrl}/api/estimates`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });

  if(ev.target.value == "tracked") {
    ev.target.value = "not tracked"
    console.log("untracked")
  }
  else if(ev.target.value == "not tracked") {
    ev.target.value = "tracked"
    console.log("tracked")
  }
}

function textInputChange(ev) {
  ev.preventDefault()
  console.log(ev.target, typeof ev.target.value, ev.target.value, ev.target.value.indexOf(0))
  let modifiedVal = "$"
  let currentVal = ev.target.value.trim()
  if(ev.target.value.indexOf(0) === 1) {
    let firstPart = ev.target.value.slice(0, 1)
    let secondPart = ev.target.value.slice(2, ev.target.value.length)
    currentVal = firstPart.concat(secondPart)
  }
  // currentVal = ev.target.value.indexOf(0) === 1 ? ev.target.value.slice(2,ev.target.value.length) : ev.target.value
  if(ev.target.value === "$") {
    console.log("It happened!")
    ev.target.value = '$' + 0
  }
  else if(ev.target.value.includes('$')) {
    console.log("It happenedX22222!")
    ev.target.value = currentVal
    // ev.target.value = '$' + (parseFloat(ev.target.value.replace('$', ''))).toFixed(2)
  }
  else {
    console.log("It is not happening")
    ev.target.value = modifiedVal.concat(currentVal)
    // ev.target.value = '$' + (parseFloat(ev.target.value.replace('$', ''))).toFixed(2)
  }
  // ev.target.value = '$' + parseFloat(ev.target.value.replace('$', '')).toFixed(2)
  ev.target.parentElement[0].textContent = "Submit Payment"
}

function updatePayment(ev) {
  console.log(ev.target)
  ev.preventDefault()
  let targetContainer = ev.target.parentElement
  targetContainer.classList.toggle('v')
  targetContainer.classList.toggle('h')
  if(targetContainer.classList.contains('h')) {
    updatePaymentInDB(ev.target)
    ev.target.parentElement[0].textContent = "Pay Now"
  }
}

async function updatePaymentInDB(updateTarget) {
  console.log(updateTarget)
  let inputTargs = document.querySelectorAll(`.pb${updateTarget.value}`)
  let findIfPreviousPayments
  initData1.forEach((estData, estIterator) => {
    if(updateTarget.value != 0 && updateTarget.value === estData._id && estData.estimate.hasOwnProperty("Payment")) {
      // estData.estimate.hasOwnProperty("Payment")
      // estData.estimate.Payment[updateTarget.classList[1].substring(3)]
      console.log("HERE'S THE ONE: ", updateTarget.value, estData.estimate["Pet Name"])
      findIfPreviousPayments = estData
    }
  })
  console.log(findIfPreviousPayments)
  inputTargs.forEach(inps => {
    if(inps.value != 0 && inps.value != '$0') {
      let paymentValue = inps.value.includes('$') ? parseFloat(inps.value.replace('$', '')) : parseFloat(inps.value)
      let previousValue = 0
      console.log(typeof inps.value, inps.value, paymentValue)
      if(findIfPreviousPayments != undefined && findIfPreviousPayments.estimate.Payment.hasOwnProperty(inps.classList[1].substring(3))) {
        if(typeof findIfPreviousPayments.estimate.Payment[inps.classList[1].substring(3)] === "string") {
          previousValue = parseFloat(findIfPreviousPayments.estimate.Payment[inps.classList[1].substring(3)].replace('$', ''))
        }
        else {
          previousValue = parseFloat(findIfPreviousPayments.estimate.Payment[inps.classList[1].substring(3)])
        }
        console.log(previousValue, paymentValue)
      }
      bodyContent = {
        field: "Payment",
        id: inps.classList[2].substring(2), //target
        paymentType: `${inps.classList[1].substring(3)}`,
        value: paymentValue, //ex. QRCode Stage1
        previousValue: previousValue, //ex. QRCode Stage1
        by: localStorage.user_id
      }
      console.log(bodyContent)
      fetch(`${baseUrl}/api/estimates`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
      })
      .then(res=>{
        if (res.ok) {
          res = res.json()
          console.log(res)
        }
        else {
          throw new Error(res.statusText);
        }
        return res
      })
      .catch(err=>{
        console.error(err);
      });
    }
  })
}

function editOrder(ev) {
  console.log(ev.target)
  window.location.assign(`http://localhost:5500/createestimate.html?s=${ev.target.value}`)
}

function stageUpdated(ev) {
  console.log(ev.target.value)
  orderStageUpdate(ev.target)
}

async function orderStageUpdate(ev) {
  console.log(ev.offsetParent.id)
  bodyContent = {
    field: "Stage Update",
    id: ev.offsetParent.id, //target
    value: `button Stage${ev.value}`, //ex. QRCode Stage1
    by: localStorage.user_id
  }
  fetch(`${baseUrl}/api/estimates`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });
}

function delayedSort(a) {
  a.forEach(b => {
    let sortIterator = JSON.parse(localStorage.user_preferences).indexOf(b)+1
    applySortRules(b, sortIterator)
  })
}

let sortParams = []
function displayEstimateDetails(data) { 
  for(let eachSortParam in data[0].estimate) {
    if(!Array.isArray(data[0].estimate[eachSortParam])) {
      // console.log(eachSortParam)
      sortParams.push(eachSortParam)
    }
  }

  document.querySelector('.toggle-sort').addEventListener('click', toggleSortParams)


  setTimeout(() => {
    JSON.parse(localStorage.user_preferences).forEach(eachParam => {
    sortEstimates(eachParam)
  })}, 1000)

  // getEstimatesFromQuickbooks(data)
  // console.log(data)
  sortParams.forEach(eachParam => {
    console.log(eachParam)
    if(eachParam != "Date of Passing" && eachParam != "QBEstimateId" && eachParam != "QBCustomerId") {
      let newParam = createEls('DIV', 'sort-param', eachParam)
      newParam.classList.add(eachParam.replace(/\s+/g, '-').toLowerCase())
      newParam.addEventListener('click', sortEstimates)
      document.querySelector('.sort-by').appendChild(newParam)
    }
  })

  displayInitialData(data)
  if(window.location.search.includes("?s=")) {
    // console.log("SEARCH RESULT: ", window.location.search)
    let getTheId = window.location.search.substring(3, window.location.search.length)
    let getTheElement = document.getElementById(getTheId)
    setTimeout(
      () => {window.scrollTo({top: (getTheElement.offsetTop)*0.95, behavior: 'smooth'})
      getTheElement.classList.toggle('open')
      getTheElement.classList.toggle('shut')
    }, 1000
    )
  }
}

function toggleSortParams(ev) {
  console.log(ev)
  let sortTarg = document.querySelector('.sort-by')
  sortTarg.classList.toggle('show-all')
  sortTarg.classList.toggle('hide-all')
  if(sortTarg.classList.contains('hide-all')) {
    storePreferencesInDb()
    // displayInitialData(initData1, initData2)
  }
}

function storePreferencesInDb() {
  let putObj = {name: localStorage.username, preferences: JSON.parse(localStorage.user_preferences)}
  console.log(putObj)

  const putPrefsToDB = async () => {
    try {
      const result = await fetch(`${baseUrl}/api/userprefs`, {
        method: "PUT",
        body: JSON.stringify(putObj),
        // body: bodyFiller,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        console.log(res)
        location.reload()
      })
    }
    catch(e) {
      console.error("Critical failure: " + e.message)
    }
  }
  putPrefsToDB()
}

let iter = 0;
function sortEstimates(ev) {
  let targetSelector = ev.target != undefined ? ev.target.innerText : ev
  let targetQuery = targetSelector.replace(/\s+/g, '-').toLowerCase()
  // console.log(targetSelector, iter, targetQuery)
  let uniq = [...new Set(filterTargets)];
  uniq = uniq.sort((a,b) => {
    return parseFloat(a) - parseFloat(b)
  })
  document.querySelector(`.${targetQuery}.sort-param`).classList.toggle('sort-by-this')
  document.querySelector(`.${targetQuery}.sort-param`).style.left = uniq[iter]
  let localStore = JSON.parse(localStorage.user_preferences)
  if(document.querySelector(`.${targetQuery}.sort-param`).classList.contains('sort-by-this')) {
    iter++
    if(!localStore.includes(targetSelector)) {    
      localStore.push(targetSelector)
      console.log("LOCALSTORE: ", localStore)
      localStorage.user_preferences = JSON.stringify(localStore);
    }
  }
  else {
    iter--
    if(localStore.includes(targetSelector)) {
      let indy = localStore.indexOf(targetSelector)
      let revisedStore = localStore.filter((preference, i) => {
        if(i != indy) {
          return preference
        }
      })
      console.log(revisedStore)
      localStorage.user_preferences = JSON.stringify(revisedStore);
      location.reload()
    }
  }

  applySortRules(targetSelector, iter)
}

function applySortRules(targetSelector, iterator) {
  let newClassToSearch = targetSelector.replace(/\s+/g, '-').toLowerCase()
  newClassToSearch = newClassToSearch.replace('(', '\\\(')
  newClassToSearch = newClassToSearch.replace(')', '\\\)')
  let allSortTargets = document.querySelectorAll(`.${newClassToSearch}.estimate-details`)
  allSortTargets.forEach(eachTarget => {
    if(eachTarget.classList.contains('mini-display')) {
      console.log("did contain")
      // eachTarget.classList.add('sort' + iter)
    }
    else {
      // console.log("did not", eachTarget.parentElement.firstChild.children[1].innerText)
      eachTarget.classList.add('mini-display', 'sort' + iterator)
      if(iterator > 1) { //when filters are out of order, querySelector can't locate
        if(filterTargets.length === 0) {
          filterTargets.push(`${document.querySelector('.sort1').offsetLeft}px`)
        }
        if(document.querySelector(`.sort${iterator}`) === null) {
          // console.log(`.sort${iterator}`, document.querySelector(`.sort${iterator}`), document.querySelector(`.sort${iterator}`))
          let leftFrom = document.querySelector(`.sort${iterator}`).offsetLeft
          let widthFrom = document.querySelector(`.sort${iterator}`).offsetWidth
          eachTarget.style.left = `${leftFrom + widthFrom}px`
          filterTargets.push(`${leftFrom + widthFrom}px`)
        }
        else if(document.querySelector(`.sort${iterator-1}`) === null) {
          let referenceNums = document.querySelector('.each-estimate').querySelectorAll('.mini-display')
          // (referenceNums[0].offsetLeft - referenceNums[1].offsetLeft)
          let leftFrom = referenceNums[0].offsetLeft
          let widthFrom = (referenceNums[1].offsetLeft - referenceNums[0].offsetLeft)*(iterator-1)
          console.log("FIX THIS HERE", leftFrom, widthFrom)
          eachTarget.style.left = `${leftFrom + widthFrom}px`
          filterTargets.push(`${leftFrom + widthFrom}px`)
        }
        else {
          // console.log(`.sort${iterator-1}`, document.querySelector(`.sort${iterator-1}`), document.querySelector(`.sort${iterator}`))
          let leftFrom = document.querySelector(`.sort${iterator-1}`).offsetLeft
          let widthFrom = document.querySelector(`.sort${iterator-1}`).offsetWidth
          eachTarget.style.left = `${leftFrom + widthFrom}px`
          filterTargets.push(`${leftFrom + widthFrom}px`)
          // console.log({leftFrom, widthFrom, iterator}, document.querySelector(`.sort${iterator-1}`))
        }
      }
    }
  })
}

function toggleEstimateDetails(est) {
  est.target.classList.toggle('open')
  est.target.classList.toggle('shut')
}

function getEstimatesFromQuickbooks(dbEstimates) {
  const makeCallToQB = async () => {
    try {
      const result = await fetch(`https://rth-server.azurewebsites.net/getEstimateInfo`, {
        method: "POST",
        // body: JSON.stringify(entriesToStore),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        if(res.status == "500" || res.status == "501") {
          document.getElementById('initialize-quickbooks').style.opacity = 1;
          document.getElementById('initialize-quickbooks').style.pointerEvents = "auto";
          console.log(res)
        }
        else {
          document.getElementById('initialize-quickbooks').style.opacity = 0;
          document.getElementById('initialize-quickbooks').style.pointerEvents = "none";
          let parsedRes = res.json()
          .then(res2 => {
            console.log(res2)
            return res2
          })
          .then(res3 => {
            let qbKeyVals = {}
            res3.QueryResponse.Estimate.forEach(eachQBEstimate => {
              return qbKeyVals[eachQBEstimate.Id] = eachQBEstimate.TxnStatus
            })
            console.log(qbKeyVals)
            displayInitialData(dbEstimates, qbKeyVals)
            JSON.parse(localStorage.user_preferences).forEach(eachParam => {
              sortEstimates(eachParam)
            })
            return qbKeyVals
          })
        }
      })
    }
    catch(e) {
      console.error("Critical failure: " + e.message)
    }
  }
  makeCallToQB()
}



















// ---------------------------------------------------------------------------------------------------------------------------------
// CREATE ESTIMATE
// ---------------------------------------------------------------------------------------------------------------------------------

let openObject
let preFilledId = 0
let preFilledForm = {}
async function displayEstimateForm(a) {
  let submitWatcher0 = document.getElementById('submitEstimate0')
  submitWatcher0.addEventListener('click', submitEstimate)
  // let submitWatcher1 = document.getElementById('submitEstimate1')
  // submitWatcher1.addEventListener('click', submitEstimate)
  // let submitWatcher2 = document.getElementById('assign-driver')
  // submitWatcher2.addEventListener('click', submitTemplate)

  if(window.location.search.includes("?s=")) {
    // console.log("SEARCH RESULT: ", window.location.search)
    let getTheId = window.location.search.substring(3, window.location.search.length)
    let formInfo = await fillOutForm(getTheId)
    console.log("Searching for: ", getTheId, formInfo)
    preFilledId = formInfo[0]._id
    preFilledForm = formInfo[0].estimate
    for(let formLine in formInfo[0].estimate) {
      if(typeof formInfo[0].estimate[formLine] === "object" && formLine === "Cart") {
        console.log(typeof formInfo[0].estimate[formLine], formInfo[0].estimate[formLine])
        if(formInfo[0].estimate[formLine].length > 1) {
          console.log("Multiple!")
        }
        else {
          console.log("Single!", typeof formInfo[0].estimate[formLine], formLine)
          if(typeof formInfo[0].estimate[formLine] === "object" && formLine === "Cart") {
            for(let cartItem in formInfo[0].estimate[formLine]) {
              if(cartItem != 'total' && Object.keys(formInfo[0].estimate[formLine][cartItem]).length != 0) {
                console.log(cartItem, `${formInfo[0].estimate[formLine][cartItem].name} - ${formInfo[0].estimate[formLine][cartItem].cost}`)
                updateCart(`${formInfo[0].estimate[formLine][cartItem].name} - ${formInfo[0].estimate[formLine][cartItem].cost}`, formLine)
              }
            }
          }
          else {
            updateCart(formInfo[0].estimate[formLine][0], formLine)
          }
        }
      }
    }
  }

  a = a[0]
  openObject = a
  console.log(a.template)
  
  let petFormSection = document.querySelector('.pet-estimate-section')
  let ownerFormSection = document.querySelector('.owner-estimate-section')
  let orderFormSection = document.querySelector('.order-estimate-section')
  
  for(let eachSection in a.template) {
    let adjCount = 0
    let sectionName
    switch(eachSection) {
      case("Pet Information"): {
        sectionName = petFormSection
        break;
      }
      case("Owner Information"): {
        sectionName = ownerFormSection
        break;
      }
      case("Order Information"): {
        sectionName = orderFormSection
        break;
      }
      default:
        sectionName = "invalid"
        break;
    }
    if(sectionName != "invalid") {
      for(let rawLineData in a.template[eachSection]) {
        console.log(rawLineData)

        if(rawLineData != "Cremation Service" && rawLineData != "Nose Print" && rawLineData != "Urn") {
          adjCount++
          let adjTarg = Object.keys(a.template[eachSection])
          let blankLab = undefined
          // if(a.template[eachSection][adjTarg[adjCount]] != undefined && a.template[eachSection][adjTarg[adjCount]].type == "yes-no" && a.template[eachSection][rawLineData].type == "yes-no") {
          if(a.template[eachSection][adjTarg[adjCount]] != undefined && a.template[eachSection][adjTarg[adjCount]].type == "yes-no") {
            // console.log(adjCount, adjTarg[adjCount])
            blankLab = createEls('LABEL', ['estimate-form-label', 'blank-label'], '') 
          }
          adjTarg = rawLineData

          let formOpsL1 
          if(rawLineData.includes("PU")) {
            formOpsL1 = createEls('LABEL', ['estimate-form-label', "pickup-info", "toggle-view"], rawLineData.replace('PU', '(Pick Up)')) //create initial Label container
          }
          else if(rawLineData.includes("DO")) {
            formOpsL1 = createEls('LABEL', ['estimate-form-label', "dropoff-info", "toggle-view"], rawLineData.replace('DO', '(Drop Off)')) //create initial Label container
          }
          else {
            formOpsL1 = createEls('LABEL', 'estimate-form-label', rawLineData) //create initial Label container
          }

          // if(rawLineData.includes("PU")) {
          //   formOpsL1.classList.add("pickup-info", "toggle-view")
          // }
          // else if(rawLineData.includes("DO")) {
          //   formOpsL1.classList.add("dropoff-info", "toggle-view")
          // }
          let formOpsL2
          let formOpsL3
          let formOpsL4
          // console.log(a.template[eachSection][rawLineData].type)
          switch(a.template[eachSection][rawLineData].type) { //create custom input 
            case("short-text"): {
              formOpsL2 = createEls('INPUT', 'estimate-form-input', '')
              formOpsL2.type = "text"
              formOpsL2.name = rawLineData
              if(preFilledForm[rawLineData]) {
                // console.log("Had it!", rawLineData, preFilledForm[rawLineData])
                formOpsL2.value = preFilledForm[rawLineData]
              }
              break;
            }
            case("long-text"): {
              formOpsL2 = createEls('TEXTAREA', 'estimate-form-input', '')
              formOpsL2.type = "text"
              formOpsL2.name = rawLineData
              if(preFilledForm[rawLineData]) {
                console.log("Had it!", rawLineData, preFilledForm[rawLineData])
                formOpsL2.value = preFilledForm[rawLineData]
              }
              break;
            }
            case("yes-no"): {
              formOpsL1.classList.add("adjust-me")
              let innerLabel3 = createEls('LABEL', 'radio-inner-label', 'Yes')
              formOpsL3 = makeRadioButtons('Yes', rawLineData)
              let innerLabel4 = createEls('LABEL', 'radio-inner-label', 'No')
              formOpsL4 = makeRadioButtons('No', rawLineData)
              let radioHolder1 = createEls('DIV', 'radio-inner-holder', '')
              radioHolder1.append(formOpsL3, innerLabel3)
              let radioHolder2 = createEls('DIV', 'radio-inner-holder', '')
              radioHolder2.append(formOpsL4, innerLabel4)
              formOpsL2 = createEls('FORM', 'inner-estimate-form', '')
              formOpsL2.append(radioHolder1, radioHolder2)
              break;
            }
            case("dropdown"): {
              formOpsL2 = makeDropdownOptions(rawLineData)
              break;
            }
            default: 
            formOpsL2 = createEls('LABEL', 'placeholder', 'placeholder')
            break;
          }
          formOpsL1.appendChild(formOpsL2)
          // formOpsL3 != undefined ? formOpsL1.appendChild(formOpsL3) : null //if formOpsL3 exists, add to L1.  Else, do nothing.
          // formOpsL4 != undefined ? formOpsL1.appendChild(formOpsL4) : null //if formOpsL4 exists, add to L1.  Else, do nothing.
          sectionName.appendChild(formOpsL1)
          if(blankLab != undefined) {
            sectionName.appendChild(blankLab)
          }
        }
      }
    }
  }

  function makeDropdownOptions(type) {
    let whichDropDown = {}
    switch(type) {
      // case "Cremation Service": 
      //   whichDropDown = openObject.template["cremation"]
      //   break;
      case "Paw Print Options": 
        whichDropDown = openObject.template["pawprints"]
        break;
      // case "Urn": 
      //   whichDropDown = openObject.template["urns"]
      //   break;
      case "Jewelry/Keychain": 
        whichDropDown = openObject.template["jewelry"]
        break;
      // case "Nose Print": 
      //   whichDropDown = openObject.template["noseprint"]
      //   break;
      // case "Special Order Statues": 
      //   whichDropDown = openObject.template["statues"]
      //   break;
      // case "Delivery Option": 
      //   whichDropDown = openObject.template["delivery"]
      //   break;
      case "Haircut": 
        whichDropDown = openObject.template["haircut"]
        break;
      case "Dental": 
        whichDropDown = openObject.template["dental"]
        break;
      case "Bath": 
        whichDropDown = openObject.template["bath"]
        break;
    }

    let selectContainer = createEls('SELECT', 'estimate-form-input', '')
    for(let selectOptions in whichDropDown) {
      //selectOptions now = the key for each item in the respective drop down menu
      let option = createEls('OPTION', 'drop-down-options', selectOptions)
      option.value = `${selectOptions} - ${whichDropDown[selectOptions]}`
      option.addEventListener('click', updateCart)
      selectContainer.appendChild(option)
    }

    return selectContainer
  }

  function makeRadioButtons(labelName, forName) {
    // let innerLabel = createEls('LABEL', 'radio-inner-label', labelName)
    let innerInput = createEls('INPUT', 'estimate-form-input', '')
    innerInput.type = "radio"
    innerInput.name = forName
    innerInput.value = labelName
    if(innerInput.name.includes("Pick Up") || innerInput.name.includes("Return Cremains")) {
      if(labelName == "Yes") {
        innerInput.checked = true
      }
    }
    else if(labelName == "No") {
      innerInput.checked = true
    }
  
    // innerLabel.appendChild(innerInput)
    innerInput.addEventListener('click', addAlternateAddressing)
    return innerInput
  }
}

function addAlternateAddressing(ev) {
  console.log(ev.target.name)
  if(ev.target.name.includes("Pick Up") || ev.target.name.includes("Return Cremains")) {
    let targ = ev.target.name.includes("Pick Up") ? "pickup-info" : "dropoff-info"
    document.querySelectorAll(`.${targ}`).forEach(eachTarg => {
      eachTarg.classList.toggle('toggle-view')
    })
  }
}

let cartItems = {};

async function updateCart(c, d) {
  console.log(typeof c, c)
  let searchRef = typeof c === "object" ? c.target.value : c
  console.log(searchRef)

  let cartTotal = document.querySelector('.cart-total')
  let cartCurrent = parseInt(document.querySelector('.cart-total').innerText.replace('$', ''))
  let itemCost = 0
  let itemName 
  let itemType
  if(searchRef.includes('\$')) {
    itemCost = parseFloat(searchRef.substring((searchRef.search('\\$') + 1), searchRef.length))
    itemName = searchRef.substring(0, (searchRef.search('\\$') - 3)) 
    console.log("old: ", itemCost)
  }
  else if(preFilledForm.Cart != undefined) {
    itemCost = parseFloat(searchRef.substring((searchRef.lastIndexOf(' - ') + 3), searchRef.length))
    itemName = searchRef.substring(0, (searchRef.lastIndexOf(' - '))) 
    console.log("Cart contained! ", preFilledForm.Cart, itemCost, itemName)
  }
  else {
    console.log("new: ", searchRef)
    itemName = searchRef
    catalogRetriever = await getItemCost(searchRef)
    itemCost = parseInt(catalogRetriever[0].cost.replace('$', ''))
    // itemType = catalogRetriever[0].category
    itemType = catalogRetriever
    console.log(itemCost)
    console.log("new: ", itemCost, cartCurrent,(cartCurrent + itemCost))
  }
  let taxRate = await getSalesTax()
  cartTotal.innerText = '$' + (cartCurrent + itemCost).toFixed(2)

  // let itemType = d != undefined ? d : c.target.parentElement.parentElement.childNodes[0].data
  let cart = document.querySelector('.cart')
  let newItem = document.createElement('DIV')
  let deleteItem = document.createElement('DIV')
  let deleteItemHelper = document.createElement('P')
  deleteItemHelper.classList.add('hide-me')
  deleteItemHelper.innerText = itemType //itemtype doesn't work, which is why arrays in basic form haven't worked.
  deleteItem.classList.add('delete-item')
  deleteItem.addEventListener('click', deleteCartItem)
  // let discountItem = createEls('FORM', 'discount-item', '')
  let taxRateLabel = createEls('LABEL', 'tax-rate-label', 'Tax')
  let taxRateEL = createEls('INPUT', 'tax-rate', `${(taxRate * 100).toFixed(1)}%`)
  taxRateEL.value = taxRate * 100 + '%'
  taxRateEL.defaultValue = taxRate * 100 + '%'
  let taxTotalEL = createEls('INPUT', 'tax-total', `$${(taxRate * itemCost).toFixed(2)}`)
  taxTotalEL.value = '$' + (taxRate * itemCost).toFixed(2)
  let discountItemRateLabel = createEls('LABEL', 'discount-item-rate-label', 'Discount')
  let discountItemRate = createEls('INPUT', 'discount-item-rate', '')
  discountItemRate.addEventListener('input', discountCartItem)
  let discountItemAmount = createEls('INPUT', 'discount-item-amount', '')
  let discountItemTotal = createEls('INPUT', 'discount-item-total', `$${itemCost}`)
  discountItemTotal.value = '$' + (itemCost + (taxRate * itemCost)).toFixed(2)
  discountItemTotal.placeholder = (itemCost + (taxRate * itemCost)).toFixed(2)
  // let totalHelper = createEls('P', 'discount-total-helper', '$')
  let discountItemInitial = createEls('INPUT', 'discount-item-initial', '')
  discountItemInitial.value = itemCost

  if(preFilledForm.Cart != undefined) {
    for(let itemInCart in preFilledForm.Cart) {
      if(preFilledForm.Cart[itemInCart].name === itemName && preFilledForm.Cart[itemInCart].discount != null) {
        discountItemRate.value = preFilledForm.Cart[itemInCart].discount + '%'
        discountItemAmount.value =  itemCost * (preFilledForm.Cart[itemInCart].discount * .01)
        console.log(itemCost, (preFilledForm.Cart[itemInCart].discount * .01), itemCost * (preFilledForm.Cart[itemInCart].discount * .01), preFilledForm.Cart[itemInCart])
      }
    }
  }

  // discountItem.append(discountItemRate, discountItemTotal, discountItemInitial)
  newItem.classList.add('item-in-cart')
  if(itemName === "USPS Signature" || itemName === "Priority Mail NSR" || itemName === "Hand Delivery" ) {
    newItem.classList.add('non-taxable')
  }
  else {
    newItem.classList.add('taxable')
  }
  let itemTypeGetter = itemType ?? await getItemCost(itemName)
  console.log("ITEM TYPE GETTER: ", itemName, itemTypeGetter, itemType)
  let newItemName = createEls('P', 'item-in-cart-name', itemName)
  let newItemType = createEls('P', 'item-in-cart-type', itemTypeGetter[0].category)
  let newItemCost = createEls('P', 'item-in-cart-cost', `$${itemCost}`)
  newItem.append(newItemName, newItemType, newItemCost)
  cart.prepend(newItem)
  // newItem.append(deleteItem, discountItem)
  newItem.append(deleteItem, discountItemRateLabel, discountItemRate, discountItemAmount, discountItemTotal, discountItemInitial, taxRateLabel, taxRateEL, taxTotalEL)
  deleteItem.appendChild(deleteItemHelper)
  if(cartItems[itemType]) {
    cartItems[itemType].push(searchRef)
    // cartItems[itemType].push(itemType)
  }
  else {
    cartItems[itemType] = [searchRef]
    // cartItems[itemType] = [itemType]
  }
  console.log(cartItems)
  document.querySelector('.cart').style.visibility = "visible"
  discountCartItem()
}

function discountCartItem(d) {
  let newTotal = 0
  let totalToSort = document.querySelectorAll('.item-in-cart')
  totalToSort.forEach((eachCartItem, cartIndex) => {
    let targPar = eachCartItem
    console.log(targPar, targPar.querySelector('.discount-item-rate').value, targPar.querySelector('.discount-item-amount').value)
    // if(targPar.querySelector('.discount-item-rate').value === "") {
    //   targPar.querySelector('.discount-item-rate').value = "0"
    // }
    let targCost = parseFloat(targPar.querySelector('.item-in-cart-cost').innerText.replace('$', ''))
    // let targDisc = (parseFloat(targPar.querySelector('.discount-item-rate').value) * 0.01)
    let targDisc = (targPar.querySelector('.discount-item-rate').value.replace('%', '') * 0.01)
    targPar.querySelector('.discount-item-amount').value = '$' + ((targCost * targDisc).toFixed(2))
    let newCost = (targCost -  (targCost * targDisc))
    let targTax = parseFloat(targPar.querySelector('.tax-rate').value)*0.01
    let targTotal = newCost + (newCost * targTax)
    targPar.querySelector('.discount-item-total').value = '$' + (targTotal).toFixed(2)
    newTotal += targTotal
    let cartTotal = document.querySelector('.cart-total')
    cartTotal.innerText = '$' + (newTotal).toFixed(2)
  })
}

let deletedItems = []
function deleteCartItem(d) {
  console.log(d.target)
  d.target.parentElement.remove()
  let typeToDelete = d.target.children[0].innerText
  let deleteCheckValue = d.target.parentElement.firstChild.data
  console.log(typeToDelete, cartItems[typeToDelete], deleteCheckValue)
  let deleteIndex = cartItems[typeToDelete].indexOf(deleteCheckValue)
  cartItems[typeToDelete].splice(deleteIndex, 1)
  console.log(cartItems, d.target.parentElement.firstElementChild.innerText)
  deletedItems.push(d.target.parentElement.firstElementChild.innerText)
  discountCartItem()
}

function getFormInfo() {
  let formEntries = {}
  let inputValues = document.querySelectorAll('.estimate-form-input')
  for (let entries in inputValues) { 
    if(inputValues[entries].labels) { 
      let {name, value} = inputValues[entries]
      // console.log("STAGE 2: ", name, inputValues[entries], inputValues[entries].labels)
      if(inputValues[entries].type == "radio") { //Radio options
        if(inputValues[entries].checked === true) {
          formEntries[inputValues[entries].name] = inputValues[entries].value
        }
      }
      else if(!name) { //Dropdown options
        // console.log(inputValues[entries])
        if(cartItems[inputValues[entries].previousSibling.data]) {
          // console.log(inputValues[entries],inputValues[entries].previousSibling.data, "**************************")
          formEntries[inputValues[entries].previousSibling.data] = cartItems[inputValues[entries].previousSibling.data]
        }
      }
      else { //All other Input types
        formEntries[name] = value
      }
    }
  }

  let cartValues = document.querySelector('.cart').children
  let count = 0
  let totalKeeper = 0
  let cartHolder = {}
  for (let entries in cartValues) {
    entries = cartValues[entries] 
    if(entries.classList != undefined && entries.classList.contains('taxable')) { 
      cartHolder[`product${count}`] = {
        name: entries.querySelector('.item-in-cart-name').innerText,
        type: entries.querySelector('.item-in-cart-type').innerText,
        cost: parseFloat(entries.querySelector('.item-in-cart-cost').innerText.replace('$', '')),
        discount: parseFloat(entries.querySelector('.discount-item-rate').value.replace('%', '')),
        tax: parseFloat(entries.querySelector('.tax-rate').value.replace('%', '')),
        total: parseFloat(entries.querySelector('.discount-item-total').value.replace('$', ''))
      }
      totalKeeper += parseFloat(entries.querySelector('.discount-item-total').value.replace('$', ''))
    }
    // else if(entries.classList != undefined && entries.classList.contains('cart-total')) { 
    //   // cartHolder['total'] = document.querySelector('.cart-total').innerText
    //   // cartHolder.total = totalKeeper.toFixed(2)
    // }
    count++
  }
  cartHolder.total = totalKeeper.toFixed(2)
  formEntries['Cart'] = cartHolder

  formEntries["Created By"] = localStorage.username
  console.log("PREFILLEDFORM: ", preFilledForm, preFilledForm.Stage, totalKeeper)
  if(preFilledForm.Stage === undefined) {
    formEntries["Stage"] = {"value": "Stage1", "method": "employee"}
  }
  else {
    formEntries["Stage"] = preFilledForm.Stage
  }
  return formEntries
}

function submitEstimate(ev) {
  ev.preventDefault()
  console.log(ev)
  let entriesToStore = getFormInfo()
  let changesToStore = diff(entriesToStore, preFilledForm)
  console.log("DIFFERENCES: ", changesToStore)
  console.log("ENTRIES TO STORE: ", entriesToStore)
  let extraNum = ev.target.id.slice(-1)
  extraNum == "0" ? extraNum = '' : extraNum

  const postEstimateToQB = async () => {
    try {
      // const result = await fetch(`https://rth-server.azurewebsites.net/createEstimate${extraNum}`, {
      const result = await fetch('http://localhost:3000/api/estimates', {

        method: "POST",
        body: JSON.stringify(entriesToStore),
        // body: bodyFiller,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        if(res.status == "500" || res.status == "501") {
          document.getElementById('initialize-quickbooks').style.opacity = 1;
          document.getElementById('initialize-quickbooks').style.pointerEvents = "auto";
          console.log(res)
        }
        else {
          document.getElementById('initialize-quickbooks').style.opacity = 0;
          document.getElementById('initialize-quickbooks').style.pointerEvents = "none";
          let parsedRes = res.json().then(res2 => {
            console.log(res2)
            entriesToStore["QBEstimateId"] = res2.Estimate.Id
            entriesToStore["QBCustomerId"] = res2.Estimate.CustomerRef.value
            return entriesToStore
          }).then(postRes => {
            postEstimateToServer(postRes)
          })
        }
      })
    }
    catch(e) {
      console.error("Critical failure: " + e.message)
    }
  }
  // postEstimateToQB()

  const postEstimateToServer = async (entries, method) => {
    try {
      console.log(entries)
      // const result = await fetch('https://rth-server.azurewebsites.net/api/estimates', {
      const result = await fetch(`${baseUrl}/api/estimates`, {
        method: method,
        body: JSON.stringify(entries),
        // body: bodyFiller,
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        if(res.status == "500" || res.status == "501") {
          console.log("it doesn't works! ", res)
          return res
        }
        else {
          console.log("it works! ", res.json())
          return res
        }
      })
    }
    catch(e) {
      console.error("Critical failure: " + e.message)
    }
  }
  // console.log(changesToStore, JSON.stringify(changesToStore) === '{}', JSON.stringify(preFilledForm) != '{}')
  if(JSON.stringify(changesToStore) === '{}' && JSON.stringify(preFilledForm) != '{}') {
    console.log('no changes made!')
    // postEstimateToServer(entriesToStore, 'POST')
  }
  else if(JSON.stringify(changesToStore) === '{}') {
    console.log('storing the new order')
    postEstimateToServer(entriesToStore, 'POST')
  }
  else {
    console.log('editing existing order')
    for(let newKey in changesToStore) {
      console.log(newKey, changesToStore[newKey], typeof newKey, typeof changesToStore[newKey])
      if(deletedItems.length > 0) {
        let prodToDelete = "product" + (parseInt(Object.keys(changesToStore[newKey]).length) - 1)
        console.log("CLEAR THE QUEUE", deletedItems, prodToDelete, Object.keys(changesToStore[newKey]).length)
        let newEdits = {
          field: "Edit",
          id: preFilledId, //target
          linekey: newKey,
          value: {}, 
          by: localStorage.user_id,
          storeName: prodToDelete
        }
        console.log(newEdits)
        postEstimateToServer(newEdits, 'PUT')
      }
      if(newKey === "Cart") {
        for(let deepKey in changesToStore[newKey]) {
          console.log(deepKey)
          if(entriesToStore["Cart"][deepKey].name || deepKey === "total") {
            console.log(deepKey, changesToStore[newKey], entriesToStore["Cart"][deepKey])
            let newEdits = {
              field: "Edit",
              id: preFilledId, //target
              linekey: newKey,
              value: changesToStore[newKey][deepKey], //ex. QRCode Stage1
              by: localStorage.user_id,
              storeName: deepKey
            }
            // console.log(newEdits)
            postEstimateToServer(newEdits, 'PUT')
          }
        }
      }
      else {
        let newEdits = {
          field: "Edit",
          id: preFilledId, //target
          linekey: newKey,
          value: changesToStore[newKey], //ex. QRCode Stage1
          by: localStorage.user_id
        }
        console.log(newEdits)
        postEstimateToServer(newEdits, 'PUT')
      }
    }
  }
}

let diff = function (obj1, obj2) {
  // Make sure an object to compare is provided
  if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
      return obj1;
  }

  var diffs = {};
  var key;

  /**
   * Check if two arrays are equal
   * @param  {Array}   arr1 The first array
   * @param  {Array}   arr2 The second array
   * @return {Boolean}      If true, both arrays are equal
   */
  var arraysMatch = function (arr1, arr2) {
    console.log(arr1, arr2)
      // Check if the arrays are the same length
      if (arr1.length !== arr2.length) {
        console.log("RETURNED FALSE: ", arr1, arr2)
        return false
      };
      // Check if all items exist and are in the same order
      for (var i = 0; i < arr1.length; i++) {
          if (arr1[i] !== arr2[i]) {
            console.log("RETURNED FALSE: ", arr1, arr2)
            return false
          };
      }
      // Otherwise, return true
      console.log("RETURNED TRUE: ", arr1, arr2)
      return true;
  };

  /**
   * Compare two items and push non-matches to object
   * @param  {*}      item1 The first item
   * @param  {*}      item2 The second item
   * @param  {String} key   The key in our object
   */
  var compare = function (item1, item2, key) {

      // Get the object type
      var type1 = Object.prototype.toString.call(item1);
      var type2 = Object.prototype.toString.call(item2);

      // Taken out for now, but checks if type2 is undefined (removed) which should still be checked for
      if (type2 === '[object Undefined]') {
        console.log("UNDEFINED: ", type1, type2)
          // diffs[key] = item1;
          return;
      }

      // If items are different types
      if (type1 !== type2) {
          console.log("DIFFERENT TYPES: ", type1, type2)
          diffs[key] = item2;
          return;
      }

      // If an object, compare recursively
      if (type1 === '[object Object]') {
          var objDiff = diff(item1, item2);
          if (Object.keys(objDiff).length > 0) {
            console.log("OBJECT COMPARISON: ", key, objDiff)
              diffs[key] = objDiff;
          }
          return;
      }

      // If an array, compare
      if (type1 === '[object Array]') {
          if (!arraysMatch(item1, item2)) {
            console.log("ARRAY COMPARISON: ", key, item2)
              diffs[key] = item2;
          }
          return;
      }

      // Else if it's a function, convert to a string and compare
      // Otherwise, just compare
      if (type1 === '[object Function]') {
          if (item1.toString() !== item2.toString()) {
            console.log("DOES NOT EQUAL (converted): ", key, item1, item2)
              diffs[key] = item2;
          }
      } else {
          if (item1 !== item2 ) {
            console.log("DOES NOT EQUAL: ", key, item1, item2)
              diffs[key] = item1;
          }
      }

  };


  //
  // Compare our objects
  //

  // Loop through the first object
  for (key in obj1) {
    // console.log("looping through first obj...", key)
      if (obj1.hasOwnProperty(key)) {
          // console.log("found something in first obj...", key)
          compare(obj1[key], obj2[key], key);
          // if(key === "Cart" && !obj2.hasOwnProperty(key)) {
          if(key === "Cart") {
            console.log(diff(obj1[key], obj2[key]))
            diffs[key] = obj1[key]
            // let additionObj = Object.keys(obj2[key])[0]
            // let newProd = parseInt(additionObj.substring(7, additionObj.length))
            // diffs[key][`product${newProd}`] = obj1[key][`product${newProd}`]
          }
      }
      else {
        console.log("didn't find anything HERE: ", key)
      }
  }

  // Loop through the second object and find missing items
  //this is where everything present in prefilledform and absent in newentries gets logged
  for (key in obj2) {
      if (obj2.hasOwnProperty(key)) {
          // if (!obj1[key] && obj1[key] !== obj2[key] ) {
            if(key === "Cart") {
              // let additionObj = Object.keys(obj2[key])[0]
              // let newProd = parseInt(additionObj.substring(7, additionObj.length) + 1)
              // console.log(additionObj, newProd, Object.keys(obj2[key])[0].includes('product'))
              console.log("HAD MISSING ITEM: ", key, obj2[key])
              // diffs[key][`product${newProd}`] = obj2[key][`product${newProd-1}`]
            }
          // }
      }
  }

  // Return the object of differences
  return diffs;

};

async function fillOutForm(orderToGet) {
  try {
    console.log(orderToGet)
    // let url = `${baseUrl}/api/estimate${window.location.search}`
    // const result = await fetch('https://rth-server.azurewebsites.net/api/estimates', {
    const result = await fetch(`http://localhost:3000/api/estimate${window.location.search}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res=>{
      if (res.ok) {
        res = res.json()
        res.then(newRes => {
          // console.log(newRes)
          return newRes
        })
      }
      else {
        throw new Error(res.statusText);
      }
      return res
    })
    return result
  }
  catch(e) {
    console.error("Critical failure: " + e.message)
  }
}

















// ---------------------------------------------------------------------------------------------------------------------------------
// SCHEDULES
// ---------------------------------------------------------------------------------------------------------------------------------
let empHoursObj = {}
// let date = new Date('2021/4/1'); //WILL BREAK ON NEW YEAR
let date = new Date(); 
let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let monthNames = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
let dayNum = date.getDay()
let monthNum = date.getUTCMonth()+1
let dayName = dayNames[date.getDay()]
let monthName = monthNames[date.getUTCMonth()]
let dayOfMonth = date.getDate()
Date.prototype.isValid = function() { //use this to confirm all dates are valid
  return this.getTime() === this.getTime();
}
function displaySchedules(f) {
  console.log(f)
  let updateTimesButton = document.getElementById('submit-schedule-change')
  updateTimesButton.addEventListener('click', handleTimeChange)

  let clearTimesButton = document.getElementById('clear-from-schedule')
  clearTimesButton.addEventListener('click', handleTimeChange)

  document.getElementById('startPhase').addEventListener('click', handleAMPMChange)
  document.getElementById('endPhase').addEventListener('click', handleAMPMChange)

  // let date = new Date();
  // let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // let monthNames = ["January","February","March","April","May","June","July",
  // "August","September","October","November","December"];
  // let dayNum = date.getDay()
  // let monthNum = date.getUTCMonth()+1
  // let dayName = dayNames[date.getDay()]
  // let monthName = monthNames[date.getUTCMonth()]
  // let dayOfMonth = date.getDate()
  // Date.prototype.isValid = function() { //use this to confirm all dates are valid
  //   return this.getTime() === this.getTime();
  // }

  let sched = f.scheduleInfo
  let n1 = JSON.parse(localStorage.namemap)
  let n2 = JSON.parse(localStorage.idmap)
  sched.forEach(eachEmpHours => {
    // console.log(eachEmpHours)
    let tempNameMaker = findNameFromId(n1, n2, eachEmpHours.userId)
    empHoursObj[tempNameMaker] = eachEmpHours.details
  })


  let n = 0
  let revisedDayNames = Array.from(dayNames)
  revisedDayNames.unshift("blank")
  revisedDayNames.forEach(eachDay => { //create header with all day names
    let c = dayNames.indexOf(eachDay)
    let d = dayNames.indexOf(dayName)
    let e = c - d
    let calendarDate = dayOfMonth + e
    let testDate = new Date(date.getFullYear(), monthNum-1, 0).getDate()
    let dayDiv
    console.log(calendarDate, testDate, c, d, e, dayOfMonth)
    if(calendarDate > testDate) {
      calendarDate = calendarDate % testDate
      console.log("If: ", calendarDate, testDate, eachDay, monthNum)
      dayDiv = makeScheduleHeader(eachDay, monthNum, calendarDate)
    }
    else if(calendarDate <= 0) {
      testDate = new Date(date.getFullYear(), monthNum-1, 0).getDate()
      calendarDate += testDate
      console.log("Else If: ", calendarDate, testDate, eachDay, monthNum)
      dayDiv = makeScheduleHeader(eachDay, monthNum-1, calendarDate)
    }
    else {
      console.log("Else: ", calendarDate, eachDay, monthNum)
      dayDiv = makeScheduleHeader(eachDay, (monthNum-1), calendarDate)
    }
    // console.log(eachDay, monthNum, calendarDate, testDate)
    document.querySelector('.schedule-header').appendChild(dayDiv)
  })

  for(let typeCategory in f.userTypes) {
    let userType = f.userTypes[typeCategory]._id
    if(userType != "owner") {
      f.userTypes[typeCategory].name.forEach((eachName, eachIndex) => {
        revisedDayNames.forEach(eachDay => { 
          if(eachDay != "blank") {
            let c = dayNames.indexOf(eachDay)
            let d = dayNames.indexOf(dayName)
            let e = c - d
            let calendarDate = dayOfMonth + e
            let testDate = new Date(date.getFullYear(), monthNum-1, 0).getDate()
            let theDay
            if(calendarDate > testDate) {
              // console.log("IF: ")
              calendarDate = calendarDate % testDate
              theDay = makeEachDay(userType, monthNum, calendarDate, eachName)
            }
            else if(calendarDate <= 0) {
              // console.log("ELSE IF: ")
              testDate = new Date(date.getFullYear(), monthNum-1, 0).getDate()
              calendarDate += testDate
              theDay = makeEachDay(userType, monthNum-1, calendarDate, eachName)
            }
            else {
              // console.log("ELSE: ")
              theDay = makeEachDay(userType, (monthNum-1), calendarDate, eachName)
            }
            document.querySelector(`.schedule-${userType}`).appendChild(theDay)
          }
          else {
            let employeeContainer = createEls('DIV', ['schedule-employee-container', capitalizeFirstLetter(eachName, true).replace(' ', '-')], '')
            let employeeName = createEls('P', 'schedule-employee-name', trimFullName(eachName))
            let bg = f.userTypes[typeCategory].background[eachIndex]
            let employeePicture = createEls('IMG', ['account-background'], '')
            // console.log(bg)
            employeePicture.src = bg
            employeeContainer.append(employeeName, employeePicture)

            document.querySelector(`.schedule-${userType}`).appendChild(employeeContainer)
          }
        })
      })
    }
  }
}

function makeScheduleHeader(day, month, date) {
  month += 1
  let dayElement
  // console.log(day, month, date, `${day} ${month}/${date}`, `${month}/${date}`)
  if(day != "blank") {
    dayElement = document.createElement('DIV')
    dayElement.classList.add('day')
    dayElement.innerText = `${day} ${month}/${date}`
    dayElement.id = `${month}/${date}`
  }
  else {
    dayElement = document.createElement('DIV')
    dayElement.classList.add('blank')
  }
  return dayElement
}

function makeEachDay(type, month, date, name) {
  month += 1
  let thisDay = document.createElement('DIV')
  // name = capitalizeFirstLetter(name.replace(' ', '-'), true)
  name = capitalizeFirstLetter(name, true)
  // console.log(type, month, date, name, empHoursObj)
  thisDay.classList.add(name.replace(' ', '-'), `${month}/${date}`, 'day', type)
  thisDay.addEventListener('click', updateSchedules)
  if(empHoursObj[name] && empHoursObj[name][`${month}/${date}`]) {
    thisDay.innerText = empHoursObj[name][`${month}/${date}`]
    thisDay.classList.add('work-day')
    document.getElementById(`${month}/${date}`).classList.add('work-day')
  }
  return thisDay
}


function updateSchedules(g) {
  console.log(g.target)
  if(document.querySelector('.currently-selected') != null) {
    document.querySelector('.currently-selected').classList.remove('currently-selected')
    g.target.classList.add('currently-selected')
  }
  else {
    g.target.classList.add('currently-selected')
  }

  if(document.querySelector('.selected-sibling') != null) {
    document.querySelectorAll('.selected-sibling').forEach(eachSib => {
      eachSib.classList.remove('selected-sibling')
      console.log(eachSib, eachSib.classList)
    })
    let selectedSibSearch = `.schedule-employee-container.${g.target.classList[0]}`
    let daySearch = document.getElementById(g.target.classList[1])
    document.querySelectorAll(selectedSibSearch)[0].classList.add('selected-sibling')
    daySearch.classList.add('selected-sibling')
    console.log(document.querySelectorAll(selectedSibSearch), daySearch)
  }
  else {
    let selectedSibSearch = `.schedule-employee-container.${g.target.classList[0]}`
    let daySearch = document.getElementById(g.target.classList[1])
    document.querySelectorAll(selectedSibSearch)[0].classList.add('selected-sibling')
    daySearch.classList.add('selected-sibling')
  }

  let updateTimes = document.querySelector('.update-times')
  updateTimes.style.top = g.target.offsetTop + "px"
  updateTimes.style.left = g.target.offsetLeft + "px"
  updateTimes.style.opacity = 1
  updateTimes.style.pointerEvents = "auto"
}

function handleAMPMChange(ev) {
  ev.preventDefault()
  console.log(ev.target.value)
  if(ev.target.value == 'am') {
    ev.target.value = 'pm'
  }
  else if(ev.target.value == 'pm') {
    ev.target.value = 'am'
  }
}

function handleTimeChange(h) { //split down the middle with orange for AM times and purple for PM times
  console.log(h)
  h.preventDefault()

  if(h.target.id === "clear-from-schedule") {

  }

  let shortcut = document.querySelector('.currently-selected')
  shortcut.classList.add('work-day')
  let employeeName = shortcut.classList[0]

  let n = JSON.parse(localStorage.namemap)
  let m = JSON.parse(localStorage.idmap)
  let employeeId = findIdFromName(n, m, employeeName)

  let employeeDate = shortcut.classList[1]
  let empTimeStart = document.getElementById('eStart').value + document.getElementById('startPhase').value
  let empTimeEnd = document.getElementById('eEnd').value + document.getElementById('endPhase').value
  let empTimes = h.target.id === "clear-from-schedule" ? "clear" : empTimeStart + "-" + empTimeEnd
  let bodyFiller = {userId: employeeId, date: employeeDate, times: empTimes}
  shortcut.innerText = empTimes === "clear" ? "" : empTimes
  console.log(bodyFiller)
  const updateSchedules = async () => {
      const result = await fetch(`${baseUrl}/api/schedules`, {
      method: "PUT",
      body: JSON.stringify(bodyFiller),
      // body: bodyFiller,
      headers: {
          'Content-Type': 'application/json',
      }
      }).then(res => {
      return res.json()
      })
  }
  updateSchedules()
}
















// ---------------------------------------------------------------------------------------------------------------------------------
// ROUTES
// ---------------------------------------------------------------------------------------------------------------------------------

let matchTheName
let matchTheId
let driverFinder = 0
function displayRoutes(i) {
  if ('geolocation' in navigator) {
    console.log('geolocation available')
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {enableHighAccuracy: true})
  }
  else {
    console.log('geolocation is NOT available')
  }

  i.userTypes.forEach((eachType, typeNum) => {
    if(eachType._id === "driver") {
      driverFinder = typeNum
    }
  })
  
  async function successCallback(pos) {
    console.log(pos)

    let mymap = L.map('mapid').setView([pos.coords.latitude, pos.coords.longitude], 10);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYmxhbGV4YW5kZXIiLCJhIjoiY2t1cTFpbm9jMDZzODJwbzZsZHFhZThkeCJ9.Z9wxUL236mSEqIRMtdVY4w'
    }).addTo(mymap);

    matchTheName = i.userTypes[driverFinder].name
    console.log(matchTheName)
    matchTheId = i.userTypes[driverFinder].id
    let keepTrackOfPosition = []
    let keepTrackOfId = []
    let counter = 0

    let getLocations = await fetch(`http://localhost:3000/api/locations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res=>{
      if (res.ok) {
        res = res.json()
        // console.log("NEW LOCATIONS CALL RES: ", res, res.value)
      }
      else {
        throw new Error(res.statusText);
      }
      return res
    }).then(res2 => {
      generateMapCoords(res2)
      createDriverMarkers(res2)
    })
    .catch(err=>{
      console.error(err);
    });
    // console.log("GET LOCATIONS: ", getLocations)


    //success
    //forEach coordData in [data] make markers for Pickup
    function generateMapCoords(driverData) {
      // console.log("Generate Map Coords initiated", driverData)
      i.coordData.forEach((eachCoord, i) => {
        eachCoord = eachCoord.value
        let marker = L.marker([eachCoord.estimate.Coords.lat, eachCoord.estimate.Coords.long], {title: `${eachCoord.estimate['Pet Name']} / pet`}).addTo(mymap);
        marker.bindTooltip(`${eachCoord.estimate['Pet Name']} / pet`);
        marker.on('click', onMarkerClick)
        keepTrackOfPosition.push(eachCoord.estimate['Pet Name'])
        keepTrackOfId.push(eachCoord._id)
        if(eachCoord.changelog[0]) {
          // console.log(eachCoord.changelog)
          // let newestLog = eachCoord.changelog.length - 1
          let newestLog = 0
          eachCoord.changelog.forEach((eachLog, logNum) => {
            if(eachLog["Assigned to"]) {
              newestLog = logNum
            }
          })
          if(eachCoord.changelog[newestLog]["Assigned to"] != undefined && eachCoord.changelog[newestLog]["Assigned to"].value != null) {
            let driverName = matchTheName[matchTheId.indexOf(eachCoord.changelog[newestLog]["Assigned to"].value)]
            // let testName = findNameFromId(matchTheName, matchTheId, eachCoord.changelog[newestLog]["Assigned to"].value)
            let petName = eachCoord.estimate['Pet Name']
            console.log(driverName, petName)
            let newLat = parseFloat(driverData[matchTheName.indexOf(driverName)].lat) 
            let newLong = parseFloat(driverData[matchTheName.indexOf(driverName)].long)
            var latlngs = [
              [eachCoord.estimate.Coords.lat, eachCoord.estimate.Coords.long],
              [newLat, newLong]
            ];
            var polyline = L.polyline(latlngs, {color: 'black', className: `${driverName}-to-${petName} hoverable`}).addTo(mymap);

            let divLat = (eachCoord.estimate.Coords.lat + newLat) / 2
            let divLong = (eachCoord.estimate.Coords.long + newLong) / 2

            var myIcon = L.divIcon({bgPos: [40, 40],className: `${driverName}-to-${petName} my-div-icon`});
            let cancelMarker = L.marker([divLat, divLong], {icon: myIcon}).addTo(mymap);
            cancelMarker.on('click', onCancelClick)
            cancelMarker.on('mouseover', onCancelHoverEnter)
            cancelMarker.on('mouseout', onCancelHoverLeave)
            // counter++
          }
        }
      })
    }
    // console.log(keepTrackOfPosition, keepTrackOfId)


    //success
    //handles what happens when markers/connections are hovered for cancel 
    function onCancelHoverEnter(e) {
      // console.log("This is being hovered: ", e.target.options.icon.options.className)
      let classTarget = e.target.options.icon.options.className.slice(0, e.target.options.icon.options.className.indexOf(" "))
      document.querySelector(`.${classTarget}.hoverable`).classList.add('highlight-me-on-map')
    }

    //success
    //handles what happens when markers/connections are hovered for cancel 
    function onCancelHoverLeave(e) {
      // console.log("This was just being hovered: ", e)
      let classTarget = e.target.options.icon.options.className.slice(0, e.target.options.icon.options.className.indexOf(" "))
      document.querySelector(`.${classTarget}.hoverable`).classList.remove('highlight-me-on-map')
    }


    //success
    //handles what happens when a route is cancelled
    function onCancelClick(e) {

      console.log("Cancel requested for: ", e)
      //dynamically find driver and pet names
      keepTrackOfPosition.forEach(eachPetName => {
        console.log(eachPetName)
        e.target._icon.classList.forEach(eachClassItem => {
          if(eachClassItem.includes(eachPetName)) {
            console.log("WAS INCLUDED IN CLASSLIST: ", eachPetName, eachClassItem)
            updateJobs(null, eachPetName, "Assigned to", "job")
          }

        })
      })

    }


    //success
    //forEach coordData in [data] make markers for Drivers
    function createDriverMarkers(driverCoords) {
      console.log(driverCoords)
      driverCoords.forEach(eachDriver => {
        console.log("EACH AND EVERY DRIVER: ", eachDriver)
        let accountBg
        i.accounts.forEach(eachAcc => {
          if(eachAcc._id == Object.keys(eachDriver)[0]) {
            accountBg = eachAcc.background
          }
        })
        let newLat = parseFloat(eachDriver.lat)
        let newLong = parseFloat(eachDriver.long)
        let myIcon = L.icon({
          // iconUrl: 'assets/vansvg.svg',
          iconUrl: accountBg,
          iconSize: [30, 30],
          className: `driver-icon`
        })
        // let opacityVal = amIWorking()
        let opacityVal = 1
        let driverName = capitalizeFirstLetter(matchTheName[matchTheId.indexOf(Object.keys(eachDriver)[0])], true)
        let marker1 = L.marker([newLat, newLong], {icon: myIcon, title: `${driverName} / driver`, opacity: opacityVal}).addTo(mymap);
        // marker1.bindTooltip(`${driverName} / driver`);
        marker1.on('click', onMarkerClick)
      })
    }

    //success
    //creates connections when driver and pickup markers are clicked in sequence
    let pathStart = undefined
    let pathEnd = undefined
    function onMarkerClick(e) {
      let coords = e.latlng
      console.log("clicked", coords, e)
      let dn = e.target.options.title
      let driverName = dn.includes('driver') ? dn.slice(0, dn.indexOf('driver')-3).toLowerCase() : dn.slice(0, dn.indexOf('pet')-3)

      console.log(matchTheName, driverName, keepTrackOfPosition)
      if(matchTheName.includes(driverName) || (pathStart != undefined && keepTrackOfPosition.includes(driverName))) {
        console.log(driverName, "is included")
        if(pathStart != undefined) {
          pathEnd = {"name": driverName, "lat": coords.lat, "long": coords.lng}
          console.log(coords.distanceTo([pathStart.lat, pathStart.long])/1609, " Miles", `${pathStart.name}-to-${driverName}`)

          var latlngs = [
            [coords.lat, coords.lng],
            [pathStart.lat, pathStart.long]
          ];
          
          var polyline = L.polyline(latlngs, {color: 'red', className: `${pathStart.name}-to-${driverName} hoverable`, noClip: true}).addTo(mymap);
          polyline.bindTooltip(`${(coords.distanceTo([pathStart.lat, pathStart.long])/1609).toFixed(1)} Miles`, {'permanent': true});

          updateJobs(pathStart.name, pathEnd.name, "Assigned to", "job")
        }
        else {
          pathStart = {"name": driverName, "lat": coords.lat, "long": coords.lng}
          console.log(matchTheName.indexOf(driverName), matchTheId[matchTheName.indexOf(driverName)])
        }
      }
      else {
        console.log(driverName, "is NOT included")
      }
    }


    //success
    //updates server to know of new assignment
    function updateJobs(p1, p2, field, type) {
      console.log(p1, p2, field, type)
      let bodyContent 
      if(type == "job") {
        let driverData = p1 == null ? null : matchTheId[matchTheName.indexOf(p1)]
        bodyContent = {
          field: field,
          id: keepTrackOfId[keepTrackOfPosition.indexOf(p2)],
          value: driverData,
          by: localStorage.user_id
        }
      }
      else if(type == "stage") {
        //field: "stage1"
        //id: 
      }
      fetch(`${baseUrl}/api/estimates`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyContent)
      })
      .then(res=>{
        if (res.ok) {
          res = res.json()
          console.log(res)
        }
        else {
          throw new Error(res.statusText);
        }
        return res
      })
      .catch(err=>{
      	console.error(err);
      });
    }

    var popup = L.popup();

    //success
    function onMapClick(e) {
      pathStart = undefined
      pathEnd = undefined
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);
  }
  
  function errorCallback(pos) {
    console.log(pos)
  }


  console.log(i)
  let sched = i.scheduleInfo
  // console.log("EMP HOURS OBJ: ", empHoursObj)
  let n1 = JSON.parse(localStorage.namemap)
  let n2 = JSON.parse(localStorage.idmap)
  sched.forEach(eachEmpHours => {
    let tempNameMaker = findNameFromId(n1, n2, eachEmpHours.userId)
    empHoursObj[tempNameMaker] = eachEmpHours.details
  })
  // let driverFinder = 0
  // i.userTypes.forEach((eachType, typeNum) => {
  //   if(eachType._id === "driver") {
  //     driverFinder = typeNum
  //   }
  // })

  let accountShortcut = {}
  i.accounts.forEach(eachAccDets => {
    accountShortcut[eachAccDets._id] = {
      'bg': eachAccDets.background,
      'assigns': [],
      'confirms': []
    }
    // accountShortcut[eachAccDets._id]['bg'] = eachAccDets.background
    if(eachAccDets.assignments != undefined) {
      accountShortcut[eachAccDets._id].assigns = eachAccDets.assignments
    }

    if(eachAccDets.confirms != undefined) {
      accountShortcut[eachAccDets._id].confirms = eachAccDets.confirms
    }
  })
  console.log(accountShortcut)

  console.log(driverFinder)
  i.userTypes[driverFinder].name.forEach(async (eachName, nameSpot) => {
    console.log(eachName, nameSpot, empHoursObj)
    let rightName = capitalizeFirstLetter(eachName, true)
    if(empHoursObj[rightName]) {
      let driverToAppend = await makeEachDriver(eachName, i.userTypes[driverFinder].id[nameSpot], accountShortcut[i.userTypes[driverFinder].id[nameSpot]].bg, accountShortcut[i.userTypes[driverFinder].id[nameSpot]].assigns, accountShortcut[i.userTypes[driverFinder].id[nameSpot]].confirms)
      if(driverToAppend.todaysHours == "Off") {
        document.querySelector('.drivers-off').appendChild(driverToAppend.driverContainer)
      }
      else {
        document.querySelector('.drivers-working').appendChild(driverToAppend.driverContainer)
      }
    }
  })
  // console.log(empHoursObj)
}

async function makeEachDriver(name, id, bg, assigns, confirms) {
  console.log(name, id, bg, assigns, confirms)
  let driverContainer = createEls('DIV', 'each-driver', '')
  driverContainer.classList.add(name.replace(' ', '-'))
  driverContainer.addEventListener('click', showDriverDetails)
  driverContainer.addEventListener('mouseenter', showDriverOnMap)
  driverContainer.addEventListener('mouseleave', hideDriverOnMap)
  let todaysHours = "Off"
  console.log(empHoursObj, empHoursObj[capitalizeFirstLetter(name, true)])
  if(empHoursObj[capitalizeFirstLetter(name, true)] && empHoursObj[capitalizeFirstLetter(name, true)][`${monthNum-1}/${dayOfMonth}`]) {
    todaysHours = empHoursObj[capitalizeFirstLetter(name, true)][`${monthNum-1}/${dayOfMonth}`]
    driverContainer.classList.add('working')
  }
  else {
    driverContainer.classList.add('off')
  }

  let getLocation = await fetch(`${baseUrl}/api/onelocation?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log("NEW LOCATIONS CALL RES: ", res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  // .then(resolvedRes => {
  //   console.log("NEW LOCATIONS CALL RES: ", resolvedRes)
  //   return resolvedRes
  // })
  .catch(err=>{
    console.error(err);
  });

  let dc0 = createEls('DIV', 'driver-id-badge', '')
  let dc1 = createEls('IMG', ['driver-bg'], '')
  dc1.src = bg
  let dc2 = createEls('DIV', 'driver-name', name)
  let dc3 = createEls('DIV', 'driver-times', todaysHours)
  let dc4 = createEls('DIV', 'driver-location', getLocation)
  let dc5 = createEls('DIV', 'driver-calendar', '')
  let dc6 = createEls('DIV', 'driver-activity', '')
  dc6 = makeDriverTimeline(dc6, todaysHours)
  // let dc7 = createEls('DIV', 'driver-assignments', '')
  let assignContainer = await createAssigns(assigns, confirms)
  // dc7.append(assignContainer)
  dc0.append(dc1, dc2, dc3, dc4)
  driverContainer.append(dc0, dc5, dc6, assignContainer)
  // console.log({driverContainer, todaysHours})
  return {driverContainer, todaysHours}
}

function showDriverDetails(j) {
  // console.log(j)
  let driverToShow = j.target.classList[1]
  document.querySelector(`.${driverToShow}`).classList.toggle('show-details')
}

function showDriverOnMap(e) {
  // console.log(e.target) // instead of querying for all icons, first reference a list and only query if target isn't on list
  document.querySelectorAll('.leaflet-marker-icon').forEach(eachMarker => {
    let cappedName = capitalizeFirstLetter((e.target.classList[1]).replace('-', ' '), true)
    // console.log("at second part of show on map", eachMarker.title, eachMarker.title.includes('driver'), eachMarker.title.includes(cappedName), cappedName)
    if(eachMarker.title && eachMarker.title.includes('driver') && eachMarker.title.includes(cappedName)) {
      // console.log("at third part of driver on map")
      eachMarker.classList.add('show-on-map')
    }
  })
}

function hideDriverOnMap(e) {
  if(document.querySelector('.show-on-map')) {
    document.querySelector('.show-on-map').classList.remove('show-on-map')
  }
}

function makeDriverTimeline(makeMyTL, hours) {
  // console.log(hours)
  let highlightTimes = []
  let tlContainer = createEls('DIV', 'driver-activity-timeline', '')

  let tlContentTop = createEls('DIV', 'driver-activity-timeline-top', '')
  if(hours != "Off") {
    let startTime = parseInt(hours.slice(0, hours.indexOf('-')-2))
    let startType = hours.slice(hours.indexOf('-')-2, hours.indexOf('-'))
    let startTime24 = startType == "am" ? startTime : 12 + startTime
    let endTime = parseInt(hours.slice(hours.indexOf('-')+1, hours.length-2))
    let endType = hours.slice(hours.length-2, hours.length)
    let endTime24 = endType == "am" ? endTime : 12 + endTime
    let measuringUnit = document.querySelector('.routes-container').offsetWidth/24
    highlightTimes.push(startTime24, endTime24)
    let workingTime = createEls('DIV', 'working-time', '')
    let fromLeft = startType == "am" ? (startTime * measuringUnit) : (startTime + 12) * measuringUnit
    let howWide = endType == "am" ? (endTime * measuringUnit) : (endTime + 12) * measuringUnit
    workingTime.style.marginLeft = ((fromLeft-(measuringUnit*0.5))*0.99) + "px"
    workingTime.style.width = ((howWide - fromLeft)*0.98) + "px" //decimal units making larger numbers slightly skewed
    tlContentTop.appendChild(workingTime)
    // console.log({measuringUnit, fromLeft, howWide}, (((fromLeft-(measuringUnit*0.5))) + "px"), (((howWide - fromLeft)) + "px"))
  }
  tlContainer.appendChild(tlContentTop)

  let tlContentMiddle = createEls('DIV', 'driver-activity-timeline-middle', '')
  tlContainer.appendChild(tlContentMiddle)

  let tlContentBottom = createEls('DIV', 'driver-activity-timeline-bottom', '')
  for(let i=1;i<=24;i++) {
    let tickVar = i > 12 ? i-12 : i
    let newTick = createEls('DIV', 'timeline-tick', tickVar)
    if(highlightTimes.length != 0 && i >= highlightTimes[0] && i <= highlightTimes[1]) {
      newTick.classList.add('highlight-me')
    }
    tlContentBottom.appendChild(newTick)
  }
  tlContainer.appendChild(tlContentBottom)

  return tlContainer
}




















// ---------------------------------------------------------------------------------------------------------------------------------
// BILLING
// ---------------------------------------------------------------------------------------------------------------------------------

function initializeBilling () {
  console.log("Billing up and running.")
  let cewatcher = document.getElementById('createEstimate')
  cewatcher.addEventListener('click', tryLatLong)
  let rewatcher = document.getElementById('readEstimate')
  rewatcher.addEventListener('click', fetchQuickbooks)
  let gewatcher = document.getElementById('getEstimate')
  gewatcher.addEventListener('click', fetchQuickbooks)
}

async function tryLatLong(ev) {
  console.log(ev.target.id)
  fetch(`http://localhost:3000/api/routes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });
}

async function fetchQuickbooks(ev) {
  console.log(ev.target.id)
  switch(ev.target.id) {
    case("createEstimate"): {
      let bodyCon = 'select * from estimate startposition 1 maxresults 5'
      let testCase = fetcher('v3/company/{{companyid}}/query?minorversion={{minorversion}}', 'POST', bodyCon)
      testCase.then(res => {
        console.log(testCase, res)

      })
      break;
    }
    case("readEstimate"): {
      let url = 'https://rth-server.azurewebsites.net/getEstimateInfo'
      let bodyCon = 'Select * from estimate'
      let testCase = await fetcher(url, 'POST', bodyCon)
      .then(res => {
        console.log(res)
      })
      break;
    }
    case("getEstimate"): {
      let url = 'http://localhost:3000/getCompanyInfo'
      let bodyCon = 'select * from estimate startposition 1 maxresults 5'
      let testCase = fetcher(url, 'POST', bodyCon)
      testCase.then(res => {
        console.log(testCase, res)

      })
      break;
    }
  }
}

async function fetcher(url, method, data) {
  // console.log(`https://rth-server.azurewebsites.net/v3/company/${compId}/${url}/?minorversion=${minorversion}`)
  const result = await fetch(url, {
    method: 'POST',
    // body: JSON.stringify(data),
    // body: data,
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(res => {
    // if(res.status == "501") {
      // initializeAndResend(url)
    // }
    // else {
      console.log(res)
      return res
    // }
  })
	.catch(err=>{
		console.error(err);
	});
  // return result
}

async function initializeAndResend(result, cb) {
  // if(result.status == "500" || result.status == "501") {
    console.log("init and resend here! ")
    await initializeQuickbooks()
    .then(res => {
      console.log(res, (res == "connected"))
      // return res
      // fetcher(url, 'bloop', 'glop')
      // setTimeout(cb, 5000)
      // if(res == "connected") {
        return cb("howdy")
      // }
    })
  // }
  // else {
  //   return "heyo"
  // }
}





// function createForm() {
//   console.log()

// }




// ---------------------------------------------------------------------------------------------------------------------------------
// CATALOG
// ---------------------------------------------------------------------------------------------------------------------------------
function displayCatalog(b) { //1341
  console.log(b)
  let catalogItems = b
  let categories = []
  let editCatalogButton = document.getElementById('submit-catalog-edit')
  editCatalogButton.addEventListener('click', editCatalogItem)
  let removeCatalogButton = document.getElementById('submit-catalog-remove')
  removeCatalogButton.addEventListener('click', editCatalogItem)

  catalogItems.forEach(eachItem => {
    let itemCategory
    if(!categories.includes(eachItem.category)) {
      categories.push(eachItem.category)
      itemCategory = createEls('DIV', ['item-category', `${eachItem.category}-category`], '')
      let categoryTitle = createEls('H3', ['item-category-title', `${eachItem.category}-category-title`], capitalizeFirstLetter(eachItem.category))
      itemCategory.append(categoryTitle)
      document.querySelector('.catalog-container').append(itemCategory)
    }

    if(eachItem.item != "none") {
      let itemOb = createEls('DIV', ['catalog-item', `${eachItem.category}-item`], '')
      itemOb.id = eachItem._id
      let itemTitle = createEls('LABEL', 'item-title', eachItem.item)
      let itemCategory = createEls('LABEL', 'item-category', eachItem.category)
      let itemStock = createEls('LABEL', 'item-stock', eachItem.stock)
      let itemCost = createEls('LABEL', 'item-cost', eachItem.cost)
      let editItem = createEls('BUTTON', 'edit-item', 'Edit')
      editItem.value = eachItem.item
      $(editItem).on('touchstart click', function(event) {
        if (event.type == "touchstart") {
            $(this).off('click');
            updateCatalog(event)
        } else if (event.type == "click") {
            $(this).off('touchstart');
            updateCatalog(event)
        }
      });
      itemOb.append(itemTitle, itemCategory, itemStock, itemCost, editItem)

      document.querySelector(`.${eachItem.category}-category`).append(itemOb)
    }
    else {
      let itemOb = createEls('DIV', ['catalog-item', `${eachItem.category}-item`, 'add-product'], '')
      itemOb.id = eachItem._id
      let itemTitle = createEls('LABEL', 'item-title', 'Add Product')
      let itemCategory = createEls('LABEL', 'item-category', '')
      let itemStock = createEls('LABEL', 'item-stock', '')
      let itemCost = createEls('LABEL', 'item-cost', '')
      let editItem = createEls('BUTTON', 'edit-item', 'Edit')
      editItem.value = eachItem.item
      $(itemOb).on('touchstart click', function(event) {
        if (event.type == "touchstart") {
          $(this).off('click');
          updateCatalog(event)
        } else if (event.type == "click") {
          $(this).off('touchstart');
          updateCatalog(event)
        }
      });
      itemOb.append(itemTitle, itemCategory, itemStock, itemCost, editItem)
      document.querySelector(`.${eachItem.category}-category`).append(itemOb)
    }
  })
}

function updateCatalog(g) {
  console.log(g.target.parentElement)
  if(document.querySelector('.currently-selected') != null) {
    document.querySelector('.currently-selected').classList.remove('currently-selected')
    g.target.parentElement.classList.add('currently-selected')
  }
  else {
    g.target.parentElement.classList.add('currently-selected')
  }

  let updateCatalog = document.querySelector('.update-catalog')
  updateCatalog.style.top = g.target.parentElement.offsetTop + "px"
  updateCatalog.style.left = g.target.parentElement.offsetLeft + "px"
  updateCatalog.style.opacity = 1
  updateCatalog.style.pointerEvents = "auto"
  updateCatalog.querySelector('#product-title').value = ""
  updateCatalog.querySelector('#product-category').value = ""
  updateCatalog.querySelector('#product-cost').value = ""
  updateCatalog.querySelector('#product-stock').value = ""
  let shortcut = document.querySelector('.currently-selected')
  updateCatalog.querySelector('#product-title').placeholder = shortcut.querySelector('.item-title').innerText
  updateCatalog.querySelector('#product-category').placeholder = shortcut.querySelector('.item-category').innerText
  updateCatalog.querySelector('#product-cost').placeholder = shortcut.querySelector('.item-cost').innerText
  updateCatalog.querySelector('#product-stock').placeholder = shortcut.querySelector('.item-stock').innerText
}

function editCatalogItem(ev) {
  let shortcut = document.querySelector('.currently-selected')
  let classSlicer = shortcut.classList[1].substring(shortcut.classList[1].search('-item'), shortcut.classList[1])
  let newData = document.querySelector('.update-catalog')
  let updateMethod = (newData.querySelector('#product-stock').value === shortcut.querySelector('.item-stock').innerText || newData.querySelector('#product-stock').value === "") ? "edit product" : "update stock"
  updateMethod = shortcut.classList.contains("add-product") ? "create" : updateMethod
  updateMethod = ev.target.value === "remove" ? "delete" : updateMethod
  console.log(ev.target.value, updateMethod, newData.querySelector('#product-stock').value, shortcut.querySelector('.item-stock').innerText, newData.querySelector('#product-stock').value === shortcut.querySelector('.item-stock').innerText)
  ev.preventDefault()


  bodyContent = {
    intent: updateMethod,
    id: shortcut.id,
    category: newData.querySelector('#product-category').value === "" ? shortcut.querySelector('.item-category').innerText : newData.querySelector('#product-category').value, 
    item: newData.querySelector('#product-title').value === "" ? shortcut.querySelector('.item-title').innerText : newData.querySelector('#product-title').value, 
    cost: newData.querySelector('#product-cost').value === "" ? shortcut.querySelector('.item-cost').innerText : newData.querySelector('#product-cost').value,
    stock: newData.querySelector('#product-stock').value === "" ? shortcut.querySelector('.item-stock').innerText : newData.querySelector('#product-stock').value
  }
  console.log(bodyContent)
  fetch(`${baseUrl}/api/catalog`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .catch(err=>{
    console.error(err);
  });
}













// ---------------------------------------------------------------------------------------------------------------------------------
// ACCOUNTS
// ---------------------------------------------------------------------------------------------------------------------------------
function displayAccounts(ad) {
  console.log(ad)
  let editAccountButton = document.getElementById('submit-account-change')
  editAccountButton.addEventListener('click', editAccount)

  ad.forEach((eachAccount, accountNum) => {
    let accountOb = createEls('DIV', ['user-account', `${(eachAccount.username).replace(' ', '-')}-account`, `${eachAccount.type}-account`], '')
    let accountBackground = createEls('IMG', ['account-background'], '')
    accountBackground.src = eachAccount.background
    let accountTitle = createEls('H3', 'account-title', capitalizeFirstLetter(eachAccount.username, true))
    let accountDescription = createEls('P', 'account-description', capitalizeFirstLetter(eachAccount.type))
    let editAccount = createEls('BUTTON', 'edit-account', 'Edit')
    $(editAccount).on('touchstart click', function(event) {
      if (event.type == "touchstart") {
        $(this).off('click');
        updateAccount(event)
      } else if (event.type == "click") {
        $(this).off('touchstart');
        updateAccount(event)
      }
    });
    accountOb.append(accountBackground, accountTitle, accountDescription, editAccount)
    document.querySelector('.accounts-container').append(accountOb)
    if(accountNum+1 === ad.length) {
      let accountOb = createEls('DIV', ['user-account', 'add-user-account'], '')
      let accountBackground = createEls('IMG', 'account-background', '')
      // accountBackground.src = eachAccount.background
      let accountTitle = createEls('H3', 'account-title', '')
      let accountDescription = createEls('P', 'account-description', '')
      let addAccountLabel = createEls('LABEL', 'add-account-label', 'Add Account')
      let editAccount = createEls('BUTTON', ['edit-account', 'add-account'], 'Edit')
      $(editAccount).on('touchstart click', function(event) {
        if (event.type == "touchstart") {
          $(this).off('click');
          updateAccount(event)
        } else if (event.type == "click") {
          $(this).off('touchstart');
          updateAccount(event)
        }
      });
      accountOb.append(accountBackground, accountTitle, accountDescription, addAccountLabel, editAccount)
      document.querySelector('.accounts-container').append(accountOb)
    }
  })
}

function updateAccount(g) {
  console.log(g.target.parentElement)
  if(document.querySelector('.currently-selected') != null) {
    document.querySelector('.currently-selected').classList.remove('currently-selected')
    g.target.parentElement.classList.add('currently-selected')
  }
  else {
    g.target.parentElement.classList.add('currently-selected')
  }

  let addAccounts = document.querySelector('.add-accounts')
  console.log(g.target.parentElement.offsetTop, g.target.parentElement.offsetLeft)
  addAccounts.style.top = g.target.parentElement.offsetTop + "px"
  addAccounts.style.left = g.target.parentElement.offsetLeft + "px"
  addAccounts.style.opacity = 1
  addAccounts.style.pointerEvents = "auto"
  addAccounts.querySelector('#add-account-background').value = ""
  addAccounts.querySelector('#add-account-name').value = ""
  addAccounts.querySelector('#add-account-type').value = ""
  let shortcut = document.querySelector('.currently-selected')
  if(shortcut.querySelector('.account-background').classList[1] && shortcut.querySelector('.account-background').classList[1].includes('background')) {
    addAccounts.querySelector('#add-account-background').placeholder = shortcut.querySelector('.account-background').classList[1].replace('background', '')
  }
  addAccounts.querySelector('#add-account-name').placeholder = shortcut.querySelector('.account-title').innerText
  addAccounts.querySelector('#add-account-type').placeholder = shortcut.querySelector('.account-description').innerText
}

function editAccount(ev) {
  let shortcut = document.querySelector('.currently-selected')
  console.log(ev.target, shortcut)
  // let classSlicer = shortcut.classList[1].substring(shortcut.classList[1].search('-item'), shortcut.classList[1])
  // let newData = document.querySelector('.update-catalog')
  // let updateMethod = (newData.querySelector('#product-stock').value === shortcut.querySelector('.item-stock').innerText || newData.querySelector('#product-stock').value === "") ? "edit product" : "update stock"
  // updateMethod = shortcut.classList.contains("add-product") ? "create" : updateMethod
  // console.log(newData.querySelector('#product-stock').value, shortcut.querySelector('.item-stock').innerText, newData.querySelector('#product-stock').value === shortcut.querySelector('.item-stock').innerText)
  // ev.preventDefault()


  // bodyContent = {
  //   intent: updateMethod,
  //   id: shortcut.id,
  //   category: classSlicer, 
  //   item: newData.querySelector('#product-title').value === "" ? shortcut.querySelector('.item-title').innerText : newData.querySelector('#product-title').value, 
  //   cost: newData.querySelector('#product-cost').value === "" ? shortcut.querySelector('.item-cost').innerText : newData.querySelector('#product-cost').value,
  //   stock: newData.querySelector('#product-stock').value === "" ? shortcut.querySelector('.item-stock').innerText : newData.querySelector('#product-stock').value
  // }
  // console.log(bodyContent)
  // fetch(`${baseUrl}/api/catalog`, {
  //   method: 'PUT',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(bodyContent)
  // })
  // .then(res=>{
  //   if (res.ok) {
  //     res = res.json()
  //     console.log(res)
  //   }
  //   else {
  //     throw new Error(res.statusText);
  //   }
  //   return res
  // })
  // .catch(err=>{
  //   console.error(err);
  // });
}














// ---------------------------------------------------------------------------------------------------------------------------------
// FILE STARTUP
// ---------------------------------------------------------------------------------------------------------------------------------

function getInitialData(url, param, cb){
  console.log(url, param)
	fetch(`${url}${param}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
	})
	.then(res=>{
    if (res.ok) {
      res = res.json()
			console.log(res)
		}
    else {
		  throw new Error(res.statusText);
    }
    return res
	})
	.then(resJson => {
    document.querySelector('.body-content').style.opacity = 1
    document.querySelector('.section-header').style.opacity = 1
    // document.querySelector('.user-name').innerText = localStorage.username
		cb(resJson);
	})
	// .catch(err=>{
	// 	console.error(err);
	// });
}
// getInitialData()

let baseName = "https://blakealexander.dev"
let url = "https://rth-server.azurewebsites.net"
// document.querySelector('.user-name').innerText = localStorage.username
if(localStorage.username == undefined) {
  location.assign('/index.html')
}
else {
  document.querySelector('.user-name').innerText = localStorage.username
}
// initializeQuickbooks()

console.log("Here's the search: ", window.location.search, window.location.search.includes("?s="))

async function makeNameAndIdTables() {
  if(window.location.href.includes('localhost')) {
    baseUrl = "http://localhost:3000"
  }
  else {
    baseUrl = "https://rth-server.azurewebsites.net"
  }
  
  console.log(baseUrl)
  fetch(`${baseUrl}/api/nameidmap`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res=>{
    if (res.ok) {
      res = res.json()
      console.log(res)
    }
    else {
      throw new Error(res.statusText);
    }
    return res
  })
  .then(resJson => {
    console.log(resJson)
    if(resJson.length === 4) {  
      resJson.forEach(eachGroup => {
        eachGroup.id.forEach(eachId => {
          idTable.push(eachId)
        })
        eachGroup.name.forEach(eachName => {
          nameTable.push(eachName)
        })
      })
      
      console.log(idTable, nameTable)
      // store this name and id mapping in localstorage (or session) so that it can be referenced by any other page
      localStorage.idmap = JSON.stringify(idTable)
      localStorage.namemap = JSON.stringify(nameTable)
    }
  })
  // .catch(err=>{
    // 	console.error(err);
    // });
  }
  
let baseUrl = "http://localhost:3000"

if(localStorage.idmap === undefined) {
  makeNameAndIdTables()
}


if(window.location.search != "" && window.location.href.includes("petpage.html?s=")) {
  if(window.location.href.includes('localhost')) {
    baseUrl = "http://localhost:3000"
  }
  else if(window.location.href.includes('github')) {
    baseUrl = "https://blalexander.github.io/rth"
  }
  else {
    baseUrl = "https://rth-server.azurewebsites.net"
  }
  console.log("Search worked: ", window.location.search)
  let searchString = window.location.search.replace('?s=', '')
  console.log(searchString)
  let url = `${baseUrl}/api/estimate${window.location.search}`
  let param = ""
  let callback = showSpecificOrder
  getInitialData(url, param, callback)
}
else {
  if(document.querySelector('.user-profile-picture') != null) {
    document.querySelector('.user-profile-picture').src = JSON.parse(localStorage.user_background)
    console.log(JSON.parse(localStorage.user_background))
  }

  if(window.location.href.includes('github')) {
    for(let eachHref in document.querySelector('.nav-sidebar').children) {
      if(document.querySelector('.nav-sidebar').children[eachHref].attributes != undefined && document.querySelector('.nav-sidebar').children[eachHref].attributes.href != undefined) {
        console.log(document.querySelector('.nav-sidebar').children[eachHref].attributes.href.value)
        let previousHref = document.querySelector('.nav-sidebar').children[eachHref].attributes.href.value
        let newPref = '/rth'
        document.querySelector('.nav-sidebar').children[eachHref].attributes.href.value = newPref.concat(previousHref)
      }
    }
  }
  switch(window.location.href.substring(0, window.location.href.search(".html"))) {
    case("http://localhost:5500/reports"): {
      baseUrl = "http://localhost:3000"
      // let url = "https://rth-server.azurewebsites.net/getProfitLoss"
      let url = "http://localhost:3000/api/reports"
      let param = ""
      // let param = ""
      let callback = displayReportsData
      // let callback = displayEstimateDetails
      getInitialData(url, param, callback)
      break;
    }
    case("https://blalexander.github.io/rth/reports"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      // let url = "https://rth-server.azurewebsites.net/getProfitLoss"
      let url = "https://rth-server.azurewebsites.net/api/reports"
      let param = ""
      let callback = displayReportsData
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/dashboard"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/userdata/?username="
      // let url = "https://rth-server.azurewebsites.net/api/estimates"
      let param = localStorage.username
      // let param = ""
      let callback = displayDashboard
      // let callback = displayEstimateDetails
      getInitialData(url, param, callback)

      document.querySelector('.submit-text-input').addEventListener('click', submitMessage)
      break;
    }
    case("https://blalexander.github.io/rth/dashboard"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/userdata/?username="
      let param = localStorage.username
      let callback = displayDashboard
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/orders"): {
      baseUrl = "http://localhost:3000"
      // let url = "http://localhost:3000/getOrderInfo"
      // let url = "https://rth-server.azurewebsites.net/getOrderInfo"
      let url = "http://localhost:3000/api/estimates"
      let param = ""
      let callback = displayEstimateDetails
      // let callback = displayInitialData
      getInitialData(url, param, callback)
      break;
    }
    case("https://blalexander.github.io/rth/orders"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      // let url = "https://rth-server.azurewebsites.net/getOrderInfo"
      let url = "https://rth-server.azurewebsites.net/api/estimates"
      let param = ""
      let callback = displayEstimateDetails
      // let callback = displayInitialData
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/estimates"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/estimates"
      let param = ""
      let callback = displayEstimateDetails
      // let callback = displayInitialData
      getInitialData(url, param, callback)
      break;
    }
    case("https://blalexander.github.io/rth/estimates"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/estimates"
      let param = ""
      let callback = displayEstimateDetails
      // let callback = displayInitialData
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/createestimate"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/templates"
      let param = ""
      let callback = displayEstimateForm
      getInitialData(url, param, callback)
      // displayEstimateForm(formOptions)
      break;
    }
    case("https://blalexander.github.io/rth/createestimate"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/templates"
      let param = ""
      let callback = displayEstimateForm
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/routes"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/routes"
      let param = ""
      let callback = displayRoutes
      getInitialData(url, param, callback)
      // displayEstimateForm(formOptions)
      break;
    }
    case("https://blalexander.github.io/rth/routes"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/routes"
      let param = ""
      let callback = displayRoutes
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/billing"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/users"
      let param = ""
      let callback = displayRoutes
      // getInitialData(url, param, callback)
      initializeBilling()
      break;
    }
    case("https://blalexander.github.io/rth/billing"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/users"
      let param = ""
      let callback = displayRoutes
      // getInitialData(url, param, callback)
      initializeBilling()
      break;
    }
    case("http://localhost:5500/schedules"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/schedules"
      let param = ""
      let callback = displaySchedules
      getInitialData(url, param, callback)
      // displayEstimateForm(formOptions)
      break;
    }
    case("https://blalexander.github.io/rth/schedules"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/schedules"
      let param = ""
      let callback = displaySchedules
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/catalog"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/catalog"
      let param = ""
      let callback = displayCatalog
      getInitialData(url, param, callback)
      // displayEstimateForm(formOptions)
      break;
    }
    case("https://blalexander.github.io/rth/catalog"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/catalog"
      let param = ""
      let callback = displayCatalog
      getInitialData(url, param, callback)
      break;
    }
    case("http://localhost:5500/accounts"): {
      baseUrl = "http://localhost:3000"
      let url = "http://localhost:3000/api/accounts"
      let param = ""
      let callback = displayAccounts
      getInitialData(url, param, callback)
      // displayEstimateForm(formOptions)
      break;
    }
    case("https://blalexander.github.io/rth/accounts"): {
      baseUrl = "https://rth-server.azurewebsites.net"
      let url = "https://rth-server.azurewebsites.net/api/accounts"
      let param = ""
      let callback = displayAccounts
      getInitialData(url, param, callback)
      break;
    }
    default: 
    console.log("something went wrong :(")
    break;
  }
}





//OTHER THINGS TO ADD
// if localstorage doesn't have username/auth code then IMMEDIATELY redirect to login before anything else loads
// ability to Star orders

//MAIN CONCEPTS TO COMPLETE
// when invoice fulfilled or estimate cancelled after creation, both invoice and parent estimate move to Archive.
// link order and estimate (both in app and URL to quickbooks entities)
// upload catalog
// make customer-side of site
// integrate Docusign
// when pulling estimates or invoices, double check QBdata against DBdata to ensure validity.  alert user if any changes.
// give employees full names, fix any issues that arise from it
// add clock to site somewhere for certain pages?

//INVOICES
// duplicate estimate appearance
// add link to estimate
// add areas for other documents
// add any other info specific to invoice not already displayed with estimate

//ESTIMATES
// fix when taking away sort param estimate list updates (outside of just refreshing the page, which still works)
// estimate filter doesn't apply immediately
// Add Two Buttons for [Assign Driver] / [Continue Order on Quickbooks]
// indicator whether invoice has been created from estimate or not
// instead of colored boxes to show status, can use symbols instead

//ROUTES 
// display current location on driver tab
// add next scheduled work days
// when driver logs in, only give access to correct pages, show any job alerts



// function displayReportsData(r) { // Add Space function to detect capitals and insert space before
//   console.log(r) //only make initial call if data not in session storage
//   let headerText = `Profit And Loss`
//   let subheader = createEls('DIV', 'report-subheader', `${(r.Header.StartPeriod).replaceAll('-', '/')} - ${(r.Header.EndPeriod).replaceAll('-', '/')}`)
//   let reportHeader = createEls('DIV', 'report-header', headerText)
//   document.querySelector('.reports-container-header').append(reportHeader, subheader)


//   r.Columns.Column.forEach(eachCol => {
//     let makeCol = createEls('DIV', 'report-column', eachCol.ColTitle)
//     document.querySelector('.reports-container-columns').append(makeCol)
//   })



//   r.Rows.Row.forEach(eachRow => {
//     let makeRow = createEls('DIV', ['report-row', eachRow.group], '')
//     let rowGroupHeader = createEls('DIV', ['row-group-header', eachRow.group], '')
//     let rowGroupTitle = createEls('DIV', ['row-group-title', eachRow.group], eachRow.group)
//     let rowGroupSummary = createEls('DIV', ['row-group-summary', eachRow.group], eachRow.Summary.ColData[1].value)
//     rowGroupHeader.append(rowGroupTitle, rowGroupSummary)
//     // let summary2 = createEls('DIV', ['summary-line', eachRow.group], eachRow.Summary.ColData[1].value)
//     makeRow.append(rowGroupHeader)

//     if(eachRow.Rows && eachRow.Rows.Row) {
//       console.log("Needs to be unwrapped: ", eachRow.Rows.Row)
//       eachRow.Rows.Row.forEach(nestedRow => {
//         if(nestedRow.type == "Data") {
//           console.log("Data to present: ", nestedRow.ColData[0].value, nestedRow)
//           let rowLine = createEls('DIV', ['row-line', 'row-l1', nestedRow.ColData[0].value.replaceAll(' ', '-')], '')
//           nestedRow.ColData.forEach((nestedRowData, rc) => {
//             if(rc == 0) {
//               let rowHeader = createEls('DIV', 'row-header', nestedRowData.value)
//               rowLine.append(rowHeader)
//             }
//             else if(rc == 1) {
//               let rowData = createEls('DIV', 'row-data', nestedRowData.value)
//               rowLine.append(rowData)
//             }
//           }) 
//           makeRow.append(rowLine)
//         }
//         else if(nestedRow.type == "Section") {
//           console.log("Section for: ", nestedRow, nestedRow.Header.ColData[0].value)
//           let nestedRowContainer = createEls('DIV', ['row-container', nestedRow.Header.ColData[0].value.replaceAll(' ', '-')], '')
//           let nestedRowHeader = createEls('DIV', 'row-subrow-header', '')
//           let nestedRowTitle = createEls('DIV', 'row-subrow-title', `${nestedRow.Header.ColData[0].value}`)
//           let nestedRowTotal = createEls('DIV', 'row-subrow-total', `${nestedRow.Summary.ColData[1].value}`)
//           // if(nestedRow.Header.ColData[1].value != 0)
//           nestedRowHeader.append(nestedRowTitle, nestedRowTotal)
//           nestedRowContainer.append(nestedRowHeader)
//           nestedRow.Rows.Row.forEach(eachDeepNest => {
//             if(eachDeepNest.type == "Data") {
//               console.log("EACH DEEP NEST (data): ", eachDeepNest, nestedRow.Header.ColData[0].value, eachDeepNest.ColData[0].value)
//               let deeplyNestedRowContainer = createEls('DIV', ['row-subrow', nestedRow.Header.ColData[0].value.replaceAll(' ', '-')], '')
//               // console.log("MEGA WEIRD: ", nestedRow, eachDeepNest)
//               let rowLine = createEls('DIV', ['row-line', 'row-l2', nestedRow.Header.ColData[0].value.replaceAll(' ', '-')], '')
//               let rowHeader = createEls('DIV', 'row-header', eachDeepNest.ColData[0].value)
//               let rowData = createEls('DIV', 'row-data', eachDeepNest.ColData[1].value)
//               rowLine.append(rowHeader, rowData)
//               // deeplyNestedRowContainer.append(rowLine)
//               // nestedRowContainer.append(deeplyNestedRowContainer)
//               nestedRowContainer.append(rowLine)

//             }
//             else if(eachDeepNest.type == "Section") {
//               console.log("EACH DEEP NEST (section): ", eachDeepNest, nestedRow.Header.ColData[0].value, eachDeepNest.Header.ColData[0].value)
//               let deeplyNestedRowContainer = createEls('DIV', ['row-subrow', eachDeepNest.Header.ColData[0].value.replaceAll(' ', '-')], '')
//               let deeplyNestedRowContainerHeader = createEls('DIV', ['row-subrow-header', eachDeepNest.Header.ColData[0].value.replaceAll(' ', '-')], '')
//               let deeplyNestedRowContainerTitle = createEls('DIV', ['row-subrow-title', eachDeepNest.Header.ColData[0].value.replaceAll(' ', '-')], eachDeepNest.Header.ColData[0].value.replaceAll('-', ' '))
//               let deeplyNestedRowContainerTotal = createEls('DIV', ['row-subrow-total', eachDeepNest.Header.ColData[0].value.replaceAll(' ', '-')], eachDeepNest.Summary.ColData[1].value)
//               deeplyNestedRowContainerHeader.append(deeplyNestedRowContainerTitle, deeplyNestedRowContainerTotal)
//               deeplyNestedRowContainer.append(deeplyNestedRowContainerHeader)

//               if(eachDeepNest.type == "Section") {     
//                 console.log("Most deepest nested rows: ", eachDeepNest)       
//                 eachDeepNest.Rows.Row.forEach(eachVeryDeepNest => {
//                   console.log(eachVeryDeepNest, nestedRow.Header.ColData[0].value, eachDeepNest.Header.ColData[0].value, eachVeryDeepNest.ColData[0].value)
//                   let rowLine = createEls('DIV', ['row-line', 'row-l3', eachDeepNest.Header.ColData[0].value.replaceAll(' ', '-')], '')
//                   let rowHeader = createEls('DIV', 'row-header', eachVeryDeepNest.ColData[0].value)
//                   let rowData = createEls('DIV', 'row-data', eachVeryDeepNest.ColData[1].value)
//                   rowLine.append(rowHeader, rowData)
//                   deeplyNestedRowContainer.append(rowLine)
//                 })
//               }
//               else {
//                 console.log("Went to data instead of most deepest: ", eachDeepNest)
//               }
//               nestedRowContainer.append(deeplyNestedRowContainer)
//             }
//           })

//           makeRow.append(nestedRowContainer)
//         }
//       })
//     }
//     else {
//       console.log("Apparently Unwrapped: ", eachRow)
//     }
//     document.querySelector('.reports-container-rows').append(makeRow)
//   })
// }