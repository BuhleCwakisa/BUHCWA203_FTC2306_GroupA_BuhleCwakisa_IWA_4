const date = 2050
const status1 = 'parent'
let count = 0

if (date == 2050) {
	console.log("January", "New Year’s Day" )
	console.log("March", 'Human Rights Day')
	const date1 = 'April'
	console.log(date1, 'Family Day')
	console.log(date1, 'Freedom Day')
    
    count = count + 4

	if (status1 == "student") {
	  console.log('June', 'Youth Day')
		 count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	const date2 = 'December'
	console.log(date2, 'Day of Reconciliation')
	 count = count + 3

	if (status1 == "parent") {
	  console.log(date2, 'Christmas Day')
		count = count + 1
  }

	console.log(date2, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status1)
console.log('The year is:', date)
console.log('The total holidays is:', count)