import { useState } from 'react';
import Header from './Header';
import CardGrid from './CardGrid';
import DifficultySelectionModal from './DifficultySelectionModal';

function App() {
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setIsModalVisible(false);
  };

  return (
    <div className="app-container">
      {selectedDifficulty && <Header />} {/* Only render Header when a difficulty is selected */}
      {isModalVisible && <DifficultySelectionModal onSelectDifficulty={handleSelectDifficulty} />}
      {!isModalVisible && selectedDifficulty && <CardGrid difficulty={selectedDifficulty} />}
    </div>
  );
}

export default App;
