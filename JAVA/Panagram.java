import java.util.Scanner;

class Panagram {
    public static void main(String[] args) {
        String result = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String finder;
        Scanner Obj = new Scanner(System.in);
        System.out.println("Enter the String");
        String input=Obj.nextLine();
        input= input.replaceAll("\\s","").toUpperCase();
        for(int i=0;i<input.length();i++){
            if(result.length() == 0){
                break;
            }
            finder = String.valueOf(input.charAt(i));
            if(result.contains(finder)){
                result = result.replace(finder,"");
            }
        }
        if(result.length() == 0){
            System.out.println("The string is pangram");
        }else{
            System.out.println("The string is not panagram");
        }
    }
}