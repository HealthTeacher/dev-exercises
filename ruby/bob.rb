counter = 0
while counter < 10
  if counter == 0
    puts "Hi, I am BOB, a lackadaisical teenager! Let's talk!"
  elsif counter == 9
    puts "I'm tired now. See ya!"
    break
  else
    puts "Anything else?"
  end
  answer = gets.chomp

  if answer.include? "?"
     puts "Sure!"
  elsif (answer == answer.upcase) && (answer.include? "!")
    puts "Whoa, chill out!"
  elsif answer == ""
    puts "Fine. Be that way!"
  else
    puts "Whatever."
  end
  counter += 1
end
