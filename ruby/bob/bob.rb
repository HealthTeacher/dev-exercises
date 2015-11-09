class Bob

  def hey(remark)
    if blank?(remark)
      "Fine. Be that way!"
    elsif yelling?(remark)
      "Whoa, chill out!"
    elsif question?(remark)
      "Sure."
    else
      "Whatever."
    end
  end

  private

  def yelling?(remark)
    (remark.upcase == remark) && has_letters?(remark)
  end

  def question?(remark)
    (remark.end_with? "?")
  end

  def blank?(remark)
    remark.strip.empty?
  end

  def has_letters?(remark)
    /[a-zA-Z]/.match(remark)
  end


end


