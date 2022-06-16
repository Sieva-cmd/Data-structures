# pseudocode
# write a function to sum intergers in an array
# declare an array of integers
# write a function that takes the array as the argument
# initialize a variable sum to zero
# loop through the array ,from the first index at 0 to the last index 
# add the integers of the array at certain index to the initial sum variable and store the anser in another variable
# return the sum

# code
ar =[1,2,3,4,5,6]
def simpleArraySum(ar):
    sum =0
    for i in range(0,len(ar)):
        sum = sum + ar[i]
        print(sum)
    return sum 

     
simpleArraySum(ar)       
       
