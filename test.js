const match = 'Product ID: 84, Product Qty: 1, Product SKU: 1267-07, Product Name: MedCline Reflux Relief System, Product Weight: 21.2100, Product Variation Details: Size: Large - Height 5&#039; 9&quot; to 6&#039; 2&quot; - Maximum Weight 250 lbs., Primary Reason for Purchase: Shoulder Pain, Please share how you heard about MedCline. Thank you: Radio, Return policy: Yes, Product Unit Price: 296.00, Product Total Price: 296.00'

console.log(match.split(',')[6].split(':')[1])
console.log(match.split(',')[7].split(':')[1])
