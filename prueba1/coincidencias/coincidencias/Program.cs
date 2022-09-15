List<int> numbers = new List<int>();
List<int> primeNumbers = new List<int>();
int newNumber = 0;
int maxPrimeNumber = 0;
int maxPrimeNumberQuantity = 0;

for (int i = 0; i < 50; i++)
{
    newNumber = GenerateRamdonNumber();
    numbers.Add(newNumber);

    if (IsAPrimeNumber(newNumber)) primeNumbers.Add(newNumber);
}


if(primeNumbers.Count > 0)
{
    maxPrimeNumber = primeNumbers.Max();
    maxPrimeNumberQuantity = primeNumbers.Where(x => x == maxPrimeNumber).Count();

    GenerateFibonacciNumbers(maxPrimeNumberQuantity);
}

Console.ReadLine();

int GenerateRamdonNumber()
{
    Random random = new Random();
    int randomNumber = random.Next(10, 15);
    return randomNumber;
}

Boolean IsAPrimeNumber(int number)
{

    int firstPrimeNumber = 2;

    if (number == firstPrimeNumber) return true;

    for (int i = 2; i < number; i++)
    {
        if (number % i == 0) return false;
    }
    return true;

}

void GenerateFibonacciNumbers(int quantity)
{
    int x = 1, y = 0;
    int result;

    for (int i = 0; i < quantity; i++)
    {
        result = x + y;
        Console.WriteLine(result);
        y = x;
        x = result;
    }
}