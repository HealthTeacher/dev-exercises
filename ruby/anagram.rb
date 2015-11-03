class Anagram

  def initialize(word)
    @word = word
  end

  def match(word_list)
    anagram_list = []
    sorted_list = sort_list(word_list)
    sorted_list.each_with_index do |sorted_word, index|
      if sorted_word == canonical(@word) && word_list[index].downcase != @word.downcase
        anagram_list << word_list[index]
      end
    end
    anagram_list
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def sort_list(word_array)
    word_array.map {|word| canonical(word)}
  end

end