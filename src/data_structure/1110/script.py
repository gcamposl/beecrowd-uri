while True:
    x = int(input())
    if x == 0:
        break

    queue = []
    for i in range(1, x + 1):
        queue.append(i)

    queue2 = []

    if len(queue) > 1:
        for i in range(len(queue) - 1):
            if(len(queue) > 1):
                queue2.append(queue.pop(i))
                queue.insert(len(queue), queue[i])

    print("Discarded cards: " + str(queue2).replace("[", "").replace("]", ""))
    print("Remaining card:", queue.pop())
