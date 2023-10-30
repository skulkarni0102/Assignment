import java.util.Scanner;

class MyRoman {
    static int number(char c){
        if(c=='I')
            return 1;
        if(c=='V')
            return 5;
        if(c=='X')
            return 10;
        if(c=='L')
            return 50;
        if(c=='C')
            return 100;
        if(c=='D')
            return 500;
        if(c=='M')
            return 1000;
        return -1;
    }
    public static void main(String[] args) {
        int val1 = 0,val2=0;
        Scanner Obj = new Scanner(System.in);
        System.out.println("Enter the Roman Number");
        String input=Obj.nextLine();
        input =input.toUpperCase();
        
        int result=0;
        
        for(int i=0;i<input.length();i++){
            val1 = number(input.charAt(i));
            if(val1 == -1){
                break;
            }
            if(i+1<input.length()){
                val2 = number(input.charAt(i+1));
                if(val1>=val2){
                    result = result+val1;
                }else{
                    result = result + val2- val1;
                    i++;
                }
            }else{
                result = result+val1;
            }
        }
        if(val1 == -1){
            System.out.println("Please Enter Valid Roman Number");
        }else{
            System.out.println(result);   
        }
    }
}