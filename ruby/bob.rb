class Bob
  def hey(remark)
    @remark = Remark.new(remark)
    return "Fine. Be that way!" if @remark.is_blank?
    return "Whoa, chill out!" if @remark.is_shouting?
    return "Sure." if @remark.is_question?
    "Whatever."
  end

end

class Remark
  attr_reader = :remark

  def initialize(remark)
    @remark = remark
  end

  def is_question?
    @remark[-1] == "?"
  end

  def is_shouting?
    return false if self.is_only_numbers?
    @remark == @remark.upcase
  end

  def is_only_numbers?
    no_words = /[^a-zA-Z]*[?]*/
    no_words.match(@remark).to_s == @remark
  end

  def is_blank?
    @remark.strip == ""
  end

end
