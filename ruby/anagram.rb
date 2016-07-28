#!/usr/bin/env ruby

class Anagram

	def initialize(target)
		@target = target.downcase
	end

	def match(wordList)
		results = []
		if wordList.respond_to?("each")
			wordList.each do |word|
				#test in lowercase
				testWord = word.downcase

				#if the length is the same and the word is not identical
				if testWord.length == @target.length && testWord != @target
					#start a counter
					counter = @target.length

					#break target word into array of individual letters to check against
					tempTargetArray = @target.scan /\w/

					#break test word into array of individual letters
					letterArray = testWord.scan /\w/

					#loop through letters in test word array
					letterArray.each do |letter|
						if tempTargetArray.include?(letter)
							tempTargetArray.delete_at(tempTargetArray.index(letter) || tempTargetArray.length)
							counter -= 1
						end
					end
				end
				if counter == 0
					results.push(word)
				end
			end
		end
		return results.sort
	end
end