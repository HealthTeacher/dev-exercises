class Bob

  def hey(string="")
    copy = string.dup
    if  string == copy.upcase && string != copy.downcase
      return "Whoa, chill out!"
    elsif string[-1] == "?"
      return "Sure."
    elsif string.length == 0  || string.split(" ").length == 0
      return "Fine. Be that way!"
    else
      return "Whatever."
    end
  end

end
