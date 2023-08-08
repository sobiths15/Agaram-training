'''name=input("enter name ")
age=int(input("enter age"))
if age<3:
    print("children you pay in free")
elif age<=3 and age>=12:
    print("children you pay $10")    
elif age>=65:
    print("you pay $12")
else:
    print("you pay $15")  '''

'''number=int(input("enter number"))
if number==1:
    print("today is sunday")   
elif number==2:
    print("today is monday")   
elif number==3:
    print("today is tuesday")
elif number==4:
    print("today is wednesday")
elif number==5:
    print("today is thursday")
elif number==6:
    print("today is friday")
elif number==7:
    print("today is saturday")
else:
    print("invalid data")  '''

num_1=int(input("enter num 1")) 
num_2=int(input("enter num 2"))
num_3=int(input("enter num 3"))  
if num_1>num_2:
    if num_1>num_3:
        print(num_1,"is greater")
    else:
        print(num_3,"is greater")
elif num_2>num_3:
        print(num_2,"is greater")
else:
        print(num_3,"is greater")    

