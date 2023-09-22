'''monthly_gold_rate=[
                   {"month":"jan",
                   "gold_rate":1000,
                   "jewels":[{"name":"chain","making_charge":100},
                             {"name":"ring","making_charge":11}]
                             },
                   {"month":"feb",
                   "gold_rate":2000,
                      "jewels":[{"name":"chain","making_charge":100},
                             {"name":"ring","making_charge":11}]
                             },
                   {"month":"mar",
                   "gold_rate":3000,
                   "making_chage":110
                      "jewels":[{"name":"chain","making_charge":100},
                             {"name":"ring","making_charge":11}] 
                             },                            
          ,                            
                   {"month":"apr",
                   "gold_rate":4000,
                   "making_chage":115
                      "jewels":[{"name":"chain","making_charge":100},
                             {"name":"ring","making_charge":11}]
                              },
                   {"month":"may",
                   "gold_rate":5000,
                   "making_chage":115
                         "jewels":[{"name":"chain","making_charge":100},
                             {"name":"ring","making_charge":11}]
                               }]
minimum=monthly_gold_rate[0]["gold_rate"]
maximum=monthly_gold_rate[0]["gold_rate"]

for rate in monthly_gold_rate:
    if rate["gold_rate"]<=minimum:
        minimum=rate["gold_rate"]
        min_month=rate["month"]
    if rate["gold_rate"]>=maximum:
        maximum=rate["gold_rate"]
        max_month=rate["month"]
print(min_month,"is low price",minimum)        
print(max_month,"is high price",maximum)  ''' 

user_details=[
            {
                "name":"ajay",
                "mark":[80,90,70,83,93]
            },
            {
                "name":"ajin",
                "mark":[81,90,70,83,93]  
            }
            ]
for students in user_details:
    print(students)
        
    