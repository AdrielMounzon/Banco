//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.total = 0;
    this.abierto = false;
  }

  open() {
    if(this.abierto==false)
    {
      this.abierto=true;
    }
    else
    {
      throw new ValueError();
    }
  }

  close() {
    if(this.abierto==true)
    {
      this.abierto=false;
      this.total=0;
    }
    else
    {
      throw new ValueError();
    }
  }

  deposit(monto) {
    if(monto<0)
    {
      throw new ValueError();
    }
    if(this.abierto==true)
    {
      this.total += monto;
    }
    else{
      throw new ValueError();
    }
  }

  withdraw(monto) {
    if(this.abierto==true)
    {
      if(monto<0)
      {
        throw new ValueError();
      }
      if(this.total>=monto)
      {
        this.total -= monto;
      }
      else
      {
        throw new ValueError();
      }      
    }
    else{
      throw new ValueError();
    }
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
