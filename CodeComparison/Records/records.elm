import Html exposing (text)

main =
  text (getName dude)
  
type alias Positioned a =
  { a | x : Float, y : Float }

type alias Named a =
  { a | name : String }

type alias Moving a =
  { a | velocity : Float, angle : Float }  
  
lady : Named { age:Int }
lady =
  { name = "Lois Lane"
  , age = 31
  }

dude : Named (Moving (Positioned {}))
dude =
  { x = 0
  , y = 0
  , name = "Clark Kent"
  , velocity = 42
  , angle = degrees 30
  }
  
getName : Named a -> String
getName {name} =
  name

names : List String
names =
  [ getName dude, getName lady ]

getPos : Positioned a -> (Float,Float)
getPos {x,y} =
  (x,y)

