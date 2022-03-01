let formOptions = {
'Pet Information': {
  'Pet Name': {'value': '', 'type': 'short-text', 'desc': 'Pet Name'},
  'Date of Passing': {'value': '', 'type': 'short-text', 'desc': 'Date of Passing'},
  'Type of Pet': {'value': '', 'type': 'short-text', 'desc': 'Type of Pet'},
  'Sex': {'value': '', 'type': 'short-text', 'desc': 'Sex'}, 
  'Color': {'value': '', 'type': 'short-text', 'desc': 'Color'},
  'Breed': {'value': '', 'type': 'short-text', 'desc': 'Breed'},
  'Age (years)': {'value': '', 'type': 'short-text', 'desc': 'Age (years)'},
  'Weight (pounds)': {'value': '', 'type': 'short-text', 'desc': 'Weight (pounds)'},
},
'Owner Information': {
  'Owner Name': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
  'Phone': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
  'Email': {'value': '', 'type': 'short-text', 'desc': 'Email'},
  'Address': {'value': '', 'type': 'short-text', 'desc': 'Address'},
  'City': {'value': '', 'type': 'short-text', 'desc': 'City'},
  'State': {'value': '', 'type': 'short-text', 'desc': 'State'},
  'Zip Code': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
  'Pick Up same Name/Address as Pet Owner?': {'value': '', 'type': 'yes-no', 'desc': 'Pick Up same Name/Address as Pet Owner?'},
  'Owner Name PU': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
  'Phone PU': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
  'Email PU': {'value': '', 'type': 'short-text', 'desc': 'Email'},
  'Address PU': {'value': '', 'type': 'short-text', 'desc': 'Address'},
  'City PU': {'value': '', 'type': 'short-text', 'desc': 'City'},
  'State PU': {'value': '', 'type': 'short-text', 'desc': 'State'},
  'Zip Code PU': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
  'Return Cremains to Pet Owner (Client) Name/Address': {'value': '', 'type': 'yes-no', 'desc': 'Return Cremains to Pet Owner (Client) Name/Address'},
  'Owner Name DO': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
  'Phone DO': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
  'Email DO': {'value': '', 'type': 'short-text', 'desc': 'Email'},
  'Address DO': {'value': '', 'type': 'short-text', 'desc': 'Address'},
  'City DO': {'value': '', 'type': 'short-text', 'desc': 'City'},
  'State DO': {'value': '', 'type': 'short-text', 'desc': 'State'},
  'Zip Code DO': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
},
'Order Information': {
  'Assigned to:': {'value': '', 'type': 'short-text', 'desc': 'Assigned to:'},
  'Pet Pickup Date': {'value': '', 'type': 'date', 'desc': 'Pet Pickup Date'},
  'Pickup Time': {'value': '', 'type': 'short-text', 'desc': 'Pickup Time'},
  'Engraving Order Date': {'value': '', 'type': 'date', 'desc': 'Engraving Order Date'},
  'Engraving Name Plate Info': {'value': '', 'type': 'long-text', 'desc': 'Engraving Name Plate Info'},
  'Special Instructions': {'value': '', 'type': 'long-text', 'desc': 'Special Instructions'},
  'Cremation Service': {'value': '', 'type': 'dropdown', 'desc': 'Cremation Service'},
  'Paw Print Options': {'value': '', 'type': 'dropdown', 'desc': 'Paw Print Options'},
  'Urn': {'value': '', 'type': 'dropdown', 'desc': 'Urn'},
  'Jewelry/Keychain': {'value': '', 'type': 'dropdown', 'desc': 'Jewelry/Keychain'},
  'Nose Print': {'value': '', 'type': 'dropdown', 'desc': 'Nose Print'},
  'Photo': {'value': '', 'type': 'yes-no', 'desc': 'Photo'},
  'Cut Hair': {'value': '', 'type': 'yes-no', 'desc': 'Cut Hair'},
  'Special Order Statues': {'value': '', 'type': 'dropdown', 'desc': 'Special Order Statues'},
  'Special Order Link': {'value': '', 'type': 'short-text', 'desc': 'Special Order Link'},
  'Delivery Option': {'value': '', 'type': 'dropdown', 'desc': 'Delivery Option'},
  'Delivery Fee': {'value': '', 'type': 'short-text', 'desc': 'Delivery Fee'},
  'Coordination Fee': {'value': '', 'type': 'short-text', 'desc': 'Coordination Fee'},
  'Discount': {'value': '', 'type': 'short-text', 'desc': 'Discount'},
},
// }

// let itemOptions = {
urns: {
  "none": "$0",
  "Custom see notes": "$0",
  "CSWU - 300  Med Cedar": "$0",
  "CSWU - 400  Large Cedar": "$0",
  "CSWU - 500  XL Cedar": "$0",
  "WSWU - 200 Small Walnut": "$0",
  "WSWU - 300 Med Walnut": "$0",
  "WSWU - 400 Large Walnut": "$0",
  "WSWU - 500 XL Walnut": "$0",
  "CLWU - 300 Med Cedar Lock & Key": "$0",
  "CLWU - 400 Large Cedar Lock & Key": "$0",
  "CLWU - 500 XL Cedar Lock & Key": "$0",
},
pawprints: {
  "none": "$0",
  "C051 Wallet Paw": "$0",
  "C052 Garden Paw": "$0",
  "57SBPP (5x7 shadow box)": "$0",
  "810SBPP (8x10 shadow box)": "$0",
  "1114SBPP (11x14 Shadow box)": "$0",
  "None": "$0",
  "Clay Pocket paw": "$0",
  "8x10 Collage Shadow box": "$0",
  "Paw print in Ink/Paper": "$0",
},
noseprint: {
  "none": "$0",
  "Nose print on Paper": "$0",
  "Nose print on Clay": "$0"
},
statues: {
  "none": "none"
},
jewelry: {
  "none": "$0",
  "Cylinder $95": "$0",
  "Crystal Heart $150": "$0",
  "Infinity Paw $60": "$0",
  "Color Paw $60": "$0",
  "Photo Pendant $125": "$0",
  "Heart Pendant $125": "$0",
  "Paw Pendant $125": "$0",
  "Cross Pendant $95": "$0",
  "Circle with Paws Pendant $95": "$0",
  "Keychain": "$0",
  "Other": "$0",
  "Heart with Paws Pendant $95": "$0",
},
cremation: {
  "Private Cremation": "$0",
  "No Cremains Back": "$0",
  "Private Viewing": "$0",
  "Rush Cremation": "$0",
  "Remotely Viewing": "$0",
  "Recording Cremation": "$0",
},
delivery: {
  "Priority Mail NSR": "$0",
  "USPS Signature": "$0",
  "Pick up": "$0",
  "Hand Delivery": "$0",
  "Do not Return": "$0",
}
}


