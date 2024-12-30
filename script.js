function showAcceptanceModal() {
    const modal = document.getElementById('acceptanceModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('acceptanceModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('acceptanceModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Add smooth scroll behavior for sections
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', () => {
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
