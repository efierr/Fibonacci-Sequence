# Fibonacci-Sequence

## Introduction

In mathematics, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones. This sequence was first introduced by a mathematician in india named Virahanka 600 years prior its introduction to the west. It made it's first appearance in the west in 1202 by a man named leonardo of pisa, who is also known as "Fibonacci". The Fibonacci sequence was introduced In Fibonacci's first book "liber Abaci" where he experimented with the fibonacci sequence by calculating the growth of rabbit populations. Within this experiment is where he was able to discover the fibonacci sequence. 
 ![Alt text](<Fibonacci sequence.png>)

## Golden Ratio
The golden ratio is an irrational number, commonly denoted by the Greek letter phi (φ), whose decimal representation is approximately 1.618033988749895. This constant exhibits the property of being irrational, meaning that its decimal expansion is non-repeating and non-terminating. As the fibonacci sequence increases, the ratio of a number to its predecessor approaches the golden ratio.
![Alt text](Fibonacci-Golden-Ratio.png)

![The Golden Ratio](1_9J2Wf2sapv9XeYtjQzPwVA.gif)
## Algorithm Description
We first define the function "Fibonacci" and we pass a parameter of (n) that returns the nth from the Fibonacci sequence. Next we create a constant called "Fibonacci" and initialize a array and add the first two numbers of the sequence which are 0 and 1. We now have to populate the array with the rest of the sequence, to do that we need to create a for loop that starts at the index of 2 since we already have an index of 0 and 1. We then iterate till we have all needed elements in the array. in each iteration of the for loop we populate the value of index i by adding the previous two previous elements in the Fibonacci array. Lastly we return our constant array.

![Function](<Screenshot 2024-01-20 at 2.41.43 AM.png>)
## Fibonacci Search
The fibonacci search is a algorithm that uses a divide and conquer approach to search for elements in a sorted array. While similar to the binary search algorithm, Using fibonacci search, it divides the array into two parts that are proportional to the fibonacci sequence.
While Fibonacci search offers more balanced partitions, its advantages are limited compared to other more efficient search algorithms. the time complexity of the fibonacci search is o(log n) where n is the size of the sorted array. the space complexity is o(1) due to the constant amount of extra space regardless of the input size.


## Big O Evaluation

### Time Complexity
The function above uses a loop that iterates through the fibonacci sequence up to the nth number. The time complexity for this function is based on the time it takes for the function to be completed based on the input of the parameter n. In result the time complexity of this function is 0(n) defining it be linear.


### Space Complexity
Space complexity in the function above is O(n) as it only carries one constant variable which is the Fibonacci array. As the parameter (n) increases the array will also increase proportionally leading to a linear relationship between time and space complexity.

## Use Cases
There are many uses for the fibonacci sequence.

In art and design, many architects use the fibonacci sequence to incorporate the golden ratio in building designs such as windows, doors, and even buildings to calculate perfect rectangles.

in computer science, the fibonacci numbers are used in algorithms such as dynamic programming and recursive algorithms.

Since the fibonacci sequence is closely associated with the golden ratio, it shows a connection to the aesthetics of nature. it is shown in the spiral of shells, and arrangement of leaves and the growth pattern in plants. All these follow the proportionate beauty of the golden ratio. 





## Edge Cases and Concerns

Memory considerations: as 'n' becomes larger, the array will also become larger, this could lead to memory issues for very large values of 'n'


## Citations

[Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci_sequence)

[Fibonacci Search](https://stackabuse.com/bytes/fibonacci-search-in-javascript/)

[Leonardo of pisa autobiography](https://en.wikipedia.org/wiki/Fibonacci)

[fibonacci Algorithm](https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e)

[ChatGpt Conversation](https://chat.openai.com/share/865930e6-f787-4890-9cfb-755b08209782)

[golden ratio](https://www.geeksforgeeks.org/fibonacci-series/)