import Html exposing (text)


main =
  text (toString (myFold (List.repeat 10000000 55)))




myFold : List number -> number
myFold x =
  case x of
    [] -> 0
    x -> List.foldr  (+) 0 x 

