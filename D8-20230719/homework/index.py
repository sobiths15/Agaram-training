user_foods={"milk":1.02,"popcorn":2.5,"bread":2.5}
item_1=input("enter the item")
item_2=input("enter the item")
total=user_foods[item_1]+user_foods[item_2]
if item_1==user_foods["milk"] or user_foods["popcorn"]or user_foods["bread"]:
    if item_2==user_foods["milk"] or user_foods["popcorn"]or user_foods["bread"]:
        print("items are present",total)
    else:
        print("not available")