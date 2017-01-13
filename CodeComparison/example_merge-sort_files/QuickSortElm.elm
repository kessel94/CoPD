main = asText (qsort [3,9,1,8,5,4,7])

qsort lst =
  case lst of
    x:xs -> qsort (filter ((>=)x) xs) ++ [x] ++ qsort (filter ((<)x) xs)
    [] -> []