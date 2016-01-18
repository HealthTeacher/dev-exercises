class Anagram

	def initialize word
		@word = word
	end

	def match(words)
		anagrams = []
		word = @word.downcase.split('').sort.join
		words.each do |w|
			if w.downcase != @word
				anagrams << w unless w.downcase.split('').sort.join != word
			end
		end
		anagrams
	end

end
