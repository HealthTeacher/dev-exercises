class Anagram
  attr_reader :root_word

  def initialize(root_word)
    @root_word = root_word
  end

  def match(candidates)
    anagrams = []
    for c in candidates do
      anagrams.push(c) if (c.downcase != self.root_word.downcase) && (c.downcase.split(//).sort == self.root_word.downcase.split(//).sort)
    end
    anagrams
  end

end
