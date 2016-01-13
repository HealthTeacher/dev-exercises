class Complement

	VERSION = 3
	DNA_RNA = {
			'G' => 'C', 
			'C' => 'G', 
			'T' => 'A', 
			'A' => 'U' 
		}
	
	def self.of_dna(dna)
		empty = ""
		dna.each_char do |d| 
			if DNA_RNA[d]
				empty << DNA_RNA[d] 
			else
				raise ArgumentError.new("There is no RNA complement")
			end
		end
		empty
	end

end	