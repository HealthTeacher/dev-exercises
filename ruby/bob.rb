#!/usr/bin/env ruby

class Bob

	def hey (prompt)
		if nothing(prompt)
			return "Fine. Be that way!"
		elsif yelling(prompt)
			return "Whoa, chill out!"
		elsif question(prompt)
			return "Sure."
		else
			return "Whatever."
		end
	end

	def question(prompt)
		if prompt[-1, 1] == "?"
			return true
		end
		return false
	end

	def yelling(prompt)
		if prompt == prompt.upcase && prompt =~ /[a-zA-Z]/
			return true
		end
		return false
	end

	def nothing(prompt)
		if prompt.strip.empty?
			return true
		end
		return false
	end

end