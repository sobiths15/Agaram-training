'''number_1=int(input("enter number"))
number_2=int(input("enter number"))
if number_1%number_2==0:
    print(" divideble")
else:
    print("non divideble")   ''' 

year=int(input("enter year"))    
if year%400==0 and year%100==0:
    print("leaf year")
elif year%4==0 and not year%100==0:
    print("leaf year")    
else:
    print("non leaf year")    

