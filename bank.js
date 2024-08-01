let balance = 0;


function your_deposit() {
  const deposit_amount = parseInt(document.getElementById('deposit_amount').value);
  if (deposit_amount <= 0) {
    alert('Please enter a valid amount');
  }
  else{
  balance = balance + deposit_amount;
  alert(`Deposit of Amount: ₹${deposit_amount} is Successfully Completed..`);
}
}


function your_withdraw() {
  const withdraw_amount = parseInt(document.getElementById('withdraw_amount').value);
  if (withdraw_amount <= 0) {
    alert('Please enter a valid withdraw amount');
  }
  if (withdraw_amount > balance) {
    alert('Insufficient balance in your account. Please check your balance and try again..!!');
  }
  else{
  balance = balance - withdraw_amount;
  alert(`Withdrawal of Amount: ₹${withdraw_amount} is Successfully Completed..`);
}
}


function your_balance() {
  const show_balance = document.getElementById('show_balance');
  show_balance.textContent = `Current Balance: ₹${balance}`;
}
