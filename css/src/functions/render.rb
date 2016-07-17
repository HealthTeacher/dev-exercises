def render(partial)
  # assuming we want to keep the rails practice of prefixing file names
  # of partials with "_"
  Haml::Engine.new(File.read("./src/views/partials/_#{partial}.haml")).render
end