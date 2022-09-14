

BEGIN:
Console.WriteLine("Please, introduce amount of elements");
string? userInput = Console.ReadLine();
int defaultQuantity = 5;
int elementsAmount = userInput == "" ? defaultQuantity : Convert.ToInt32(userInput);
int randomNumber;
List<int> randomNumbersList = new List<int>();

if (IsAValidInput())
{
    Console.WriteLine("Result:");

   for (int i = 1; i <= elementsAmount; i++)
    {
        randomNumber = GenerateRandomNumber();
        Console.WriteLine(randomNumber);
    }
}
else
{
    Console.WriteLine("Invalid input. Try again!");
    goto BEGIN;
}

Console.ReadLine();

Boolean IsAValidInput()
{
    return (elementsAmount > 0 && elementsAmount <= 20);
}

int GenerateRandomNumber()
{
    GENERATERANDOM:

    Random random = new Random();
    int result =  random.Next(1,100);

    int valueCoincidences = randomNumbersList.Where(i => i == result).Count();

    if (valueCoincidences > 0)
    {
        goto GENERATERANDOM;
    }
    else
    {
        randomNumbersList.Add(result);
        return result;
    }
   
}
