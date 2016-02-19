# Write a program that, given a word and a list of possible anagrams, 
# selects the correct sublist.
# Given "listen" and a list of candidates like 
# "enlists" "google" "inlets" "banana" the program 
# should return a list containing "inlets".


puts "Hi, please write a word..."

word = gets.chomp

puts "...now write a list of possible anagrams."

list = gets.chomp

sortedWord = word.chars.sort.join

arr = list.split()

bye = ""

arr.each do |item|
   anagram = item.chars.sort.join
   if anagram == sortedWord
    puts "'"+item+"' is the anagram of '"+word+"'!"
    bye = "see you next time!"
    break
   else
    bye = "no anagrams here...try again!"
   end
end

puts bye
