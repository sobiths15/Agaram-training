'''grocery_items=[
    {"item":"apples","price":2.50},
    {"item":"bananas","proce":1.70}
]
budget_limit=int(input("enter amount"))
selected_items=input("enter items")
for item in grocery_items:
    if item['item']==selected_items:
        maximum_quantity=int(budget_limit/item["price"])
        remaining_cost=budget_limit%item["price"]
        total_cost=item["price"]*maximum_quantity
        print(remaining_cost)
        if maximum_quantity>0:
            print(maximum_quantity,item["item"],"total cost",total_cost)
            if remaining_cost>0:
                print("remaining cost is",remaining_cost)
        else:
            print("you did not have enough money")
    else:
        print("items not in list")    

students_data=[
    {
        "name":"john",
        "mid_term":{"maths":30,"science":42},
        "attendence":[{"month":"july","total_working_days":26,"leave":3},
                      {"month":"august","total_working_days":24,"leave":0},
                      {"month":"sept","total_working_days":25,"leave":2}
                      ]
    },
    
       { "name":"emma",
        "mid_term":{"maths":20,"science":49},
        "attendence":[{"month":"july","total_working_days":26,"leave":6},
                      {"month":"august","total_working_days":24,"leave":10},
                      {"month":"sept","total_working_days":25,"leave":5}
                      ]
    }
              ]     
for students in students_data:
    maths_score=students["mid_term"]["maths"]  
    science_score=students["mid_term"]["science"]
    total_working_days=0
    total_leaves=0
for attendence_data in students["attendence"]:
    total_working_days+=attendence_data["total_working_days"] 
    total_leaves+=attendence_data["leave"]
    attendance_percentage=(total_working_days-total_leaves)/total_working_days*100
if(maths_score<35 or science_score<35) and attendance_percentage<80:
    print(students["name"],"not eligible")'''

monthly_jwel_rate=[
    {
        "month":"jan",
        "gold_rate":"2000",
        "jewls_list":[{
            "name":"chain",
            "making_charge":12
        },
        {
            "name":"ring",
            "making_charge":10
        }]
    }
    {
        "month":"feb",
        "gold_rate":"4000",
        "jewls_list":[{
            "name":"chain",
            "making_charge":12
        },
        {
            "name":"ring",
            "making_charge":10
        }]
    }
]    

       