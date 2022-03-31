i = 0
j = 0 
while i < 2:
    x = 0
    while x < 3:
        j += 1
        x += 1
        print(f"I={i:.1f} J={j:.1f}")
    y = 0
    while y < 3:
        j += 0.2
        y += 1
        print(f"I={i:.1f} J={j:.1f}")
    i += 0.2
