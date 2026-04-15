 import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        char choice;

        do {
            int score = 0;

            System.out.println("Welcome to Quiz!");

            // Question 1
            System.out.println("1. Java is?");
            System.out.println("a) Language b) Animal c) Car d) Fruit");
            String ans1 = sc.next();

            if(ans1.equalsIgnoreCase("a")) {
                score++;
            }

            // Question 2
            System.out.println("2. HTML stands for?");
            System.out.println("a) Hyper Trainer Marking Language");
            System.out.println("b) Hyper Text Markup Language");
            System.out.println("c) High Text Machine Language");
            System.out.println("d) None");
            String ans2 = sc.next();

            if(ans2.equalsIgnoreCase("b")) {
                score++;
            }

            // Question 3
            System.out.println("3. CPU stands for?");
            System.out.println("a) Central Processing Unit b) Computer Processing Unit c) Central Print Unit d) None");
            String ans3 = sc.next();

            if(ans3.equalsIgnoreCase("a")) {
                score++;
            }

            // Question 4
            System.out.println("4. Java is platform independent?");
            System.out.println("a) Yes b) No");
            String ans4 = sc.next();

            if(ans4.equalsIgnoreCase("a")) {
                score++;
            }

            // Question 5
            System.out.println("5. Which is not a programming language?");
            System.out.println("a) Java b) Python c) HTML d) C++");
            String ans5 = sc.next();

            if(ans5.equalsIgnoreCase("c")) {
                score++;
            }

            // Result
            System.out.println("Your Score: " + score);

            if(score == 5){
                System.out.println("Excellent!");
            } 
            else if(score >= 3){
                System.out.println("Good Job!");
            } 
            else {
                System.out.println("Try Again!");
            }

            System.out.println("Play again? (y/n)");
            choice = sc.next().charAt(0);

        } while(choice == 'y' || choice == 'Y');

        sc.close();
    }
}