
Console.WriteLine("Please, introduce amount of elements");
string? userInput = Console.ReadLine();
int defaultQuantity = 9;
int elementsAmount = userInput == "" ? defaultQuantity : Convert.ToInt32(userInput);

Console.WriteLine("Result:");

for (int i = 1; i <= elementsAmount; i++)
{
    Console.WriteLine(GeneratePrimeNumber());
}

Console.ReadLine();

int GeneratePrimeNumber()
{

    GENERATENUMBER:

    Random random = new Random();
    int randomNumber = random.Next(1, 10000);

    if (IsAPrimeNumber(randomNumber)) return randomNumber;

    else goto GENERATENUMBER;

}

Boolean IsAPrimeNumber(int number)
{

    int firstPrimeNumber = 2;

    if(number == firstPrimeNumber) return true;

    for (int i = 2; i < number; i++)
    {
       if(number % i == 0) return false;
    }
    return true;

}