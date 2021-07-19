def custom_while(condition)
  loop do
    break unless condition.()
    yield
  end
end

i = 0
custom_while -> { i < 5 } do
  puts i
  i += 1
end