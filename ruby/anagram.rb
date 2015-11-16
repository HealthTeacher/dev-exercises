class Anagram

  def initialize(string)
    @word = string
  end

 def match(array)
   final = []
   array.each do |el|
     if isAnagram?(el)
       final << el
     end
   end
   return final
 end

 def isAnagram?(string)
   if @word.downcase == string.downcase
     return false
   end
   check = @word.downcase.split("").sort.join
   tester = string.downcase.split("").sort.join
   return check == tester
 end

end
