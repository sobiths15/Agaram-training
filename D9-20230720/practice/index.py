'''num_1=int(input("enter number"))
num_2=int(input("enter number"))
operator=input("enter operator")
add=num_1+num_2
sub=num_1-num_2
mul=num_1*num_2
div=num_1/num_2
if operator=="+":
    print(add)
elif operator=="-":
    print(sub)
elif operator=="*":
    print(mul)
elif operator=="/":
    print(div)'''



'''input_1=int(input("enter num"))
input_2=int(input("enter num"))
input_3=int(input("enter num"))
input_4=int(input("enter num"))
input_5=int(input("enter num"))
sum=input_1+input_2+input_3
print(sum)
mul=sum*input_4*input_5
print(mul)
odd_or_even=mul%2
if odd_or_even==0:
    print("even")
else:
    print("odd")    '''

'''basic_salary=int(input("enter salary"))
if basic_salary<=10000:
    print(basic_salary)
    tha=basic_salary*0.2
    da=basic_salary*0.05
    salary=tha+da
    gross_salary=basic_salary+salary
    print("gross salary:",gross_salary) 
elif basic_salary>10000 and basic_salary<=20000:
    print(basic_salary)
    tha=basic_salary*0.25
    da=basic_salary*0.07
    salary=tha+da
    gross_salary=basic_salary+salary
    print("gross salary:",gross_salary)    
elif basic_salary>20000:
    print(basic_salary)
    tha=basic_salary*0.3
    da=basic_salary*0.08
    salary=tha+da
    gross_salary=basic_salary+salary
    print("gross salary:",gross_salary) '''

'''maths=int(input("enter mark"))
physics=int(input("enter mark"))   
chemistry=int(input("enter mark")) 
total=maths+physics+chemistry
sub_total=maths+physics
if maths>=65 and physics>=55 and chemistry>=50 and total>=190:
    print("eligible")
elif sub_total>=140:
    print("eligible")
else:
    print("not eligible") '''   

electricity_units=input("enter units")
cost=input("enter cost")
