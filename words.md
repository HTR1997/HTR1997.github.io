# Complex Numbers
## Why I am making this

1. I find reading phase charts with RGB rainbows difficult.
2. I really like visualizing math.
3. My favorite math tool is this one:

```
       HARD
   A --------> B
   |          /|\
   |           |
  \|/          |
   A'--------> B'
       EASY
```

4. I *hate* SOH CAH TOA or any other memonic for learning trig.

x^2^ - 6 = x
(x + 2)(x-3) = 0
x = -2 & x = 3

A -> A' is often visualizing the problem and B' -> B is getting the answer from that.
But it can also be taking a picture and creating some algebra to go with it.


## Complex numbers link algebra and trigonometry.

I learnt about imaginary numbers after leaning about real numbers. That is probably how everyone is taught.

There are a lot of ways to visualize complex numbers. I really like this way:

![Circle with e^*j*θ](exponential.ts)

Normally we use a + b*i* to represent a complex number. The algebra rules are nice to work with.
But I feel like its such a missed opportunity to talk about these numbers using e^*j*θ as the main representation.

The first time I saw an imaginary number in the exponential was with this equation:
e^*i*π^ + 1 = 0
But I feel like it obscures some simplicity in exchange for being pretty cool.
e^jθ^ = cos(θ) + *j*sin(θ) is the full equation.
We can get to it by using the Taylor series expansion of e^x^.

Going one step further:
We can represent cosine as cos(θ) = (e^jθ^ + e^-jθ^)/2 and
We can represent sine as   sin(θ) = (e^jθ^ - e^-jθ^)/2j

Here are representations for those visually.


![Cosine as exponentials](exponential.ts)
![Sine as exponentials](exponential.ts)



## More trig functions

That is pretty cool. We have a way to represent sine and cosine as complex exponentials and vice-versa.
But what about the other trig functions? Lets skip past tangent and talk about the functions with special names that I didn't learn about.
Secant.
Cosecant.






## Computer graphics

Lots of trigonometry. The library being used to render these images uses Quaternions.


