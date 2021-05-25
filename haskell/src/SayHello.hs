module SayHello
    ( sayHello
    ) where

sayHello :: String -> IO ()
sayHello x = putStrLn( "Hello " ++ x ++ "!")
