document.getElementById('start-button').addEventListener('click', function() {
    const examSection = document.getElementById('exam-section');
    examSection.classList.add('active'); // Add class to activate the section
    this.style.display = 'none'; // Hide the button
    document.getElementById('comment-form').classList.remove('hidden'); // Show the form
    
});

