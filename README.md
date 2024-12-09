# Traveling Salesperson Problem -- Empirical Analysis

For this exercise, you'll need to take the code from the TSP Held-Karp and TSP
Local Search exercises. This can be your own implementation or somebody else's.
You will now do an empirical analysis of the implementations, comparing their
performance. Both the Held-Karp and the Local Search algorithms solve the same
problem, but they do so in completely different ways. This results in different
solutions, and in different times required to get to the solution.

Investigate the implementations' empirical time complexity, i.e. how the runtime
increases as the input size increases. *Measure* this time by running the code
instead of reasoning from the asymptotic complexity (this is the empirical
part). Create inputs of different sizes and plot how the runtime scales (input
size on the $x$ axis, time on the $y$ axis). Your largest input should have a
runtime of *at least* an hour. The input size that gets you to an hour will
probably not be the same for the Held-Karp and Local Search implementations.

In addition to the measured runtime, plot the tour lengths obtained by both
implementations on the same input distance matrices. The length of the tour that
Held-Karp found should always be less than or equal to the tour length that
Local Search found. Why is this?

Add the code to run your experiments, graphs, and an explanation of what you did
to this markdown file.

Held Karp ran about 1 hour and 16 minutes before codespace shut down with a matrix size of 20x20. The Local Search runs out of memory exception after about a matrix the size of 15000x15000. I ran tests from matices from 1x1 to 20x20 by changing the size variable in the timer function. Local Search is faster than Held karp as shown in the graph excpet when the matracies are relatively small. Held Karp start to really slow down at about 15x15 matricies. Through this comparision we also see that Held Karp is more accurate with the shortest path because it goes through all the possible subsets to find the shortest path, while Local search just goes through a few random combinations until if finds the best one. As seen in the graphs, local search start to become less accurate at about 5x5 matices. 

The local search was acting kind of strangely in my testing I started at 1000 which is were I really started to see the time be a little more and then went up by 1000 each test. Once I got to 15000 I would get a message that it is paused  before it was out of memory exception then I would unpause it and it would run as normal. This worked until I got to 23000 where I would unpause it, it would run for about few minutes before just stopped. I did my main testing in codespaces on github but I tried to see how much they would run on other online compiliers and they all stopped executing the code at 15000.

Used my TSP Local search and the TSP Held Karp from https://github.com/COSC3020/tsp-held-karp-DJReflexive/blob/main/code.js. Used this to figure out how to time the functions https://www.educative.io/answers/how-to-find-the-time-taken-to-execute-a-function-in-javascript  “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
