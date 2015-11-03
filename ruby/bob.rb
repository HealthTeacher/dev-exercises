class Bob

  def hey(remark)
    if blank?(remark)
      "Fine. Be that way!"
    elsif other?(remark)
      "Whatever."
    elsif pure_question?(remark)
      "Sure."
    elsif yelling?(remark)
      "Whoa, chill out!"
    else
      "Whatever."
    end
  end

  def blank?(remark)
    remark.strip.empty?
  end

  def yelling?(remark)
    remark.upcase == remark
  end

  def pure_question?(remark)
    (remark.end_with? "?") && not_all_caps?(remark)
  end

  def other?(remark)
    no_letters?(remark) && not_question?(remark)
  end

  def no_letters?(remark)
    (remark =~ /[a-zA-Z]/) == nil
  end

  def not_question?(remark)
    (remark.end_with? "?") == false
  end

  def not_all_caps?(remark)
    ((remark =~ /[a-z]/) || (remark =~ /\d/))
  end

end

# class Bob

#   def hey(remark)
#     if remark == "WATCH OUT!"
#       "Whoa, chill out!"
#     elsif remark.strip.empty?
#       "Fine. Be that way!"
#     elsif (remark =~ /[a-zA-Z]/) == nil && (remark.end_with? "?") == false
#       "Whatever."
#     elsif (remark.end_with? "?") && ((remark =~ /[a-z]/) || (remark =~ /\d/))
#       "Sure."
#     elsif remark.upcase == remark
#       "Whoa, chill out!"
#     else
#       "Whatever."
#     end
#   end

# end