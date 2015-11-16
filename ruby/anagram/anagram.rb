class Anagram

  def initialize(word)
    @word = word
  end

  def match(potential_angrms)
    sorted_word = canonical(@word)
    remove_identical_words!(potential_angrms)
    potential_angrms.select { |word| canonical(word) == sorted_word }
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def remove_identical_words!(potential_angrms)
    potential_angrms.delete_if { |word| word.downcase == @word }
  end

end