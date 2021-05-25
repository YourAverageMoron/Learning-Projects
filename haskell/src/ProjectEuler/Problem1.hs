module ProjectEuler.Problem1
    (sum3or5Multiples) where
{-
Problem 1:
https://projecteuler.net/problem=1
--If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
-}

sum3or5Multiples :: Integer -> Integer
sum3or5Multiples belowInteger = sum [x | x <- [1..belowInteger-1], x `mod` 3 == 0 || x `mod` 5 == 0]