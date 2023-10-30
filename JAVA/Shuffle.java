public class Shuffle
{
	public static void main(String[] args) {
		int[] arr = {1,2,3,4,5,6,7};
        int n = arr.length;
        for(int i=n-1;i>0;i--){
               int j = (int)(Math.random()*(i+1));
               int temp = arr[j];
               arr[j]= arr[i];
               arr[i]=temp;
        }
        for(int i=0;i<n;i++){
            System.out.print(arr[i]);
        }
	}
}