// {
//   "user_preferences": "[\"Pet Name\",\"Type of Pet\",\"Sex\"]",
//   "coordinates": "[\"1253 Bishops rd, Los Angeles CA\",\"3455 City Terrace Dr, Los Angeles  ca\",\"8000 Park Ln, Bell Gardens ca\",\"30970 Russel Ranch Rd, Westlake Village ca\",\"1400 Glenn Curtiss St, Carson ca\",\"7075 Campus Rd, Moorpark ca\",\"363 Carmen Dr, Camarillo ca\",\"2975 Sycamore Dr, Simi Valley ca\"]",
//   "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoic2FyYWgiLCJpZCI6IjYwZGNjMGVhYTU4ZDEwNDc0OGU5ZGExZiIsInR5cGUiOiJzYWxlcyIsInByZWZlcmVuY2VzIjpbIlBldCBOYW1lIiwiVHlwZSBvZiBQZXQiLCJTZXgiXX0sImlhdCI6MTYzNDI0NzEwNSwiZXhwIjoxNjM0ODUxOTA1LCJzdWIiOiJzYXJhaCJ9.fThKbJK7wGG71b8_mdwIVfdWi61yhCK2K2_6RaEv3sk",
//   "user_id": "60dcc0eaa58d104748e9da1f",
//   "username": "sarah"
// }

// 'Owner Information': {
//   'Owner Name': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
//   'Phone': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
//   'Email': {'value': '', 'type': 'short-text', 'desc': 'Email'},
//   'Address': {'value': '', 'type': 'short-text', 'desc': 'Address'},
//   'City': {'value': '', 'type': 'short-text', 'desc': 'City'},
//   'State': {'value': '', 'type': 'short-text', 'desc': 'State'},
//   'Zip Code': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
//   'Pick Up same Name/Address as Pet Owner?': {'value': '', 'type': 'yes-no', 'desc': 'Pick Up same Name/Address as Pet Owner?'},
//   'Return Cremains to Pet Owner (Client) Name/Address': {'value': '', 'type': 'yes-no', 'desc': 'Return Cremains to Pet Owner (Client) Name/Address'},
//   'Owner Name PU': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
//   'Owner Name DO': {'value': '', 'type': 'short-text', 'desc': 'Owner Name'},
//   'Email PU': {'value': '', 'type': 'short-text', 'desc': 'Email'},
//   'Email DO': {'value': '', 'type': 'short-text', 'desc': 'Email'},
//   'Phone PU': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
//   'Phone DO': {'value': '', 'type': 'short-text', 'desc': 'Phone'},
//   'Address PU': {'value': '', 'type': 'short-text', 'desc': 'Address'},
//   'Address DO': {'value': '', 'type': 'short-text', 'desc': 'Address'},
//   'City PU': {'value': '', 'type': 'short-text', 'desc': 'City'},
//   'City DO': {'value': '', 'type': 'short-text', 'desc': 'City'},
//   'State PU': {'value': '', 'type': 'short-text', 'desc': 'State'},
//   'State DO': {'value': '', 'type': 'short-text', 'desc': 'State'},
//   'Zip Code PU': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
//   'Zip Code DO': {'value': '', 'type': 'short-text', 'desc': 'Zip Code'},
// },