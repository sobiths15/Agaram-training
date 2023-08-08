'''amount_of_an_item=int(input("enter the amount"))
if amount_of_an_item>500 and amount_of_an_item<=1000:
    print("you have owned a silver token")
elif amount_of_an_item>1000 and amount_of_an_item<5000:
    print("you have owned a golden tokken")
elif amount_of_an_item==5000 or amount_of_an_item>5000:
    print("you have owned a platinum token")
elif amount_of_an_item==500 or amount_of_an_item<500:
    print("no tokken available")'''


email=input("enter your email")  
password=input("enter your password")  
if email=="sobiths15@gmail.com" and password=="abcdef":
    print("you are logged in successfully")
elif email!="sobiths15@gmail.com" and password=="abcdef":
    print("wrong email")
elif email=="sobiths15@gmail.com" and password!="abcdef":
    print("wrong password")
else:
    print("you are not authenticated")
