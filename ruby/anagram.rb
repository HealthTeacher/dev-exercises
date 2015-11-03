class Anagram

  attr_reader :word
  def initialize(word)
    @word = word
  end

  def match(word_list)
    anagram_list = []
    sorted_list = sort_list(word_list)
    sorted_list.each_with_index do |sorted_word, index|
      if sorted_word == canonical(word) && word_list[index].downcase != word.downcase #valid word method
        anagram_list << word_list[index]
      end
    end
    anagram_list
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def sort_list(potential_anagrams)
    potential_anagrams.map {|word| canonical(word)}
  end

end

class Anagram

  attr_reader :word
  def initialize(word)
    @word = word
  end

  def match(word_list)
    anagram_list = []
    sorted_list = sort_list(word_list)
    sorted_list.each_with_index do |sorted_word, index|
      if sorted_word == canonical(word) && word_list[index].downcase != word.downcase #valid word method
        anagram_list << word_list[index]
      end
    end
    anagram_list
  end

  def canonical(word)
    word.downcase.split('').sort
  end

  def sort_list(potential_anagrams)
    potential_anagrams.map {|word| canonical(word)}
  end

end




# should I do @ word or attr_reader
# check on namings
# is canonical word stringing of methods ok?
# should the anagram list be created in initialize?