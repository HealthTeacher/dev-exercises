class Anagram

  def initialize(word)
    @word = word
  end

  def match(potential_angrms)
    anagram_list = []
    remove_identical_words!(potential_angrms)
    potential_angrms.each_with_index do |word, index|
      if canonical(word) == canonical(@word)
        anagram_list << potential_angrms[index]
      end
    end
    anagram_list
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def remove_identical_words!(potential_angrms)
    potential_angrms.delete_if { |word| word.downcase == @word }
  end

end