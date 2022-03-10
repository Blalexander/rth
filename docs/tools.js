function createMyCart(ev) {
  // console.log("Cart contents: ", ev)
  let cartContainer = createEls('DIV', 'cart-product-container', '')
  let cartContainerL1 = createEls('P', ['cart-container-label', 'cart-container-label1'], 'Cart')
  let cartContainerL2 = createEls('P', ['cart-container-label', 'cart-container-label2'], 'Total')
  cartContainer.append(cartContainerL1, cartContainerL2)
  let rollingAmount = 0.00
  let cartNum = 0
  for(let cartProduct in ev) {
    if(cartProduct === "total") {
      break;
    }
    cartNum++
    let newCartItem = createEls('DIV', 'cart-product', '')
    let newCartItemNumber = createEls('H5', ['cart-product-number'], cartNum)
    let newCartItemImg = createEls('DIV', ['cart-product-img'], '')
    let newCartItemName = createEls('H5', ['cart-product-name'], ev[cartProduct].name)
    let ncicContent = typeof ev[cartProduct].cost === "string" ? ev[cartProduct].cost : `$${ev[cartProduct].cost}`
    let newCartItemCost = createEls('P', ['cart-product-cost'], ncicContent)
    let newCartItemFormula = createEls('P', ['cart-product-formula'], `+${ev[cartProduct].tax} tax`)
    let ncitContent = typeof ev[cartProduct].total === "string" ? ev[cartProduct].total : `$${ev[cartProduct].total}`
    let newCartItemTotal = createEls('P', ['cart-product-total'], ncitContent)
    rollingAmount += typeof ev[cartProduct].total === "string" ? parseFloat(ev[cartProduct].total.replace('$', '')) : parseFloat(ev[cartProduct].total)
    newCartItem.append(newCartItemNumber, newCartItemImg, newCartItemName, newCartItemCost, newCartItemFormula, newCartItemTotal)
    cartContainer.append(newCartItem)
  }
  let cartContainerTotal = createEls('DIV', 'cart-product-container-total', `$${rollingAmount.toFixed(2)}`)
  cartContainer.append(cartContainerTotal)
  return cartContainer
}

function createEls(type, name, text) {
  // console.log({type, name, text})
  let newEl = document.createElement(type)
  if(Array.isArray(name)) {
    name.forEach(eachName => {
      newEl.classList.add(eachName)
    })
  }
  else {
    newEl.classList.add(name)
  }
  newEl.innerHTML = text
  return newEl
}

