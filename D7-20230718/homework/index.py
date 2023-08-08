name=input("enter your name")
gender=input("enter your gender")
age=int(input("enter your age"))
if age>=60 and gender=="male":
    print("mr.",name,",you are senior citizen")
elif age>=60 and gender=="female":
    print("mrs.",name,",you are senior citizen")    
elif age>=18 and gender=="male":
    print("mr.",name,",you are an adult")
elif age>=18 and gender=="female":
    print("mrs.",name,"you are an adult")   
elif age<18 and gender=="male":
    print("mr.",name,"you are a teenager")     
elif age<18 and gender=="female":
    print("mrs.",name,"you are a teenager")        