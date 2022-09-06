from collections import deque

while True:
    try:
        exp = input().strip()

        correct = True
        stack = deque()
        for i in exp:
            if i == '(':
                stack.append(i)
            elif i == ')':
                if len(stack) == 0:
                    correct = False
                    break
                else:
                    stack.pop()

        correct = correct and len(stack) == 0

        print('correct') if correct else print('incorrect')
    except EOFError:
        break
