namespace CSharpFun
{
    public class Picker
    {
        public static void Main(string[] args)
        {
            var input = "";
            do
            {
                Console.WriteLine("What color do you want to see? Type 'done' to quit.");
                input = Console.ReadLine();
                SetBackgroundColor(input);
            } while (input != "done");

        }

        private static void SetBackgroundColor(string? input)
        {
            ConsoleColor userColor;
            if (Enum.TryParse(input, true, out userColor))
            {
                var existingBackgroundColor = Console.BackgroundColor;
                var existingForegroundColor = Console.ForegroundColor;

                if (userColor != existingBackgroundColor)
                {
                    Console.BackgroundColor = userColor;
                    Console.ForegroundColor = ConsoleColor.Magenta;
                    if (userColor == existingForegroundColor)
                    {
                        if (userColor == ConsoleColor.Black)
                            Console.ForegroundColor = ConsoleColor.White;
                        else if (userColor == ConsoleColor.White)
                            Console.ForegroundColor = ConsoleColor.Black;
                    }
                }
            }
        }
    }
}