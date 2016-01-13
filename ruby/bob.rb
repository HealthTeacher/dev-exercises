class Bob
  def hey(remark)
    @remark = Remark.new(remark)
    reply = "Whatever."
    reply = "Sure." if @remark.is_question?
    reply = "Whoa, chill out!" if @remark.is_shouting?
    reply = "Fine. Be that way!" if @remark.is_blank?
    reply
  end

end

class Remark
  attr_reader = :remark

  def initialize(remark)
    @remark = remark
  end

  def is_question?
    @remark.end_with?('?')
  end

  def is_shouting?
    return false if self.has_no_words?
    @remark == @remark.upcase
  end

  def has_no_words?
    no_words = /[^a-zA-Z]*[?]*/
    no_words.match(@remark).to_s == @remark
  end

  def is_blank?
    @remark.strip == ""
  end

end
