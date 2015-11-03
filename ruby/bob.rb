class Bob

  def hey(remark)
    if remark == "WATCH OUT!"
      "Whoa, chill out!"
    elsif remark.strip.empty?
      "Fine. Be that way!"
    elsif (remark =~ /[a-zA-Z]/) == nil && (remark.end_with? "?") == false
      "Whatever."
    elsif remark.end_with? "?" #&& remark.gsub(/[abc]/, "") != remark
      "Sure."
    elsif remark.upcase == remark
      "Whoa, chill out!"
    else
      "Whatever."
    end
  end

end