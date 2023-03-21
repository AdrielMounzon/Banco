//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total = 0;
    this.abierto;
  }

  open() {
    this.abierto=true;
  }

  close() {
    this.abierto=false;
  }

  deposit(monto) {
    this.total += monto;
  }

  withdraw(monto) {
    this.total-=monto;
  }

  get balance() {
    if(this.abierto==true)
    {
      return this.total;
    }
    else
    {
      throw new ValueError();
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
