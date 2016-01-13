class Anagram

  def initialize(root_word)
    @root_word = root_word
  end

  def match(candidates)
    candidates.select{|c| self.is_anagram?(c) }
  end

  def is_anagram?(word)
    self.not_equal(word) && self.has_same_letters(word)
  end

  def not_equal(word)
    @root_word.casecmp(word) != 0
  end

  def has_same_letters(word)
    word.downcase.split(//).sort == @root_word.downcase.split(//).sort
  end
end
