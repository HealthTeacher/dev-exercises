class Anagram

  def initialize(word)
    @word = word
  end

  def match(word_list)
    anagram_list = []
    remove_identical_words!(word_list)
    word_list.each_with_index do |word, index|
      if canonical(word) == canonical(@word)
        anagram_list << word_list[index]
      end
    end
    anagram_list
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def remove_identical_words!(word_list)
    word_list.delete_if { |word| word.downcase == @word }
  end

end