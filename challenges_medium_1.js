const expenses = [
  {
    amount: 320,
    currency: 'USD',
    date: new Date('2024-06-10'),
    category: 'food',
    creator: 'Palguna',
    vendor: 'Swiggy'
  },
  {
    amount: 2500,
    currency: 'INR',
    date: new Date('2024-06-12'),
    category: 'internet',
    creator: 'Varun',
    vendor: 'Airtel'
  },
  {
    amount: 460,
    currency: 'USD',
    date: new Date('2024-06-13'),
    category: 'taxi',
    creator: 'Shishira',
    vendor: 'Ola'
  },
  {
    amount: 150,
    currency: 'INR',
    date: new Date('2024-06-14'),
    category: 'food',
    creator: 'Sita',
    vendor: 'Local Dhaba'
  },
  {
    amount: 780,
    currency: 'USD',
    date: new Date('2024-06-15'),
    category: 'shopping',
    creator: 'Palguna',
    vendor: 'Amazon'
  },
  {
    amount: 120,
    currency: 'INR',
    date: new Date('2024-06-16'),
    category: 'food',
    creator: 'Varun',
    vendor: 'McDonalds'
  },
  {
    amount: 200,
    currency: 'INR',
    date: new Date('2024-06-16'),
    category: 'taxi',
    creator: 'Shishira',
    vendor: 'Uber'
  },
  {
    amount: 999,
    currency: 'INR',
    date: new Date('2024-06-18'),
    category: 'entertainment',
    creator: 'Sita',
    vendor: 'BookMyShow'
  },
  {
    amount: 2300,
    currency: 'INR',
    date: new Date('2024-06-19'),
    category: 'internet',
    creator: 'Palguna',
    vendor: 'Jio'
  },
  {
    amount: 350,
    currency: 'INR',
    date: new Date('2024-06-20'),
    category: 'food',
    creator: 'Shishira',
    vendor: 'Dominos'
  }
];


// Challenge 1: Print the total amount spent on each category. (Ex: food: 100, internet: 2000 etc)

// Challenge 2: Print a sorted array of all expenses by amount in descending order.

// Challenge 3: Print the name of people who have spent on food category

// Challenge 4: Print Yes/No by checking whether Palguna has created any expense in USD currency.

// Challenge 5: Print the name and vendor for the expenses with amount greater than 500.