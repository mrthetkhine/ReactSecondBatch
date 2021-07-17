let factorial n =
    let rec factorial' n acc =
        match n with
        | 0 -> acc
        | _ -> factorial' (n – 1) (acc * n)
    factorial' n 1

println factorial 4    