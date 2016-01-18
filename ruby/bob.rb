class Bob

	def hey phrase
		if phrase.strip.empty?
			"Fine. Be that way!"
		elsif phrase.upcase == phrase and phrase.match(/[a-zA-Z]/)
			"Whoa, chill out!"
		elsif phrase.end_with? ('?')
			"Sure."
		else
			"Whatever."
		end
	end

end