function capitalizeFirstLetter(string, second) {
  // console.log(string, second)
  if(string != undefined) {
    if(second == true) {
      if(string.indexOf(' ') > 0) {    
        let n = string.indexOf(' ')
        return string.charAt(0).toUpperCase() + string.slice(1, n) + ' ' + string.charAt(n+1).toUpperCase() + string.slice(n+2);
      }
      else {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
    }
    else {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
}

function findNameFromId(names, ids, id) {
  // console.log(names, ids, id)
  return capitalizeFirstLetter(names[ids.indexOf(id)], true)
}

function findIdFromName(names, ids, name) {
  console.log(names, ids, name)
  name = name.replace('-', ' ')
  let ret1 = ids[names.indexOf(name)] != undefined ? ids[names.indexOf(name)] : ids[names.indexOf(name.toLowerCase())]
  // let ret2 = ret1 != undefined ? ret1 : ids[names.indexOf(normalizeName(name))]
  // console.log(names, ids, name, ret1, ret2)
  console.log(ret1)
  return ret1
}

function normalizeName(n) {
  n.replace('-', ' ')
  n.toLowerCase()
  console.log(n, typeof n)
  return n
}

function findName(id) {
  fetch(`http://localhost:3000/api/username?id=${id}`, {
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
  .catch(err=>{
    console.error(err);
  });
}

function getCartTotal(ev) {
  // console.log(ev)
  if(ev.carts != undefined) {
    let cartTotal = ev.carts.filter(getTotal => {
      if(getTotal.k === "total") {
        return getTotal.v[0]
      }
    })
    // if(cartTotal[0].v === undefined) {
      // console.log(ev)
    // }
    let eachCartTotal = parseFloat(cartTotal[0].v)
    return eachCartTotal
  }
}

function getCartContents(ev) {
  if(ev.carts != undefined) {
    let cartContents = ev.carts.filter(getContents => {
      if(getContents.k != "total" && getContents.v.cost != undefined) {
        return getContents
      }
    })
    // console.log(cartContents)
    // let eachCartTotal = parseFloat(cartTotal[0].v)
    return cartContents
  }
}

function getCartContentsCost(ev) {
  if(ev.carts != undefined) {
    let contentTotal = 0
    let cartContents = ev.carts.filter(getContents => {
      if(getContents.k != "total" && getContents.v.cost != undefined) {
        contentTotal += getContents.v.cost
        return getContents.v.cost
      }
    })
    // console.log(cartContents)
    let eachCartTotal = parseFloat(contentTotal)
    return eachCartTotal
  }
}

function getCartContentsMods(ev) {
  if(ev.carts != undefined) {
    let contentTotal = 0
    let tax = 0
    let discount = 0
    let taxTotal = 0
    let discountTotal = 0
    let cartContents = ev.carts.filter(getContents => {
      if(getContents.k != "total" && getContents.v.cost != undefined) {
        // contentTotal += getContents.v.cost
        discount = getContents.v.discount != null ? (getContents.v.discount * .01) : 0
        tax = getContents.v.tax != null ? (getContents.v.tax * .01) : 0
        let costAfterTax = (getContents.v.cost + (getContents.v.cost * tax))
        let costAfterDisc = (getContents.v.cost - (getContents.v.cost * discount))
        taxTotal += (getContents.v.cost * tax)
        discountTotal += (getContents.v.cost * discount)
        return {taxTotal, discountTotal}
      }
    })
    // console.log(taxTotal, discountTotal)
    if(isNaN(taxTotal) || isNaN(discountTotal)) {
      console.log("NAN'D: ", ev)
    }
    return {tax: taxTotal, discounts: discountTotal}
  }
}

function getCartPayments(ev) {
  if(ev.payments != undefined && ev.payments != null) {
    let paymentTotal = 0
    let allPayments = ev.payments.filter(getEachPayment => {
      paymentTotal += getEachPayment.v
    })
    // console.log(cartContents)
    // let eachCartTotal = parseFloat(contentTotal)
    return paymentTotal
  }
  else {
    return 0
  }
}

function getCartTaxes(ev) {
  // console.log(ev)
}

// let incomeUrns = 0
// let incomeCremation = 0
let incomeBath = 0
let incomeHaircut = 0
let incomeDental = 0
let incomePawprints = 0
// let incomeNoseprint = 0
let incomeJewelry = 0
// let incomeDelivery = 0
let incomeAll = 0
let cartCategories = {}

function totalDueAllCategories(ev) {
  ev.forEach(eachContent => {
    // console.log(eachContent)
    // if(eachContent.v.type === "urns") {
    //   console.log(eachContent)
    //   returnAmt += eachContent.v.cost
    // }
    switch(eachContent.v.type) {
      case("bath"): {
        incomeBath += eachContent.v.cost
        incomeAll += eachContent.v.cost
        break;
      }
      case("haircut"): {
        incomeHaircut += eachContent.v.cost
        incomeAll += eachContent.v.cost
        break;
      }
      case("dental"): {
        incomeDental += eachContent.v.cost
        incomeAll += eachContent.v.cost
        break;
      }
      // case("urns"): {
      //   incomeUrns += eachContent.v.cost
      //   incomeAll += eachContent.v.cost
      //   break;
      // }
      // case("cremation"): {
      //   incomeCremation += eachContent.v.cost
      //   incomeAll += eachContent.v.cost
      //   break;
      // }
      case("pawprints"): {
        incomePawprints += eachContent.v.cost
        incomeAll += eachContent.v.cost
        break;
      }
      // case("noseprint"): {
      //   incomeNoseprint += eachContent.v.cost
      //   incomeAll += eachContent.v.cost
      //   break;
      // }
      case("jewelry"): {
        incomeJewelry += eachContent.v.cost
        incomeAll += eachContent.v.cost
        break;
      }
      // case("delivery"): {
      //   incomeDelivery += eachContent.v.cost
      //   incomeAll += eachContent.v.cost
      //   break;
      // }
      default: {
        console.log("Something went wrong here: ", eachContent, ev)
      }
    }
  })
  return {bath: incomeBath, haircut: incomeHaircut, dental: incomeDental, pawprints: incomePawprints, jewelry: incomeJewelry, all: incomeAll}
}
 

let taxBath = 0
let taxHaircut = 0
let taxDental = 0
let taxPawprints = 0
let taxJewelry = 0
let taxAll = 0
let incomeBath2 = 0
let incomeHaircut2 = 0
let incomeDental2 = 0
let incomePawprints2 = 0
let incomeJewelry2 = 0
let incomeAll2 = 0
let cartCategories2 = {}

function totalPaidAllCategories(contents, payments, total, tax) {
  // console.log(contents, payments, total, tax)
  let preTaxPayment = (payments - tax) >= 0 ? (payments - tax) : 0
  let preTaxTotal = total - tax
  // console.log(preTaxPayment, preTaxTotal)
  contents.forEach(eachContent => {
    let paymentAmt = (eachContent.v.cost / preTaxTotal * preTaxPayment)
    // console.log(paymentAmt)
    let taxPaymentAmt = (eachContent.v.tax * 0.01) * paymentAmt
    // console.log("TAXES: ", taxPaymentAmt)
    switch(eachContent.v.type) {
      case("bath"): {
        incomeBath2 += paymentAmt
        incomeAll2 += paymentAmt
        taxBath += taxPaymentAmt
        taxAll += taxPaymentAmt
        break;
      }
      case("haircut"): {
        incomeHaircut2 += paymentAmt
        incomeAll2 += paymentAmt
        taxHaircut += taxPaymentAmt
        taxAll += taxPaymentAmt
        break;
      }
      case("dental"): {
        incomeDental2 += paymentAmt
        incomeAll2 += paymentAmt
        taxDental += taxPaymentAmt
        taxAll += taxPaymentAmt
        break;
      }
      case("pawprints"): {
        incomePawprints2 += paymentAmt
        incomeAll2 += paymentAmt
        taxPawprints += taxPaymentAmt
        taxAll += taxPaymentAmt
        break;
      }
      case("jewelry"): {
        incomeJewelry2 += paymentAmt
        incomeAll2 += paymentAmt
        taxJewelry += taxPaymentAmt
        taxAll += taxPaymentAmt
        break;
      }
      default: {
        console.log("Something went wrong here: ", eachContent, contents, payments, total, tax)
        break;
      }
    }
  })
  return {bath: incomeBath2, haircut: incomeHaircut2, dental: incomeDental2, pawprints: incomePawprints2, jewelry: incomeJewelry2, all: incomeAll2, bathTaxes: taxBath, haircutTaxes: taxHaircut, pawprintsTaxes: taxPawprints, dentalTaxes: taxDental, jewelryTaxes: taxJewelry, allTaxes: taxAll}
}


async function getPetName(petId) {
  console.log(petId)
  let theName = await fetch(`${baseUrl}/api/petinfo?p=${petId}`, {
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
  }).then(finalRes => {
    return finalRes[0].estimate["Pet Name"]
  })

  console.log(theName)
  return theName
}


async function createAssigns(assignArray, confirmArray) {
  console.log(assignArray, confirmArray)
  let n1 = JSON.parse(localStorage.namemap)
  let n2 = JSON.parse(localStorage.idmap)
  let aContainer = createEls('DIV', 'driver-assignments-container', '')
  assignArray.forEach(async eachAssign => {
    let driverAssignments = createEls('DIV', 'driver-assignment', '')
    let targName = await getPetName(eachAssign.value)
    let driverAssignTarget = createEls('P', 'assignment-target', targName)
    let driverAssignCreator = createEls('P', 'assignment-creator', ` assigned by ${findNameFromId(n1, n2, eachAssign.by)}`)
    let driverAssignTime = createEls('P', 'assignment-time', eachAssign.time)
    let driverAssignConfirmed = createEls('DIV', 'assignment-confirmed', '')
    let confirmVal = confirmArray.filter(eachConf => {
      return eachConf.value === eachAssign.value
    })
    let checkConfVal = confirmVal[0] != undefined ? `${findNameFromId(n1, n2, confirmVal[0].by)} confirmed ` : 'pending confirm'
    let checkConfTime = confirmVal[0] != undefined ? confirmVal[0].time : null
    console.log(confirmVal, checkConfVal, checkConfTime)
    let driverAssignConfirmedVal = createEls('P', 'assignment-confirm-val', checkConfVal)
    let driverAssignConfirmedTime = createEls('P', 'assignment-confirm-time', checkConfTime)
    driverAssignConfirmed.append(driverAssignConfirmedVal, driverAssignConfirmedTime)
    driverAssignments.append(driverAssignTarget, driverAssignCreator, driverAssignTime, driverAssignConfirmed)
    aContainer.append(driverAssignments)
  })
  return aContainer
}

function trimFullName(fullName) {
  return capitalizeFirstLetter(fullName.substring(0, fullName.search(" ")+2), true).concat('.')
}