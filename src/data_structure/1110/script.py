x = int(input())

queue = []
for i in range(1, x + 1):
    queue.append(i)
# print(queue)
print(queue)

queue_aux = []

for i in queue:
    if len(queue) >= 2:
        queue_aux.append(i)
        i += 1
        queue.insert(len(queue), queue.pop(i))

print(queue_aux)
