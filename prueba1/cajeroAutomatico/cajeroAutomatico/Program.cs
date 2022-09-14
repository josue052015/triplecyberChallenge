
int oneCoinQuantity = 0;
int fiveCoinQuantity = 0;
int tenCoinQuantity = 0;
int fiftyBillQuantity = 0;
int hundredBillQuantity = 0;
int twoHundredBillQuantity = 0;
int fiveHundredBillQuantity = 0;
int thousandBillQuantity = 0;
int twoThousandBillQuantity = 0;
int oneCoin = 1;
int fiveCoin = 5;
int tenCoin = 10;
int fiftyBill = 50;
int hundredBill = 100;
int twoHundredBill = 200;
int fiveHundredBill = 500;
int thousandBill = 1000;
int twoThousandBill = 2000;

BEGIN:

try
{
    Console.WriteLine("Please, introduce amount");

    int amount  = Convert.ToInt32(Console.ReadLine());
    int remainingAmount = amount;


    while (remainingAmount > 0)
    {

        if(remainingAmount >= twoThousandBill)
        {
            remainingAmount -= twoThousandBill;
            twoThousandBillQuantity += 1;
        }
        else if (remainingAmount >= thousandBill)
        {
            remainingAmount -= thousandBill;
            thousandBillQuantity += 1;
        }
        else if (remainingAmount >= fiveHundredBill)
        {
            remainingAmount -= fiveHundredBill;
            fiveHundredBillQuantity += 1;
        }
        else if (remainingAmount >= twoHundredBill)
        {
            remainingAmount -= twoHundredBill;
            twoHundredBillQuantity += 1;
        }
        else if (remainingAmount >= hundredBill)
        {
            remainingAmount -= hundredBill;
            hundredBillQuantity += 1;
        }
        else if (remainingAmount >= fiftyBill)
        {
            remainingAmount -= fiftyBill;
            fiftyBillQuantity += 1;
        }
        else if (remainingAmount >= tenCoin)
        {
            remainingAmount -= tenCoin;
            tenCoinQuantity += 1;
        }
        else if (remainingAmount >= fiveCoin)
        {
            remainingAmount -= fiveCoin;
            fiveCoinQuantity += 1;
        }
        else if (remainingAmount >= oneCoin)
        {
            remainingAmount -= oneCoin;
            oneCoinQuantity += 1;
        }
        else
        {
            break;
        }
    }

    switch(remainingAmount == 0)
    {
        case true:

            DisplayBillsAndCoinsAmount();

            break;

        case false:

            goto BEGIN;

            break;
    }

    Console.ReadLine();
}
catch (Exception ex)
{
    Console.WriteLine("Something went wrong. Try again!");
    goto BEGIN;
}

void DisplayBillsAndCoinsAmount()
{
    if (oneCoinQuantity > 0) Console.WriteLine("One Coin Quantity: " + oneCoinQuantity);
    if (fiveCoinQuantity > 0) Console.WriteLine("Five Coin Quantity: " + fiveCoinQuantity);
    if (tenCoinQuantity > 0) Console.WriteLine("Ten Coin Quantity: " + tenCoinQuantity);
    if (fiftyBillQuantity > 0) Console.WriteLine("Fifty Bill Quantity: " + fiftyBillQuantity);
    if (hundredBillQuantity > 0) Console.WriteLine("Hundred Bill Quantity: " + hundredBillQuantity);
    if (twoHundredBillQuantity > 0) Console.WriteLine("Two Hundred Bill Quantity: " + twoHundredBillQuantity);
    if (fiveHundredBillQuantity > 0) Console.WriteLine("Five Hundred Bill Quantity: " + fiveHundredBillQuantity);
    if (thousandBillQuantity > 0) Console.WriteLine("Thousand Bill Quantity: " + thousandBillQuantity);
    if(twoThousandBillQuantity > 0) Console.WriteLine("Two Thousand Bill Quantity: " + twoThousandBillQuantity);
}

