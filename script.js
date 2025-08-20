document.addEventListener('DOMContentLoaded', function() {
    const riddles = [
        { date: '2025-08-20', riddle: 'What has to be broken before you can use it?', hint: 'Think about breakfast.', answer: 'egg' },
  { date: '2025-08-19', riddle: 'The more of me you take, the more you leave behind. What am I?', hint: 'Think about walking.', answer: 'footsteps' },
    { date: '2025-08-18', riddle: 'I’m light as a feather, yet the strongest person can’t hold me for long. What am I?', hint: 'You need me to live.', answer: 'breath' },
    { date: '2025-08-17', riddle: 'The more you take from me, the bigger I get. What am I?', hint: 'It’s an empty space.', answer: 'a hole' },
    { date: '2025-08-16', riddle: 'I have hands, but I cannot clap. What am I?', hint: 'Look at your wall.', answer: 'a clock' },
    { date: '2025-08-15', riddle: 'I fly without wings, I cry without eyes. Wherever I go, darkness follows me. What am I?', hint: 'Look up at the sky.', answer: 'a cloud' },
    { date: '2025-08-14', riddle: 'The more you share me, the less I become. What am I?', hint: 'Keep it to yourself.', answer: 'a secret' },
    { date: '2025-08-13', riddle: 'What begins with T, ends with T, and has T in it?', hint: 'Think about tea time.', answer: 'a teapot' },
    { date: '2025-08-12', riddle: 'What has a neck but no head?', hint: 'You drink from it.', answer: 'a bottle' },
    { date: '2025-08-11', riddle: 'The more you take away from me, the larger I become. What am I?', hint: 'Same as digging.', answer: 'a hole' },
    { date: '2025-08-10', riddle: 'What belongs to you but is used more by others?', hint: 'People call you by it.', answer: 'your name' },
    { date: '2025-08-09', riddle: 'What comes down but never goes up?', hint: 'Look at the sky.', answer: 'rain' },
    { date: '2025-08-08', riddle: 'What has one eye but cannot see?', hint: 'It’s sharp.', answer: 'a needle' },
    { date: '2025-08-07', riddle: 'What has many teeth but cannot bite?', hint: 'You use it daily.', answer: 'a comb' },
    { date: '2025-08-06', riddle: 'The more you use me, the sharper I get. What am I?', hint: 'Think kitchen tools.', answer: 'a knife' },
    { date: '2025-08-05', riddle: 'What has cities but no houses, rivers but no water, forests but no trees?', hint: 'You fold it.', answer: 'a map' },
    { date: '2025-08-04', riddle: 'I’m always moving but I never have legs. What am I?', hint: 'Look at nature.', answer: 'a river' },
    { date: '2025-08-03', riddle: 'I have branches, but no fruit, trunk, or leaves. What am I?', hint: 'Think about money.', answer: 'a bank' },
    { date: '2025-08-02', riddle: 'The more you look at me, the less you see. What am I?', hint: 'It happens at night.', answer: 'darkness' },
    { date: '2025-08-01', riddle: 'I have keys but no locks. I have space but no room. You can enter but not go outside. What am I?', hint: 'You use it to type.', answer: 'a keyboard' },
    { date: '2025-07-31', riddle: 'The more you wash me, the dirtier I get. What am I?', hint: 'Think about cleaning.', answer: 'water' },
    { date: '2025-07-30', riddle: 'What has ears but cannot hear?', hint: 'It grows in fields.', answer: 'corn' },
    { date: '2025-07-29', riddle: 'What kind of coat can only be put on when it’s wet?', hint: 'Think about painting.', answer: 'a coat of paint' },
    { date: '2025-07-28', riddle: 'What comes once in a minute, twice in a moment, but never in a thousand years?', hint: 'It’s a letter.', answer: 'the letter M' },
    { date: '2025-07-27', riddle: 'I’m always running, but I never move. What am I?', hint: 'You can see me on screens.', answer: 'a clock' },
    { date: '2025-07-26', riddle: 'What can travel all around the world without leaving its corner?', hint: 'It’s sticky.', answer: 'a stamp' },
    { date: '2025-07-25', riddle: 'What has legs but doesn’t walk?', hint: 'Look around your room.', answer: 'a chair' },
    { date: '2025-07-24', riddle: 'What has an end but no beginning, a home but no family, a space without room?', hint: 'Think punctuation.', answer: 'the letter e' },
    { date: '2025-07-23', riddle: 'What has words but never speaks?', hint: 'You open it to learn.', answer: 'a book' },
    { date: '2025-07-22', riddle: 'The more of me you take, the more you leave behind. What am I?', hint: 'It’s about steps.', answer: 'footprints' },
    { date: '2025-07-21', riddle: 'I have no life, but I can die. What am I?', hint: 'Used for light.', answer: 'a battery' },
    { date: '2025-07-20', riddle: 'What can you catch but not throw?', hint: 'People sneeze it out.', answer: 'a cold' },
    { date: '2025-07-19', riddle: 'I am always in bed but never sleep. What am I?', hint: 'Look at rivers.', answer: 'a riverbed' },
    { date: '2025-07-18', riddle: 'What gets bigger the more you take away from it?', hint: 'Same old classic.', answer: 'a hole' },
    { date: '2025-07-17', riddle: 'I’m round and have many stories to tell. What am I?', hint: 'Check the library.', answer: 'a globe' },
    { date: '2025-07-16', riddle: 'What is so fragile that saying its name breaks it?', hint: 'Shhh…', answer: 'silence' },
    { date: '2025-07-15', riddle: 'I’m not alive, but I grow. I don’t have lungs, but I need air. What am I?', hint: 'Be careful around me.', answer: 'fire' },
    { date: '2025-07-14', riddle: 'I’m always ahead of you but never seen. What am I?', hint: 'It hasn’t happened yet.', answer: 'the future' },
    { date: '2025-07-13', riddle: 'I’m always coming but never arrive. What am I?', hint: 'You expect me daily.', answer: 'tomorrow' },
    { date: '2025-07-12', riddle: 'The more you take away, the stronger I become. What am I?', hint: 'Think math.', answer: 'a debt' },
    { date: '2025-07-11', riddle: 'What gets sharper the more you use it?', hint: 'Not a knife.', answer: 'your brain' },
    { date: '2025-07-10', riddle: 'What goes around the world but stays in a corner?', hint: 'It sticks to envelopes.', answer: 'a stamp' },
    { date: '2025-07-09', riddle: 'I have a bed but never sleep, I run but never walk. What am I?', hint: 'Flows endlessly.', answer: 'a river' },
    { date: '2025-07-08', riddle: 'I’m always hungry, I must be fed. The finger I touch will soon turn red. What am I?', hint: 'Don’t touch me.', answer: 'fire' },
    { date: '2025-07-07', riddle: 'What gets bigger when you turn it upside down?', hint: 'Think numbers.', answer: 'the number 6' },
    { date: '2025-07-06', riddle: 'What has a thumb and four fingers but is not alive?', hint: 'You wear it.', answer: 'a glove' },
    { date: '2025-07-05', riddle: 'What invention lets you look right through a wall?', hint: 'Simple but useful.', answer: 'a window' },
    { date: '2025-07-04', riddle: 'What can’t talk but replies when spoken to?', hint: 'Echo… echo…', answer: 'an echo' },
    { date: '2025-07-03', riddle: 'What runs but never walks, murmurs but never talks?', hint: 'Nature again.', answer: 'a stream' },
    { date: '2025-07-02', riddle: 'I’m always found in the past. I can be created in the present, but the future can never trap me. What am I?', hint: 'Think history.', answer: 'a memory' },
    { date: '2025-07-01', riddle: 'I have no mouth but I speak, no ears but I hear. What am I?', hint: 'Digital assistant style.', answer: 'an echo' }
];

    function createRiddleHTML(riddleData) {
        return `
            <div class="riddle-content">
                <p class="riddle-text">${riddleData.riddle}</p>
                
                <details class="hint-section">
                    <summary>💡 Need a hint?</summary>
                    <p>${riddleData.hint}</p>
                </details>
                
                <div class="answer-section">
                    <input type="text" class="answer-input" placeholder="Enter your answer...">
                    <button class="submit-button">Submit</button>
                </div>
                
                <div class="feedback-message"></div>
                <div class="correct-answer-display" style="display: none;">
                    <strong>🎉 Correct!</strong> The answer is: <em>${riddleData.answer}</em>
                </div>
            </div>
        `;
    }

    function setupRiddleEvents(container, riddleData) {
        const input = container.querySelector('.answer-input');
        const button = container.querySelector('.submit-button');
        const feedback = container.querySelector('.feedback-message');
        const correctDisplay = container.querySelector('.correct-answer-display');
        
        let attempts = 0;

        function checkAnswer() {
            const userAnswer = input.value.trim().toLowerCase();
            attempts++;

            if (userAnswer === riddleData.answer.toLowerCase()) {
                feedback.textContent = attempts === 1 ? 
                    '🎯 Perfect! First try!' : 
                    `🎉 Excellent! Got it in ${attempts} attempts!`;
                feedback.className = 'feedback-message correct';
                correctDisplay.style.display = 'block';
                input.disabled = true;
                button.disabled = true;
                button.textContent = 'Solved!';
            } else {
                const encouragement = attempts === 1 ? 
                    'Not quite! Give it another shot 🤔' :
                    attempts === 2 ? 
                    'Close, but not there yet. Try the hint! 💭' :
                    'Keep thinking! You\'ve got this 💪';
                
                feedback.textContent = encouragement;
                feedback.className = 'feedback-message incorrect';
                input.focus();
            }
        }

        button.addEventListener('click', checkAnswer);
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !button.disabled) {
                checkAnswer();
            }
        });
    }

    function init() {
        const riddleContainer = document.getElementById('riddle-container');
        const archiveContainer = document.getElementById('archive-container');

        if (!riddleContainer || !archiveContainer) {
            console.error('Containers not found');
            return;
        }

        // Today's riddle
        const todaysRiddle = riddles[riddles.length - 1];
        riddleContainer.innerHTML = createRiddleHTML(todaysRiddle);
        setupRiddleEvents(riddleContainer, todaysRiddle);

        // Archive
        const pastRiddles = riddles.slice(0, riddles.length - 1).reverse();
        
        if (pastRiddles.length > 0) {
            let archiveHTML = '';
            pastRiddles.forEach(function(riddleData) {
                const date = new Date(riddleData.date + 'T00:00:00');
                const formattedDate = date.toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'long', 
                    day: 'numeric',
                    year: 'numeric'
                });
                
                archiveHTML += `
                    <details class="archive-item">
                        <summary>🗓️ ${formattedDate}</summary>
                        ${createRiddleHTML(riddleData)}
                    </details>
                `;
            });
            
            archiveContainer.innerHTML = archiveHTML;
            
            // Setup events for archive riddles
            const archiveItems = archiveContainer.querySelectorAll('.archive-item');
            archiveItems.forEach(function(item, index) {
                setupRiddleEvents(item, pastRiddles[index]);
            });
            
        } else {
            archiveContainer.innerHTML = '<div class="card"><p style="text-align: center; color: var(--text-muted);">🚀 Archive coming soon! Check back tomorrow for more challenges.</p></div>';
        }
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    if (header) {
        let lastScrollY = window.scrollY;
        window.addEventListener('scroll', function() {
            if (window.scrollY > lastScrollY && window.scrollY > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScrollY = window.scrollY;
        });
    }

    init();
});
