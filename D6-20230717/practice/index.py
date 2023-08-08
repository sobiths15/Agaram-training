#gender="male"
#if gender=="male":
   #print("blue")
gender=input("enter gender")
if gender=="female":
    print("pink")
elif gender=="male": 
    print("blue")
elif gender=="transgender":
    print("lavender")    
else:
    print("invalid input")

total_marks=int(input("mark"))
if total_marks>90:
    print("eligible for mbbs")
elif total_marks>85 and total_marks<=92:
    print("bds")
elif total_marks>75 or total_marks<=85:
    print("agriculture")
else:
    print("B.E")

    