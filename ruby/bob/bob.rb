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
    (remark.end_with? "?") && (not_all_caps?(remark) || has_digits?(remark))
  end

  def other?(remark)
    no_letters?(remark) && not_question?(remark)
  end

  def no_letters?(remark)
    remark.gsub(/[a-zA-Z]/, "") == remark
  end

  def not_question?(remark)
    (remark.end_with? "?") == false
  end

  def not_all_caps?(remark)
    remark.gsub(/[a-z]/, "") != remark
  end

  def has_digits?(remark)
    remark.gsub(/\d/, "") != remark
  end

end

